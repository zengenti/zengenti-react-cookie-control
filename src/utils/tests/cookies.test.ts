// import {
//   clearCookie,
//   getCookies,
//   getCookieValue,
//   setCookieValue,
// } from "../cookies";

// jest.useFakeTimers({
//   now: 946684800000,
// });

// describe("Setting the value of a cookie", () => {
//   test('to "myValue" without options', () => {
//     setCookieValue("myCookie", "myValue");
//     expect(document.cookie).toBe(
//       "myCookie = myValue; expires=Sun, 02 Jan 2000 00:00:00 GMT"
//     );
//   });

//   test('to "myValue" with no expiration', () => {
//     setCookieValue("myCookie", "myValue", 0);
//     expect(document.cookie).toBe("myCookie = myValue");
//   });

//   test('to "myValue" with 30 day expiration', () => {
//     setCookieValue("myCookie", "myValue", 30);
//     expect(document.cookie).toBe(
//       "myCookie = myValue; expires=Mon, 31 Jan 2000 00:00:00 GMT"
//     );
//   });

//   test('to "myValue" with 30 day expiration on the root path', () => {
//     setCookieValue("myCookie", "myValue", 30, "/");
//     expect(document.cookie).toBe(
//       "myCookie = myValue; expires=Mon, 31 Jan 2000 00:00:00 GMT; path = /"
//     );
//   });

//   test('to "myValue" with 30 day expiration on /path', () => {
//     setCookieValue("myCookie", "myValue", 30, "/path");
//     expect(document.cookie).toBe(
//       "myCookie = myValue; expires=Mon, 31 Jan 2000 00:00:00 GMT; path = /path"
//     );
//   });

//   test('to "myValue" with no expiration on root path', () => {
//     setCookieValue("myCookie", "myValue", 0, "/");
//     expect(document.cookie).toBe("myCookie = myValue; path = /");
//   });

//   test('to "myValue" with no expiration on /path', () => {
//     setCookieValue("myCookie", "myValue", 0, "/path");
//     expect(document.cookie).toBe("myCookie = myValue; path = /path");
//   });

//   test('to "myValue" on root path', () => {
//     setCookieValue("myCookie", "myValue", undefined, "/");
//     expect(document.cookie).toBe(
//       "myCookie = myValue; expires=Sun, 02 Jan 2000 00:00:00 GMT; path = /"
//     );
//   });

//   test('to "myValue" on /path', () => {
//     setCookieValue("myCookie", "myValue", undefined, "/path");
//     expect(document.cookie).toBe(
//       "myCookie = myValue; expires=Sun, 02 Jan 2000 00:00:00 GMT; path = /path"
//     );
//   });
// });

// test("Clears the value of a cookie", () => {
//   clearCookie("cookieToClear");
//   expect(document.cookie).toBe(
//     "cookieToClear = ; expires=Sat, 01 Jan 2000 00:00:00 GMT"
//   );
// });

// test("Get all cookies", () => {
//   document.cookie =
//     "a=value1; b=value2; c=anotherValue; d=4; e=5; myCookie=cookieValue";

//   const cookies = getCookies();
//   expect(cookies).toStrictEqual({
//     a: "value1",
//     b: "value2",
//     c: "anotherValue",
//     d: "4",
//     e: "5",
//     myCookie: "cookieValue",
//   });
// });

// describe("Get specific cookie", () => {
//   beforeAll(() => {
//     document.cookie =
//       "a=value1; b=value2; c=anotherValue; d=4; e=5; myCookie=cookieValue";
//   });

//   test('"a" should return correct value', () => {
//     const a = getCookieValue("a");
//     expect(a).toBe("value1");
//   });

//   test('"b" should return correct value', () => {
//     const b = getCookieValue("b");
//     expect(b).toBe("value2");
//   });

//   test('"c" should return correct value', () => {
//     const c = getCookieValue("c");
//     expect(c).toBe("anotherValue");
//   });

//   test('"d" should return correct value', () => {
//     const d = getCookieValue("d");
//     expect(d).toBe("4");
//   });

//   test('"e" should return correct value', () => {
//     const e = getCookieValue("e");
//     expect(e).toBe("5");
//   });

//   test('"myCookie" should return correct value', () => {
//     const myCookie = getCookieValue("myCookie");
//     expect(myCookie).toBe("cookieValue");
//   });

//   test('"invalid" should return undefined value', () => {
//     const invalid = getCookieValue("invalid");
//     expect(invalid).toBeUndefined();
//   });
// });
