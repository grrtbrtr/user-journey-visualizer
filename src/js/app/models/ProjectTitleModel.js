class TitleModel {

  /**
   * Create a TitleModel object
   *
   * @public
   *
   * @param {String} title The title string
   * @param {String} subtitle The subtitle string
   */
  constructor(title, subtitle = null) {
    if (!title) {
      throw new Error('TitleModel cannot be initiated without a title');
    }
    this.title = title;

    if (subtitle !== '') {
      this.subtitle = subtitle;
    }
  }

}

export default TitleModel;
