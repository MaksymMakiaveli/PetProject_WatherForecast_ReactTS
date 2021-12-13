const path = require('path');

const resolvePath = (pathDir) => path.resolve(__dirname, pathDir);

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@component': resolvePath('./src/components'),
      '@IconComponent': resolvePath('./src/components/WeatherIcons'),
      '@assets': resolvePath('./src/assets'),
      '@hooks': resolvePath('.src/hooks'),
    },
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
};
