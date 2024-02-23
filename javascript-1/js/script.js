window.onload = () => {

    var original_text = "Hello, Class!"

    const title = document.getElementById('heading')
    title.innerText = original_text;

    const cowboy_button = document.getElementById('btn-cowboy');
    cowboy_button.addEventListener('click', (e) => {
        e.preventDefault();
        title.innerText = "Hello, Cowboy."
    })

    const blue_button = document.getElementById('btn-blue');
    blue_button.addEventListener('click', (e) => {
        e.preventDefault();
        title.classList.remove(...title.classList)
        title.classList.add('blue-text');
    })

    const red_button = document.getElementById('btn-red');
    red_button.addEventListener('click', (e) => {
        e.preventDefault();
        title.classList.remove(...title.classList)
        title.classList.add('red-text')
    })

    const sans_button = document.getElementById('btn-sans');
    sans_button.addEventListener('click', (event) => {
        title.classList.add('hidden');
    })

    const cat_button = document.getElementById('add-new-element');
    cat_button.addEventListener('mouseover', (event) => {
        const cat_img = document.createElement('img');
        
        cat_img.src = "https://media.4-paws.org/b/8/8/0/b8805ed707116deaaefe35c6745da0f45615334d/VIER%20PFOTEN_2019-12-13_209-2890x2000-1920x1329.webp"
        cat_img.width = 250

        document.getElementById('cat-div').appendChild(cat_img);
    })

    const reset_button = document.getElementById('btn-reset');
    reset_button.addEventListener('click', (e) => {
        e.preventDefault();
        title.classList.remove(...title.classList)
        title.innerText = original_text
    })
};