
// accordion

const titles = document.querySelectorAll('.accordion-title');
const accordionContents = document.querySelectorAll('.accordion-content');

titles.forEach((title, index) => {
    title.addEventListener('click', function () {
        titles.forEach((accord) => {
            if (accord !== this && accord.parentElement.classList.contains('active')) {
                accord.parentElement.classList.remove('active')
            }
        });
        
        title.parentElement.classList.toggle('active');


        if (accordionContents[index].style.maxHeight) {
            accordionContents[index].style.maxHeight = null;   
            accordionContents[index].style.paddingBottom = null;
        } else {
            accordionContents[index].style.paddingBottom = '20px';
            accordionContents[index].style.maxHeight = accordionContents[index].scrollHeight + 'px';
        };

        

    })
})



// Tabs

const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        tabs.forEach((tab) => {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            };
        });
        tab.classList.add('active')

        contents.forEach((content) => {
            if (content.classList.contains('active')) {
                content.classList.remove('active');
            };
        });
        contents[index].classList.add('active');

    });
});

