const presets = [
  [
    '@babel/preset-env',
    {
      targets: 'defaults',
      useBuiltIns: 'usage',
      corejs: { version: '3.29', proposals: true },
    },
  ],
  '@babel/preset-react',
];

const plugins = [];

module.exports = { presets, plugins };
