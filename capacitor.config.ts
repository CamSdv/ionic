import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-test',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      splashFullScreen: true,
      splashImmersive: true,
      androidScaleType: 'CENTER_CROP',
      showSplashScreen: true,
      launchAutoHide: true,
      androidSplashResourceName: "splash"
    }
  }
};

export default config;
