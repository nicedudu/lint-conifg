module.exports = {
    root: true,
    extends: ["./index.js"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json"
    },
    rules: {
        "import/prefer-default-export": "off"
    }
}