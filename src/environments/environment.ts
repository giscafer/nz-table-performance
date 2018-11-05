// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  uat: false,
  dev: true,
  test: false,
  hmr: false,
  IPS_LOGIN_ACCOUNT: '17000000001',
  IPS_BASE_URL: 'http://192.168.100.90:11101/',
  API_BASE_URL: 'http://192.168.100.121:27600/api/',
  PASSPORT_URL: 'http://192.168.100.121:27800/'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
