import JSONLoader from './utils/JSONLoader';
import Journey from './models/Journey';
import JourneyStep from './models/JourneyStep';
import Persona from './models/Persona';
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

  // Project information

  const projectTitleModel = new ProjectTitleModel(
    data.projectInformation.title,
    data.projectInformation.subtitle
  );

  userJourneyData.projectTitle = projectTitleModel;

  // Personas

  const personas = [];

  data.personas.forEach((persona) => {
    const personaData = new Persona(
      persona.id,
      persona.name.firstname,
      persona.name.lastname
    );

    personaData.jobInformation.company = persona.company;
    personaData.jobInformation.jobTitle = persona.jobTitle;

    if (persona.avatar && persona.avatar !== '') {
      personaData.avatar = persona.avatar;
    }

    personas.push(personaData);
  });

  userJourneyData.personas = personas;

  // Journeys

  const journeys = [];

  data.journeys.forEach((journey) => {
    const journeyData = new Journey(journey.title, journey.subtitle);

    journey.steps.forEach((step) => {
      const stepPersona =
        personas.find((persona) => persona.id === step.persona);

      if (!stepPersona) {
        throw new Error('Incorrect persona defined');
      }

      const stepData = new JourneyStep(step.description, stepPersona);

      journeyData.steps.push(stepData);
    });

    journeys.push(journeyData);
  });

  userJourneyData.journeys = journeys;

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

      document.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 37 || evt.keyCode === 38) {
          evt.preventDefault();
          this.ui.scrollTo('previous');
        } else if (evt.keyCode === 39 || evt.keyCode === 40) {
          evt.preventDefault();
          this.ui.scrollTo('next');
        }
      });
    }, (error) => {
      console.log(error); // eslint-disable-line no-console
    });
  }

}

export default App;
