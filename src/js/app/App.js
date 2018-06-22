import JSONLoader from './utils/JSONLoader';

import UI from './ui/UI';

class App {

  /**
   * Constructor
   *
   * @public
   * @param {String} containerId The ID of the HTML app container element.
   * @param {String} dataFilePath The path to the data file.
   *
   * @returns {App} An instance of App.
   */
  constructor(containerId, dataFilePath) {
    this.container = document.getElementById(containerId);
    this.dataFilePath = dataFilePath;

    if (this.container) {
      this.init();
    } else {
      throw new Error(`HTML element with id "${containerId}" not found.`);
    }
  }

  /**
   * Initialize the application
   *
   * @private
   *
   * @returns {void}
   */
  init() {
    this.ui = new UI(this.container);

    JSONLoader.load(this.dataFilePath).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}

export default App;
