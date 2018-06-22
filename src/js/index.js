import './../scss/styles.scss';

import App from './app/app';

const containerId = 'app';
const dataFileURI = document.getElementById(containerId).dataset.file;
let app; // eslint-disable-line no-unused-vars

if (dataFileURI) {
  app = new App(containerId, dataFileURI);
}
