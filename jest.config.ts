/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  globals: {
    window: {},
    extensionsToTreatAsEsm: [".ts"],
    document: {
      cookie: "",
    },
    navigator: {
      cookieEnabled: true,
    },
  },
  // this preset is absurdly important and (for me) was really a PITA to discover!
  preset: "ts-jest/presets/default-esm",

  // also important to not have anything in here
  transformIgnorePatterns: [],
  testPathIgnorePatterns: ["/node_modules/", "dist"],
};
