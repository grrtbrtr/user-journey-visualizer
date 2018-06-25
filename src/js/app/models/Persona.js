class Persona {

  /**
   * Persona data model
   *
   * @public
   *
   * @param {String} id A unique identifier for the persona
   * @param {String} firstname The persona's first name
   * @param {String} lastname The persona's last name
   */
  constructor(id, firstname, lastname) {
    this.id = id;
    this.name = {
      firstname,
      lastname
    };
    this.jobInformation = {
      company: null,
      title: null
    };
  }

  /**
   * Get the persona's full name
   *
   * @public
   *
   * @returns {String} Returns a string in the format 'firstname lastname'
   */
  get fullName() {
    return `${this.name.firstname} ${this.name.lastname}`;
  }

}

export default Persona;
