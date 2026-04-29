import globals from "globals";
import imp from "eslint-plugin-import";
import ts from "typescript-eslint";

import { defineConfig } from "eslint/config";

export default defineConfig(
    ts.configs.stylistic,
    {
        ignores: [ "**/node_modules/**", "**/build-tools/**", "**/distribution/**" ],

        plugins: {
            import: imp
        },

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",

            globals: {
                ...globals.node, ...globals.jest, ...globals.es2027
            },

            parserOptions: {
                project: "./tsconfig.json"
            }
        },

        settings: {
            "import/parsers": {
                "@typescript-eslint/parser": [ ".ts", ".tsx" ]
            },

            "import/resolver": {
                node: {
                    extensions: [ ".js", ".jsx", ".ts", ".tsx", ".test.ts" ]
                }
            }
        },

        rules: {
            "quotes": [ "error", "double" ],

            "rest-spread-spacing": "off",

            "comma-dangle": [ "error", "never" ],

            "comma-spacing": [ "error", {
                before: false, after: true
            } ],

            "no-multi-spaces": [ "error", {
                ignoreEOLComments: false
            } ],

            "array-bracket-spacing": [ "error", "always" ],

            "array-bracket-newline": [ "error", "consistent" ],

            "object-curly-spacing": [ "error", "always" ],

            "object-curly-newline": [ "error", {
                multiline: true, consistent: true
            } ],

            "object-property-newline": [ "error", {
                allowAllPropertiesOnSameLine: true
            } ],

            "keyword-spacing": [ "error" ],

            "brace-style": [ "error", "1tbs", {
                allowSingleLine: true
            } ],

            "space-before-blocks": [ "error" ],

            "curly": [ "off", "multi-line", "consistent" ],

            "semi": [ "error", "always" ],

            "max-len": [ "error", {
                code: 210,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true
            } ],

            "quote-props": [ "error", "consistent-as-needed" ],

            "@typescript-eslint/no-require-imports": [ "error" ],
            "@typescript-eslint/no-unused-vars": [ "off" ],
            "@typescript-eslint/no-namespace": [ "off" ],

            "import/no-extraneous-dependencies": [ "off", {
                devDependencies: [ "**/test/**", "**/build-tools/**" ],
                optionalDependencies: false,
                peerDependencies: true
            } ],

            "no-unused-vars": "off",

            "import/no-unresolved": [ "off" ],

            "import/order": [ "off", {
                groups: [ "builtin", "external" ]
            } ],

            "no-duplicate-imports": [ "error" ],

            "no-shadow": [ "off" ],

            "@typescript-eslint/no-shadow": [ "off" ],

            "key-spacing": [ "error" ],

            "no-multiple-empty-lines": [ "error" ],

            "@typescript-eslint/no-floating-promises": [ "error" ],

            "no-return-await": [ "off" ],

            "@typescript-eslint/return-await": [ "error" ],

            "no-trailing-spaces": [ "off" ],

            "dot-notation": [ "off" ],

            "no-bitwise": [ "error" ],

            "no-global-assign": "off",

            "@typescript-eslint/member-ordering": [ "off", {
                default: [ "field", "public-static-field", "protected-static-field", "private-static-field", "constructor", "method", "public-static-method", "protected-static-method", "private-static-method" ]
            } ]
        }
    }
);