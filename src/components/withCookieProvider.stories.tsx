import React from 'react';
import withCookieProvider, { CookieProviderProps } from './withCookieProvider';

const DummyComponent = () => <div>Hello World!</div>;

const config = {
  essential: {
    name: 'Necessary',
    description:
      'These cookies are necessary for this website to function correctly. They are set when you perform certain actions on the site, such as creating an account, logging in, changing your privacy preferences or submitting a form. You can block these cookies in your browser, but this will stop parts of the site from working properly.',
    cookies: [
      {
        name: '@Zengenti/Cookie/Control',
        provider: 'Contensis',
        expiration: '16 days',
        purpose: 'We use this cookie to store your cookie preferences.',
      },
    ],
    required: true,
  },
  advertising: {
    name: 'Advertising',
    description:
      'Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.',
    cookies: [],
  },
  analytical: {
    name: 'Analytical',
    description:
      'These cookies record anonymous data on how visitors use our website to help us monitor how well our website works. This data includes how many people have looked at specific pages, how long visitors stay on the site, and what devices they use. We use this data to identify changes that we could make to improve your experience and make our website more efficient.',
    cookies: [
      {
        name: '_clck',
        provider: 'Microsoft Clarity',
        expiration: 'Session',
        purpose:
          'Persists the Clarity User ID and preferences, unique to that site is attributed to the same user ID. ',
      },
      {
        name: '_clsk',
        provider: 'Microsoft Clarity',
        expiration: 'Session',
        purpose: 'Connects multiple page views by a user into a single Clarity session recording.',
      },
    ],
  },
  functional: {
    name: 'Functional',
    description:
      'These cookies allow the website to provide extra functionality and more personalised experiences. They may be set by us or by third party providers whose services we have added to our pages. If you choose not to allow these cookies, these services may not work correctly.',
    cookies: [
      {
        name: '__cf_bm',
        provider: 'CloudFlare',
        expiration: 'Session',
        purpose: "Cloudflare, Codepen's CDN provider, uses this cookie to identify and stop malicious bot traffic.",
      },
    ],
  },
  marketing: {
    name: 'Marketing',
    description:
      'We set some cookies so you are shown more relevant marketing content. These include cookies from third-party advertising networks to show you different adverts on their services if you have previously visited our site. If you choose not to allow these cookies, you may experience less relevant advertising on other sites.',
    cookies: [
      {
        name: '__cf_bm',
        provider: '.g2crowd.com',
        expiration: '1 hour',
        purpose: 'This cookie, set by Cloudflare, is used to support Cloudflare Bot Management.',
      },
    ],
  },
};

const popup = {
  text: 'This website uses cookies to enhance your experience.',
};

const WrappedComponent = withCookieProvider({ config, popup })(DummyComponent);

export default {
  title: 'Cookie Control/Provider',
  component: WrappedComponent,
};

export const Default = () => <WrappedComponent />;
