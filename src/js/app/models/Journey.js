class Journey {

  /**
   * Create a journey data object.
   *
   * @public
   *
   * @param {String} title The journey title
   * @param {String} subtitle The journey subtitle
   * @param {Array} steps An array of JourneyStep objects
   */
  constructor(title, subtitle = null, steps = []) {
    this.title = title;
    this.subtitle = subtitle;
    this.steps = steps;
  }

}

export default Journey;
