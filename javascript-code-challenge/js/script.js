document.addEventListener('DOMContentLoaded', () => { // See https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

    const hideButton = document.getElementById('btn-hide');
    const newPetButton = document.getElementById('btn-new-pet');
    const changeSubtitleButton = document.getElementById('btn-change-subtitle');

    hideButton.addEventListener('click', (event) => {
        document.getElementById('main-section').style.backgroundImage = 'none';
    })

    newPetButton.addEventListener('click', (event) => {
        const newImg = document.createElement('img');
        newImg.src = './images/dogs.jpg'
        newImg.classList.add('w-50')
        document.getElementById('main-section').appendChild(newImg)
    })

    changeSubtitleButton.addEventListener('dblclick', (event) => {
        var newSubtitle = window.prompt("What should the new subtitle be?");
        document.getElementById('subtitle').innerText = newSubtitle;
    })

})