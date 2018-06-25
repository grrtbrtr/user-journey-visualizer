class PersonasSection {

  /**
   * Create a title section
   *
   * @public
   *
   * @param {Array} personas A list of Persona object used in all journeys
   *
   * @returns {HTMLElement} The personas section as an HTML element
   */
  constructor(personas) {
    this.sectionEl = document.createElement('section');
    this.sectionEl.classList.add(
      'section',
      'section--personas',
      'personas'
    );

    this.personas = personas;

    return this.render();
  }

  /**
   * Render the element
   *
   * @private
   *
   * @returns {HTMLElement} The Title section as an HTML element
   */
  render() {
    const titleEl = document.createElement('h2');

    titleEl.classList.add('personas__title');
    titleEl.innerHTML = 'Personas';
    this.sectionEl.appendChild(titleEl);

    const personasContainerEl = document.createElement('ul');

    personasContainerEl.classList.add('personas__list', 'personas_list');

    this.personas.forEach((persona) => {
      const personaEl = document.createElement('li');

      personaEl.classList.add('personas_list__persona', 'persona');
      /* eslint-disable max-len */
      personaEl.innerHTML = `<p class="persona__name">${persona.fullName}</p>
        <p class="persona__job_info">
          ${persona.jobInformation.jobTitle} at ${persona.jobInformation.company}
        </p>`;
      /* eslint-enable max-len */

      personasContainerEl.appendChild(personaEl);
    });

    this.sectionEl.appendChild(personasContainerEl);

    return this.sectionEl;
  }

}

export default PersonasSection;
