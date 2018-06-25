class JourneyStep {

  /**
   * Create a journey step data object.
   *
   * @public
   *
   * @param {String} description The step description
   * @param {Persona} persona The persona for this step
   */
  constructor(description, persona) {
    this.description = description;
    this.persona = persona;
  }

}

export default JourneyStep;
