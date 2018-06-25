class ProjectTitleSection {

  /**
   * Create a title section
   *
   * @public
   *
   * @param {ProjectTitleModel} projectTitleData The project title data
   *
   * @returns {HTMLElement} The Title section as an HTML element
   */
  constructor(projectTitleData) {
    this.sectionEl = document.createElement('section');

    this.projectTitleData = projectTitleData;

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
    const titleEl = document.createElement('h1');

    titleEl.innerHTML = this.projectTitleData.title;
    this.sectionEl.appendChild(titleEl);

    if (this.projectTitleData.subtitle) {
      const subtitleEl = document.createElement('p');

      subtitleEl.innerHTML = this.projectTitleData.subtitle;

      this.sectionEl.appendChild(subtitleEl);
    }

    return this.sectionEl;
  }

}

export default ProjectTitleSection;
