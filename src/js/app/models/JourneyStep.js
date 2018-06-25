class JourneyStep {

  /**
   * Create a journey step data object.
   *
   * @public
   *
   * @param {Persona} persona The persona for this step
   * @param {String} description The step description
   */
  constructor(persona, description) {
    this.persona = persona;
    this.description = description;
  }

}

export default JourneyStep;
