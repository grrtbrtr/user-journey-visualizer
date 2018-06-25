class UserJourneyModel {

  /**
   * Create a UserJourneyModel object
   *
   * @public
   *
   * @param {ProjectTitleModel} projectTitle The project title data
   * @param {Array} personas An array of Persona objects
   *
   * @see {Persona}
   */
  constructor(projectTitle = null, personas = []) {
    this.projectTitle = projectTitle;
    this.personas = personas;
  }

}

export default UserJourneyModel;
