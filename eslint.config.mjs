import nextConfig from "eslint-config-next/core-web-vitals";
import tsConfig from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  ...nextConfig,
  ...tsConfig,
  prettier,
  {
    rules: {
      quotes: ["error", "double"],
      "arrow-body-style": ["error", "as-needed"],

      // === Bug prevention rules ===
      // Prevent importing from next/router in App Router projects
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "next/router",
              message:
                "Use 'next/navigation' instead. next/router is for Pages Router only.",
            },
          ],
        },
      ],
      // Prevent unused variables (catches dead code)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Consistent type imports for tree-shaking
      "@typescript-eslint/consistent-type-imports": "warn",
      // Prevent console.log in production code
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    ignores: ["next.config.js", ".next/*"],
  },
];

export default eslintConfig;
