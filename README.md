# Zengenti React Cookie Control

A cookie control for React projects.

## Install

```
npm install zengenti-react-cookie-control
```

## Using

### withCookieProvider

This HOC should be added as high up the tree as possible to expose the context to all the application.

This will automatically add the `Cookie Control` and `Update Preferences` components to the DOM.

```
import { withCookieProvider } from 'zengenti-react-cookie-control';

const settings = {
  ...
};

const AppRoot = () => {
  ...
}

export default withCookieProvider(settings)(AppRoot);
```

The HOC take a settings object. The available properties are:

| Property                 | Type                                                             | Description                                                                            |
| ------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| cookieControl            | CookieControlProps                                               | Properties to use in `Cookie Control` component                                        |
| defaultCookiePreferences | { analytics: boolean; functional: boolean; marketing: boolean; } | The default values to render the "toggles" if no preferences have been set by the user |
| updatePreferences        | UpdatePreferencesProps                                           | Properties to use in `Update Preferences` component                                    |
| theme                    | Theme                                                            | CSS properties to be applied to the modules components                                 |

<br>

#### CookieControlProps

| Property | Type   | Description                                              |
| -------- | ------ | -------------------------------------------------------- |
| content  | string | The content to display in the `Cookie Control` component |

<br>

#### UpdatePreferencesProps

| Property   | Type   | Description                                                             |
| ---------- | ------ | ----------------------------------------------------------------------- |
| content    | string | The content to display at the top of the `Update Preferences` component |
| analytics  | string | Description to display above the toggle for analytics cookies           |
| functional | string | Description to display above the toggle for functional cookies          |
| marketing  | string | Description to display above the toggle for marketing cookies           |
| necessary  | string | Description to display for necessary cookies                            |

<br>

#### Theme

The following type definition outlines the available properties that can be passed to the module.

All components rendered by this module have class names applied which can be targeted using css.

The button property also has a `customStyles` property where you can pass custom css to.
Doing this will remove any default button styles applied to this modules components.

```
theme?: {
    background?: string;
    button?: {
        borderRadius?: string;
        borderWidth?: string;
        borderColor?: string;
        color?: string;
        customStyles?: string | FlattenSimpleInterpolation;
        fontSize?: string;
        lineHeight?: string;
        padding?: string;
        solid?: {
            background?: string;
            color?: string;
            hover?: {
                background?: string;
                color?: string;
            };
        };
    };
    containerWidth?: string;
    divideColor?: string;
    heading?: {
        color?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
        lineHeight?: string;
    };
    iconColor?: string;
    linkColor?: string;
    text?: {
        color?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
        lineHeight?: string;
    };
    toggle?: {
        off?: {
            background?: string;
            hover?: string;
        };
        on?: {
            background?: string;
            hover?: string;
        };
    };
};
```

<br>

---

<br>

### Cookie Control Component

This component will be rendered if the user has not set any cookie preferences for the site

<br>

---

<br>

### Update Preferences Component

This component can be toggled to show using the `doToggleUpdatePreferences` function from the `useCookieControl` hook.

Alternatively you can import the `ToggleUpdatePreferences` component and style accordingly.

<br>

---

<br>

### ToggleUpdatePreferences

This is a button element that will toggle the visibility of the `Update Preferences` component.

This button can be added to any component / template and styled accordingly to suit the design needs.

<br>

---

<br>

### useCookieControl hook

This hook should be added to isolated components to prevent unnecessary re-rendering of elements in the tree.

The following properties are available from the hook

| Property                    | Type                                                             | Description                                                                      |
| --------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| acceptAll                   | () => void                                                       | Accept all cookie permissions                                                    |
| analytics                   | boolean                                                          | Analytics cookies accepted/declined                                              |
| declineAll                  | () => void                                                       | Decline all cookie permissions                                                   |
| defaultCookiePreferences    | { analytics: boolean; functional: boolean; marketing: boolean; } | Default preferences to use as toggle values if no user preferences have been set |
| functional                  | boolean                                                          | Functional cookies accepted/declined                                             |
| marketing                   | boolean                                                          | Marketing cookies accepted/declined                                              |
| setAnalytics                | react.Dispatch<react.SetStateAction<boolean>>                    | Update analytics cookie preference                                               |
| setFunctional               | react.Dispatch<react.SetStateAction<boolean>>                    | Update functional cookie preference                                              |
| setMarketing                | react.Dispatch<react.SetStateAction<boolean>>                    | Update marketing cookie preference                                               |
| showUpdatePreferences       | boolean                                                          | Should the update preferences component be displayed                             |
| showCookieControl           | boolean                                                          | Should the cookie control be displayed                                           |
| doToggleUpdatePreferences | () => void                                                       | Toggle visibility of update preferences component                                |
| updatePreferences           | () => void                                                       | Save cookie preferences                                                          |

An example component using this hook to inject scripts and "pixels" to the DOM

```
import React from 'react';
import { useCookieControl } from 'zengenti-react-cookie-control';

// function to inject scripts to the DOM
const loadScript = (props: { id: string; src: string; }) => {
  ...
}

const InjectScripts = () => {
  const { analytics, marketing } = useCookieControl();

  useEffect(() => {
    loadScript({
      id: 'trackingScripts-populo',
      src: '/static/trackingScripts/populo.js',
    });
    ...
  }, [analytics]);

  useEffect(() => {
    loadScript({
      id: 'trackingScripts-linkedIn',
      src: '/static/trackingScripts/linkedIn.js',
    });
    ...
  }, [marketing]);

  return (
    <>
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

export default InjectScripts;
```
