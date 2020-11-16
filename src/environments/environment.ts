// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pNameurl: 'https://localhost:44320/api/Player/name',
  pIdurl: 'https://localhost:44320/api/Player/id',

  loginUrl: 'https://localhost:44332/api/Auth/login',
  registerUrl: 'https://localhost:44332/api/Auth/register',

  favurl: 'https://localhost:44306/api/Favourite',

  recurl: 'https://localhost:44309/api/Recommendation'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
