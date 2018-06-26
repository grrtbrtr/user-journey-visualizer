const renderAvatar = (imagePath, fullName) => {
  const personaAvatarEl = document.createElement('img');
  personaAvatarEl.src = imagePath;
  personaAvatarEl.alt = `Image of ${fullName}`;
  personaAvatarEl.classList.add('persona__avatar');

  return personaAvatarEl;
}

const renderPersona = (personaData) => {
  const personaEl = document.createElement('li');
  personaEl.classList.add('personas_list__persona', 'persona');

  if (personaData.avatar) {
    personaEl.appendChild(renderAvatar(
      personaData.avatar,
      personaData.fullName
    ));
  }

  const personaInformationEl = document.createElement('div');
  personaInformationEl.classList.add('persona__information');
  /* eslint-disable max-len */
  personaInformationEl.innerHTML = `<p class="persona__name">${personaData.fullName}</p>
    <p class="persona__job_info">
      ${personaData.jobInformation.jobTitle} at ${personaData.jobInformation.company}
    </p>`;
  /* eslint-enable max-len */
  personaEl.appendChild(personaInformationEl);

  return personaEl;
}

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
      personasContainerEl.appendChild(renderPersona(persona));
    });

    this.sectionEl.appendChild(personasContainerEl);

    return this.sectionEl;
  }

}

export default PersonasSection;
