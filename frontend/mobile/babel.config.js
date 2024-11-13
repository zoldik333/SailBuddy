const { plugin } = require("typescript-eslint");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
          root: ['.'],
          alias: {
            '@img': './app/assets/images',
            '@fonts': './app/assets/fonts',
            '@components': './app/components',
            '@navigation': './app/navigation',
            '@screens': './app/screens',
            '@scenes': './app/scenes',
            '@utils': './app/utils',
          },
        },
      ],
    ]
  };
};