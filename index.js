
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

step1.addEventListener('click', () => {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
});


const nextStepButton = document.getElementById('nextStepButton');
nextStepButton.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
});


const surpriseButton = document.getElementById('surpriseButton');
surpriseButton.addEventListener('click', () => {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.remove('hidden');
    createHearts();
});


function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('span');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
    }
}
