# Goty

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.
 And use Firebase for the Api Rest.

## Project

Visit de project at https://firestore-grafica-2f879.firebaseapp.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
## Error to build the project

https://github.com/facebook/create-react-app/issues/8680#issuecomment-601896916

Sigue los siguientes pasos

1.- Borra node_modules and package-lock.json

2.- Añade "resolutions": { "@babel/preset-env": "^7.8.7" } en el package.json

3.- Ejecuta npm install npm-force-resolutions --save-dev

4.- Ejecuta npm install

5.- Ejecuta npx npm-force-resolutions

6.- npm install de nuevo

7.- Ejecuta npm run build
