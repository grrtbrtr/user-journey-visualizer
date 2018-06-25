class UserJourneyModel {

  /**
   * Create a UserJourneyModel object
   *
   * @public
   *
   * @param {ProjectTitleModel} projectTitle The project title data
   */
  constructor(projectTitle = null) {
    this.projectTitle = projectTitle;
  }

}

export default UserJourneyModel;
