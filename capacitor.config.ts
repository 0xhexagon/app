import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hexagon.app',
  appName: 'hexagon',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
