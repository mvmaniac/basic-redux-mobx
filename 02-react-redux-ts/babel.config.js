const presets = [
  [
    '@babel/preset-env',
    {
      targets: 'defaults',
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: true },
    },
  ],
  '@babel/preset-typescript',
  '@babel/preset-react',
];

const plugins = [];

module.exports = { presets, plugins };
