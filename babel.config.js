module.exports = function (api) {
  api.cache(true);
  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',  // 애니메이션 최적화
      '@babel/plugin-proposal-export-namespace-from',  // ESNext 기능 지원
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './assets',
        },
      }],
    ],
  };
};
