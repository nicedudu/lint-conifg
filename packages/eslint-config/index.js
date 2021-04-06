module.exports  = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
        "no-console": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-prototype-builtins": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-empty-function": "off",
        "react/jsx-filename-extension": [
            "warn",
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ]
    }
}