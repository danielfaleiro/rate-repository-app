import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#747378',
    primary: '#0366d6',
    barBackground: '#25292C',
    contentBackground: '#E1E5E8',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'system'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  padding: {
    default: 10
  }
};

export default theme;