module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@Assets': './src/Assets',
          '@Components': './src/Components',
          '@Icons': './src/Icons',
          '@Navigation': './src/Navigation',
          '@Screens': './src/Screens',
          '@Services': './src/Services',
          '@Styles': './src/Styles',
          '@Utils': './src/Utils',
        },
      },
    ],
  ],
};
