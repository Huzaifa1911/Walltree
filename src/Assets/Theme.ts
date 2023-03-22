const AppTheme = {
  colors: {
    primary: '#ff00c8',
    background: '#1b2135',
    surface: '#aab8e2',
    placeholder: '#E5E5E5',
    black: '#0c0e1c',
    blue: '#3C84AB',
    green: '#599339',
    pink: '#981475',
    gold: '#CC933A',
  } as const,
  fonts: {
    Thin: 'Poppins-Thin',
    Regular: 'Poppins-Regular',
    Medium: 'Poppins-SemiBold',
    Bold: 'Poppins-Bold',
  } as const,
};

export default AppTheme;

export type AppThemeType = typeof AppTheme;
