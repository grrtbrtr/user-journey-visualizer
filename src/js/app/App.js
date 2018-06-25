import JSONLoader from './utils/JSONLoader';
import ProjectTitleModel from './models/ProjectTitleModel';
import UI from './ui/UI';
import UserJourneyModel from './models/UserJourneyModel';

/**
 * Parse the data
 *
 * @private
 *
 * @param {Object} data The data to parse
 *
 * @returns {UserJourneyModel} The data as an instance of UserJourneyModel
 */
const parseData = (data) => {
  const userJourneyData = new UserJourneyModel();

  const projectTitleModel = new ProjectTitleModel(
    data.projectInformation.title,
    data.projectInformation.subtitle
  );

  userJourneyData.projectTitle = projectTitleModel;

  return userJourneyData;
}

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
      const data = parseData(response);

      this.ui.render(data);
    }, (error) => {
      console.log(error); // eslint-disable-line no-console
    });
  }

}

export default App;
