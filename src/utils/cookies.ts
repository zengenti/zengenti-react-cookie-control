const canUseCookies = () => {
  return typeof window !== "undefined" && navigator.cookieEnabled;
};

const getExpirationDate = (expiresInDays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + expiresInDays * 24 * 60 * 60 * 1000);

  return "; expires=" + d.toUTCString();
};

/**
 * Get all cookies as key/value pairs
 */
export const getCookies = (): { [key: string]: string } => {
  if (!canUseCookies()) return {};

  const cookies = document.cookie?.trim();

  const cookiesObj: { [key: string]: string } =
    cookies.length > 0
      ? cookies.split(";").reduce((obj, val) => {
          const parts = val.split("=");
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
 * Clear cookie value by key
 */
export const clearCookie = (key: string) => {
  if (!canUseCookies()) return;
  const expiration = getExpirationDate(0);

  document.cookie = `${key} = ${expiration}`;
};

/**
 * Set cookie value
 */
export const setCookieValue = (
  key: string,
  value: string,
  expiresInDays?: number,
  path?: string
): void => {
  if (typeof window === "undefined") return;

  // Check browser cookies enables
  if (!navigator.cookieEnabled) return;

  const cookiePath = path ? `; path = ${path}` : "";
  const expiration =
    expiresInDays === 0 ? "" : getExpirationDate(expiresInDays || 1);

  document.cookie = `${key} = ${value}${expiration}${cookiePath}`;
};
