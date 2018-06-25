import JourneySection from './JourneySection';
// Aimport JourneyStep from './JourneyStep';
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

    this.containerEl.appendChild(new ProjectTitleSection(data.projectTitle));
    this.containerEl.appendChild(new PersonasSection(data.personas));
    data.journeys.forEach((journey) => {
      this.containerEl.appendChild(new JourneySection(journey));
    });
  }

}

export default UI;
