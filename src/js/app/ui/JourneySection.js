import JourneyStep from './JourneyStep';

const renderElement = (elementType, innerHTML, classes) => {
  const el = document.createElement(elementType);

  el.classList.add(...classes);
  el.innerHTML = innerHTML;

  return el;
}

const renderSteps = (containerElementType, stepElementType, stepsData) => {
  const stepContainerEl = document.createElement(containerElementType);

  stepContainerEl.classList.add('journey__steps', 'flow');

  stepsData.forEach((stepData) => {
    const stepEl = new JourneyStep(stepData, stepElementType);

    stepEl.classList.add('flow__step');

    stepContainerEl.appendChild(stepEl);
  });

  return stepContainerEl;
}

class JourneySection {

  constructor(journeyData) {
    this.journeyData = journeyData;
    this.journeyEl = null;

    return this.render();
  }

  render() {
    // Container

    this.journeyEl = document.createElement('section');
    this.journeyEl.classList.add('section', 'section--journey', 'journey');

    // Title

    this.journeyEl.appendChild(renderElement(
      'h2',
      this.journeyData.title,
      ['journey__title']
    ));

    // Subtitle

    if (this.journeyData.subtitle) {
      this.journeyEl.appendChild(renderElement(
        'p',
        this.journeyData.subtitle,
        ['journey__subtitle']
      ));
    }

    // Steps

    if (this.journeyData.steps.length) {
      this.journeyEl.appendChild(renderSteps(
        'ol',
        'li',
        this.journeyData.steps
      ));
    }

    return this.journeyEl;
  }

}

export default JourneySection;
