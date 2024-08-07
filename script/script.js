
// accordion

const titles = document.querySelectorAll('.accordion-title');

titles.forEach((title) => {
    title.addEventListener('click', function () {
        titles.forEach((accord) => {
            if (accord !== this && accord.parentElement.classList.contains('active')) {
                accord.parentElement.classList.remove('active')
            }
        });
        
        title.parentElement.classList.toggle('active');
    })
})
// accordion end ---------------




