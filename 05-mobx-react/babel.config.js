const presets = [
  [
    '@babel/preset-env',
    {
      targets: 'defaults',
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: true },
    },
  ],
  '@babel/preset-react',
];

const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-private-methods', { loose: true }],
];

module.exports = { presets, plugins };
