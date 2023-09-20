function createDiv(className, text) {
    const div = document.createElement('div');
    
    if (className !== undefined) {
        div.classList.add(className);
    }

    if (text !== undefined) {
        div.textContent = text;
    }

    return div;
};

function createPara(className, text) {
    const para = document.createElement('p');
    
    if (className !== undefined) {
        para.classList.add(className);
    }

    if (text !== undefined) {
        para.textContent = text;
    }

    return para;
};

function createList(className, text) {
    const li = document.createElement('li');

    if (className !== undefined) {
        li.classList.add(className);
    }

    if (text !== undefined) {
        li.textContent = text;
    }

    return li;
};

export { createDiv, createPara, createList }