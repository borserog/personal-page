import * as eb from './echo-browser.js';
import * as cp from './copy-to-clipboard.js';

const browserAnimation = new eb.BrowserEchoAnimation();
browserAnimation.createEchoElements(4);

const clipboard = new cp.CopyEmailToClipboard();
clipboard.copyMailElement.addEventListener('click', () => {
    clipboard.copyToClipboard();
    clipboard.emailLabel.innerHTML = 'copied!';
    clipboard.emailLabel.style.color = '#A00026';
    clipboard.paperIcon.classList.toggle('fly');
    clipboard.copyMailElement.style.pointerEvents = 'none';

    setTimeout(() => {
        clipboard.emailLabel.innerHTML = 'e-mail';
        clipboard.emailLabel.style.color = 'inherit';
        clipboard.paperIcon.classList.toggle('fly');
        clipboard.copyMailElement.style.pointerEvents = 'inherit';        
    }, 1000);
    
})