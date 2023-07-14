module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unsafe-call": ["off"],
    "@typescript-eslint/no-unsafe-member-access": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      files: ["vite.config.ts"],
      excludedFiles: "*.ts",
    },
    {
      files: [".eslintrc.cjs"],
      excludedFiles: "*.cjs",
    },
  ],
};
