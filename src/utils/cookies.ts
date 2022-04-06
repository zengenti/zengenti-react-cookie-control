/**
 * Get all cookies as key/value pairs
 */
export const getCookies = (): { [key: string]: string } => {
  if (typeof window === 'undefined') return {};

  const cookies = document.cookie?.trim();

  const cookiesObj: { [key: string]: string } =
    cookies.length > 0
      ? cookies.split(';').reduce((obj, val) => {
          const parts = val.split('=');
          const key = parts[0].trim();
          const value = parts[1].trim();
          return {
            ...obj,
            [key]: value,
          };
        }, {})
      : {};

  return cookiesObj;
};

/**
 * Get cookie value by key
 */
export const getCookieValue = (key: string): string => {
  const cookies = getCookies();
  return cookies[key];
};

/**
 * Set cookie value
 */
export const setCookieValue = (
  key: string,
  value: string,
  expiresInDays?: number
): void => {
  if (typeof window === 'undefined') return;

  // Check browser cookies enables
  if (!navigator.cookieEnabled) return;

  // Clear cookie
  if (expiresInDays === 0) document.cookie = `${key} = ${value}`;
  // Set cookie with experiation in days
  else {
    const d = new Date();
    d.setTime(d.getTime() + (expiresInDays || 1) * 24 * 60 * 60 * 1000);

    const expires = 'expires=' + d.toUTCString();

    document.cookie = `${key} = ${value}; ${expires}`;
  }
};
