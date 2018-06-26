const renderElement = (elementType, innerHTML, classes) => {
  const el = document.createElement(elementType);

  el.classList.add(...classes);
  el.innerHTML = innerHTML;

  return el;
}

const renderPersona = (personaData) => {
  const el = renderElement(
    'div',
    '',
    [
      'step__persona',
      'persona',
      'persona--tiny'
    ]
  );

  if (personaData.avatar) {
    const personaAvatarEl = document.createElement('img');
    personaAvatarEl.src = personaData.avatar;
    personaAvatarEl.alt = `Image of ${personaData.fullName}`;
    personaAvatarEl.classList.add('persona__avatar');

    el.appendChild(personaAvatarEl);
  }

  const personaNameEl = renderElement(
    'span',
    personaData.fullName,
    ['persona__name']
  );

  el.appendChild(personaNameEl);

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
    this.containerEl.appendChild(renderPersona(this.stepData.persona));

    return this.containerEl;
  }

}

export default JourneyStep;
