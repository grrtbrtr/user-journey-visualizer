const rgbComponentToHex = (component) => {
  let hex = Math.
    round(component).
    toString(16); // eslint-disable-line no-magic-numbers

  if (hex.length === 1) { // eslint-disable-line no-magic-numbers
    hex = `0${hex}`;
  }

  return hex;
}

const generateColor = () => {
  const MAX_CHANNEL_VALUE = 255;

  let red = Math.floor(Math.random() * (MAX_CHANNEL_VALUE + 1));
  let green = Math.floor(Math.random() * (MAX_CHANNEL_VALUE + 1));
  let blue = Math.floor(Math.random() * (MAX_CHANNEL_VALUE + 1));

  // Turn colors into pastel
  red = (red + MAX_CHANNEL_VALUE) / 2;
  green = (green + MAX_CHANNEL_VALUE) / 2;
  blue = (blue + MAX_CHANNEL_VALUE) / 2;

  return `#${rgbComponentToHex(red)}${rgbComponentToHex(green)}${rgbComponentToHex(blue)}`; // eslint-disable-line max-len
}

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

    let color = generateColor();

    while (Persona.usedColors.indexOf(color) > -1) {
      color = generateColor();
    }
    this.color = color;
    Persona.usedColors.push(color);
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

Persona.usedColors = [];

export default Persona;
