// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBs5YMEqO7vtEHtyTq_x5QuzK961scUKQY",
    authDomain: "yoga-se-hoga.firebaseapp.com",
    databaseURL: "https://yoga-se-hoga.firebaseio.com",
    projectId: "yoga-se-hoga",
    storageBucket: "yoga-se-hoga.appspot.com",
    messagingSenderId: "343241122059"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
