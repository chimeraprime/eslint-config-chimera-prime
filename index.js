module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "globals": {
    "window": true,
    "process": true,
    "module": true,
    "expect": true,
    "fixture": false,
    "test": false,
    "sinon": true,
    "React": true,
    "Raven": true,
  },
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    "no-var": 2,
    "prefer-const": 2,
    
    /**
    * Variables
    */
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-unused-vars": [2, {
      "vars": "local",
      "args": "after-used"
    }],
    "no-use-before-define": 0,
    
    /**
    * Possible errors
    */
    "no-cond-assign": [2, "always"],
    "no-console": 0,
    "no-debugger": 1,
    "no-alert": 1,
    "no-constant-condition": 1,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "block-scoped-var": 2,
    
    /**
    * Best practices
    */
    "consistent-return": 0,
    "curly": [2, "multi-line"],
    "default-case": 2,
    "dot-notation": [2, {
      "allowKeywords": true
    }],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-caller": 2,
    "no-else-return": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 0,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 2,
    "yoda": 2,
    
    /**
    * Style
    */
    "arrow-parens": [2, "as-needed"],
    "indent": [
      2,
      2,
      {"SwitchCase": 1}
    ],
    "brace-style": [
      2,
      "1tbs", {
        "allowSingleLine": true
      }
    ],
    "quotes": [
      2, "single", "avoid-escape"
    ],
    "camelcase": [1, {
      "properties": "never"
    }],
    "comma-dangle": [
      2, "always-multiline"
    ],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"],
    "eol-last": 2,
    "func-names": 1,
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    "new-cap": [0, {
      "newIsCap": true
    }],
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    "no-nested-ternary": 0,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-extra-parens": [2, "functions"],
    "no-underscore-dangle": 0,
    "one-var": [2, "never"],
    "padded-blocks": [2, "never"],
    "semi": [2, "always"],
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }],
    "object-curly-spacing": [2, "always"],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "space-infix-ops": 2,
    "spaced-comment": [2, "always", {
      "exceptions": ["-", "+"],
      "markers": ["=", "!"]
    }],
    
    "jsx-quotes": [2, "prefer-double"],
    "react/display-name": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": [2, {
        "noSortAlphabetically": true,
        "shorthandFirst": true
      }
    ],
    "react/jsx-no-duplicate-props": [2, {
      "ignoreCase": true
    }],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/jsx-wrap-multilines": 2,
    "react/jsx-tag-spacing": [
      2,
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never"
      }
    ],
    "react/jsx-no-target-blank": 2,

    "import/order": [2, {
      "newlines-between": "always"
    }]
  }
}
