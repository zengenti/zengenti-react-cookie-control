# Zengenti React Cookie Control

A flexible and accessible cookie consent solution for React projects. Includes:

- A modal for setting preferences
- Hooks for controlling cookie behaviour
- Fully configurable categories and themes

---

## 🚀 Installation

```bash
npm install zengenti-react-cookie-control
```

## ⚙️ Setup

Wrap your root app with withCookieProvider and pass in a settings object:

```jsx
import { withCookieProvider } from 'zengenti-react-cookie-control';

const settings = { ... };

const App = () => <YourApp />;

export default withCookieProvider(settings)(App);

```


### 🧩 Settings Structure
| Key                        | Type                             | Required | Description                                                                   |
|----------------------------|----------------------------------|----------|-------------------------------------------------------------------------------|
| `config`                   | `Record<string, CookieCategory>` | ✅       | Defines each cookie category, description, and list of cookies.               |
| `popup`                    | `object`                         | ✅       | Required popup banner config e.g. `{ text: "We like cookies 🍪" }`.           |
| `defaultPreferences`       | `object`                         | ❌       | Initial preferences for each optional category (e.g. analytics, marketing).   |
<!-- | `theme`                    | `object`                         | ❌       | Theme overrides (e.g. colours).                                             | -->


#### Example Config Entry
```json
  {
    essential: {
      name: 'Necessary',
      description: 'These cookies are needed for the site to work.',
      cookies: [
        {
          name: '@Zengenti/Cookie/Control',
          provider: 'Contensis',
          expiration: '16 days',
          purpose: 'Stores your cookie preferences.',
        },
      ],
      required: true,
    }
  }
```

## 💡 Modal Trigger

Use the ToggleCookieModal component to provide a button anywhere in your app (like in footers or headers) that opens the cookie preferences modal.

```jsx
import { ToggleCookieModal } from 'zengenti-react-cookie-control';

const Footer = () => (
  <footer>
    {/* Other footer content */}
    <ToggleCookieModal text="Cookie preferences" />
  </footer>
);
```

---

## 🔧 useCookieControl Hook

`useCookieControl` is a React hook providing access to cookie preferences state and actions. It lets you read and update user consent preferences inside your components.

**Features:**

* Access current cookie preferences (`analytics`, `advertising`, `functional`, `marketing`).
* Functions to accept all or decline all cookies.
* Individual setters to toggle each preference.
* Controls visibility of the preferences modal.
* Saves updated preferences and optionally reloads the page.

**Basic usage:**

```tsx
import { useCookieControl } from 'zengenti-react-cookie-control';

const CookieSettings = () => {
  const {
    analytics,
    advertising,
    functional,
    marketing,
    setAnalytics,
    setAdvertising,
    setFunctional,
    setMarketing,
    doAccept,
    doDecline,
    doUpdatePreferences,
    isUpdatePreferencesVisible,
    doToggleUpdatePreferences,
  } = useCookieControl();

  ...

};
```

Use this hook to build custom cookie settings UI or trigger consent actions programmatically.

## 🍪 Using `useCookieControl` to Load Scripts Conditionally

You can use the `useCookieControl` hook to load or block tracking scripts based on user cookie preferences.

```tsx
import React, { useEffect } from 'react';
import { useCookieControl } from 'zengenti-react-cookie-control';

// Helper to inject a script only once
const loadScript = ({ id, src }: { id: string; src: string }) => {
  if (!document.getElementById(id)) {
    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }
};

const ScriptLoader = () => {
  const { analytics, marketing } = useCookieControl();

  // Load analytics script if allowed
  useEffect(() => {
    if (analytics) {
      loadScript({ id: 'analytics-script', src: '/static/analytics.js' });
    }
  }, [analytics]);

  // Load marketing script if allowed
  useEffect(() => {
    if (marketing) {
      loadScript({ id: 'marketing-script', src: '/static/marketing.js' });
    }
  }, [marketing]);

  return (
    <>
      {/* Marketing pixel loaded only if marketing cookies are allowed */}
      {marketing && (
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=123456&fmt=gif"
        />
      )}
    </>
  );
};

export default ScriptLoader;
```

### How it works:

* useCookieControl provides booleans like analytics and marketing to know user consent.
* Scripts are loaded inside useEffect only when consent is given.
* This ensures tracking scripts run only if allowed, keeping your app compliant.
* You can add similar logic for other cookie categories.


---

## 📜 License & Contributing

This project is open source. Contributions are welcome.
To contribute, please fork the repo, make your changes, and submit a pull request.

---

## 🎨 Theme (Coming Soon)