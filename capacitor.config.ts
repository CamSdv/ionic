import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-test',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 4000,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "FIT_CENTER"
    }
  }
};

export default config;
