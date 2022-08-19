function tabsHandler() {
    const tabs = document.querySelectorAll('.tabs ul li');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (!tab.classList.contains('active')) {
                const currentActiveTab = document.querySelector('.tabs ul li.active');
                currentActiveTab.classList.remove('active');

                tab.classList.add('active');
            }
        })
    })
}

tabsHandler();

function ratingHandler() {
    const stars = document.querySelectorAll('.star-rating ul li');
    console.log(stars);

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {

            stars.forEach(star => {
                star.classList.remove('active');
            });

            for(let i = 0; i<=index; i++) {
                let item = stars[i];
                item.classList.add('active');
            }
        })
    })
}
ratingHandler()