// ELEMENTS - MENU MOBILE
const menuMobile = document.getElementById('menu__mobile');
const menu = document.getElementById('nav__menu');
const closeMenu = document.getElementById('close__menu');

menuMobile.addEventListener('click', () => {
    menu.classList.remove('max-md:hidden');
    closeMenu.classList.remove('hidden');
})

closeMenu.addEventListener('click', () => {
    menu.classList.add('max-md:hidden');
    closeMenu.classList.add('hidden');
})


// ELEMENTS - FEATURES
const itemsList = document.querySelectorAll('.list');
const imgFeatures = document.getElementById('img__features');
const titleFeatures = document.getElementById('title__features');
const descFeatures = document.getElementById('desc__features');

// FEATURES

let itemsFeatures = [
    {
    title: 'Bookmark in one click',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
    title: 'Intelligent search',
    desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
    title: 'Share your bookmarks',
    desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
]

// Selecionar os containers pai para aplicar a transição
const imageContainer = imgFeatures.parentNode;
const textContainer = titleFeatures.parentNode;

itemsList.forEach(item => {
    item.addEventListener('click', (e) => {
        imageContainer.classList.add('opacity-0');
        textContainer.classList.add('opacity-0');
        setTimeout(() => {
            if (item.innerHTML === 'Simple Bookmarking') {
                imgFeatures.src = './images/illustration-features-tab-1.svg';
                titleFeatures.textContent = itemsFeatures[0].title;
                descFeatures.textContent = itemsFeatures[0].desc;
            } else if (item.innerHTML === 'Speedy Searching') {
                imgFeatures.src = './images/illustration-features-tab-2.svg';
                titleFeatures.textContent = itemsFeatures[1].title;
                descFeatures.textContent = itemsFeatures[1].desc;
            } else {
                imgFeatures.src = './images/illustration-features-tab-3.svg';
                titleFeatures.textContent = itemsFeatures[2].title;
                descFeatures.textContent = itemsFeatures[2].desc;
            }

            // Remover classe para iniciar o fade in
            imageContainer.classList.remove('opacity-0');
            textContainer.classList.remove('opacity-0');
        }, 300); // Use o mesmo valor da duração da transição em ms
    });
})


// VALIDATE EMAIL
const form = document.querySelector('form');
const emailInput = form.querySelector('input[type="email"]');
const errorMsg = document.getElementById('error__msg');
const errorIcon = document.getElementById('icon__error');
const errorInputDiv = document.getElementById('error__input');
const contactBtn = form.querySelector('button[type="submit"]');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email)) {
        errorMsg.classList.add('hidden');
        errorIcon.classList.add('hidden');
        errorInputDiv.classList.remove('bg-soft-red')
    } else {
        errorMsg.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
        errorInputDiv.classList.add('bg-soft-red')
    }
});

