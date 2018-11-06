module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    //"^.+\\.jsx?$": "babel-jest",
    ".*.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".(css|jpg|png)$": "<rootDir>/empty-module.js"
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/index.tsx"]
};
