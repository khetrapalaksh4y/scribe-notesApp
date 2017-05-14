// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDeXi1k3DHXnET-oLifijVoJcJqhCheEq4",
    authDomain: "scribe-notesapp.firebaseapp.com",
    databaseURL: "https://scribe-notesapp.firebaseio.com",
    projectId: "scribe-notesapp",
    storageBucket: "scribe-notesapp.appspot.com",
    messagingSenderId: "725685664572"
  }
};
