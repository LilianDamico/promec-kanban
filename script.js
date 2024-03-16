function log(message) {
    console.log('>' + message);
}

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone'); // Correção no seletor CSS

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    log('CARD: Start dragging ');
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    
    this.classList.add('is-dragging');
}

function drag() {
    log('CARD: is dragging');
}

function dragend() {
    log('CARD: stop drag');
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

    this.classList.remove('is-dragging');
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter() {
    log('DROPZONE: Enter in zone');
}

function dragover(event) {
    event.preventDefault(); // Prevenir comportamento padrão para permitir soltar
    this.classList.add('over');

    // Pegar o cartão sendo arrastado
    const cardBeingDragged = document.querySelector('.is-dragging');

    // 'this' se refere à dropzone
    this.appendChild(cardBeingDragged);
}

function dragleave() {
    this.classList.remove('over');
}

function drop() {
    log('DROPZONE: dropped');
    // Lógica adicional para manipular a soltura do cartão
}

