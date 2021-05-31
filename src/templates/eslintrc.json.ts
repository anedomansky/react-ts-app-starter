const content = `{
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "jsx-a11y"
    ],
    "env": {
        "browser": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "no-use-before-define": "off",
        "no-console": "off",
        "object-curly-newline": "off",
        "max-len": "off",
        "no-undef": "off",
        "indent": [
            "error",
            4
        ],
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "react/jsx-filename-extension": [
            "warn",
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "react/jsx-indent": [
            "warn",
            4
        ],
        "react/prop-types": 0,
        "react/jsx-indent-props": 0,
        "react/no-array-index-key": 0,
        "react/button-has-type": 0,
        "jsx-a11y/label-has-associated-control": [
            "error",
            {
                "labelComponents": [],
                "labelAttributes": [],
                "controlComponents": [],
                "assert": "htmlFor",
                "depth": 25
            }
        ],
        "react-hooks/rules-of-hooks": "error"
    }
}
`;

export default content;
