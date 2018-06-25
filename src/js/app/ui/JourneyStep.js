const renderElement = (elementType, innerHTML, classes) => {
  const el = document.createElement(elementType);

  el.classList.add(...classes);
  el.innerHTML = innerHTML;

  return el;
}

class JourneyStep {

  constructor(stepData, elementType = 'div') {
    this.stepData = stepData;
    this.elementType = elementType;
    this.containerEl = null;

    return this.render();
  }

  render() {
    this.containerEl = document.createElement(this.elementType);

    this.containerEl.classList.add('step');
    this.containerEl.appendChild(renderElement(
      'p',
      this.stepData.description,
      ['step__description']
    ));
    this.containerEl.appendChild(renderElement(
      'p',
      this.stepData.persona.fullName,
      ['step__persona']
    ));

    return this.containerEl;
  }

}

export default JourneyStep;
