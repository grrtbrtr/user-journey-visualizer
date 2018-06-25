import PersonasSection from './PersonasSection';
import ProjectTitleSection from './ProjectTitleSection';

class UI {

  /**
   * Initialize the UI
   *
   * @public
   *
   * @param {HTMLElement} containerEl The container element to render the app in
   */
  constructor(containerEl) {
    this.containerEl = containerEl;
  }

  /**
   * Render the UI
   *
   * @public
   *
   * @param {UserJourneyModel} data The data to render
   *
   * @returns {void}
   */
  render(data) {
    this.data = data;

    this.projectTitleSection = new ProjectTitleSection(data.projectTitle);
    this.personasSection = new PersonasSection(data.personas);

    this.containerEl.appendChild(this.projectTitleSection);
    this.containerEl.appendChild(this.personasSection);
  }

}

export default UI;
