import { createDiv, createPara, createList } from "./domCreators";

const taskModal = (() => {
    const createModal = () => {
        const section = document.createElement('section');
        section.classList.add('modal');
        section.classList.add('hidden');

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('modal-close-btn');
        closeBtn.innerText = 'x';
        section.appendChild(closeBtn);

        const form = document.createElement('form');

        const div = createDiv('overlay', undefined);
        div.classList.add('hidden');
    };

    return {
        createModal
    }
})();

export { taskModal };