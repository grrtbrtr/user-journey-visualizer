import JourneySection from './JourneySection';
// Aimport JourneyStep from './JourneyStep';
import PersonasSection from './PersonasSection';
import ProjectTitleSection from './ProjectTitleSection';

/**
 * Calculate the next vertical target scroll position depending on the direction
 *
 * @private
 *
 * @param {String} dir The direction, either 'previous' or 'next'
 * @param {Number} nrPreceedingScreens Nr of screens preceeding scroll pos
 * @param {Boolean} isScrollPosExact Scroll pos matches X viewport heights
 *
 * @returns {Number} The target vertical scroll position
 */
const getScrollTargetY = (dir, nrPreceedingScreens, isScrollPosExact) => {
  const viewportHeight = window.innerHeight;
  let targetY = 0;

  if (dir === 'previous') {
    targetY = Math.floor(nrPreceedingScreens) * viewportHeight;
    if (isScrollPosExact) {
      targetY = (nrPreceedingScreens - 1) * viewportHeight;
    }
  } else if (dir === 'next') {
    targetY = Math.ceil(nrPreceedingScreens) * viewportHeight;
    if (isScrollPosExact) {
      targetY = (nrPreceedingScreens + 1) * viewportHeight;
    }
  }

  return targetY;
}

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

  /**
   *
   * @public
   *
   * @param {String} dir The scroll direction
   *
   * @returns {void}
   */
  scrollTo(dir) {
    const {innerHeight: viewportHeight, scrollY} = window;
    const nrPreceedingScreens = scrollY / viewportHeight;
    const isScrollPosExact = nrPreceedingScreens % 1 === 0;
    const newY = getScrollTargetY(dir, nrPreceedingScreens, isScrollPosExact);

    window.scrollTo(window.scrollX, newY);
  }

}

export default UI;
