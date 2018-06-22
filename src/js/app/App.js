class App {

  /**
   * Constructor
   *
   * @public
   * @param {String} containerId The ID of the HTML app container element.
   * @returns {App} An instance of App.
   */
  constructor(containerId) {
    this.container = document.getElementById(containerId);

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
   * @returns {void}
   */
  init() {
    console.log('init');
  }

}

export default App;
