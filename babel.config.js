const presets = [
  [
    "@babel/env",
    {
      useBuiltIns: "usage",
    },
  ],
  ["@babel/preset-react"],
  ["@babel/preset-typescript"]
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",
  "react-hot-loader/babel"
]

module.exports = {
  presets,
  plugins
};
