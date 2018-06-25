class UserJourneyModel {

  /**
   * Create a UserJourneyModel object
   *
   * @public
   *
   * @param {ProjectTitleModel} projectTitle The project title data
   * @param {Array} personas An array of Persona objects
   * @param {Array} journeys An array of Journey objects
   *
   * @see {Persona}
   * @see {Journey}
   */
  constructor(projectTitle = null, personas = [], journeys = []) {
    this.projectTitle = projectTitle;
    this.personas = personas;
    this.journeys = journeys;
  }

}

export default UserJourneyModel;
