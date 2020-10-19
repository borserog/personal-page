export class BrowserEchoAnimation {
    browserContainer = document.querySelector('.browser-animation__browser');

    
    createEchoElements(amount) {
        for (let i=1; i <= amount; i++) {
            this.addEchoElement(i);
        }
    }

    addEchoElement(position) {
        const newElement = `<div class="browser-animation__browser--echo-${position}"></div>`;

        this.browserContainer.insertAdjacentHTML('beforeend', newElement);

        const echoElement = document.querySelector(`.browser-animation__browser--echo-${position}`);

        const grayscaleModifier = 30;

        echoElement.style.width = '30rem';
        echoElement.style.height = '20rem';
        echoElement.style.position = 'absolute';
        echoElement.style.zIndex = `${-1 * position}`;
        echoElement.style.borderRadius = '16px';
        echoElement.style.top = `${21 * position}px`;
        echoElement.style.left = `${27 * position}px`;
        echoElement.style.backgroundColor = `rgb(${72 + (position * grayscaleModifier)}, ${72 + position * grayscaleModifier}, ${72 + position * grayscaleModifier})`;
        echoElement.style.animation = `browserEchoFade 2.5s infinite ease-in-out`;
        echoElement.style.animationDelay = `.${position * 10}s`;
    }
}
