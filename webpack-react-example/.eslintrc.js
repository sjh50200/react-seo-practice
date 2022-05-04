module.exports = {
    parser: "@typescript-eslint/paresr", // ESLint 파서 지정
    parserOptions: {
        ecmaVersion: 2020, // 최신 ECMAScript 기능들이 파싱되도록 허용
        sourceType: "module",
        ecmaFeatures: {
            jsx: true //JS 파싱 허용
        }
    },
    settings: {
        react: {
            version: "detect" // eslint-plugin-react를 통해 사용할 버젼 자동 감시
        }
    },
    extends: [
        "plugin: react/recommended", // @eslint-plugin-react가 권장하는 규칙 사용
        "plugin: @typescript-eslint/recommended" // @typescript-eslint/eslint-plugin 권장 규칙 사용
    ],
    rules: {
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    }
    //TODO prettier부터
}