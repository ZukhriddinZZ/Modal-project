const modalBtn = document.querySelector('.modal_btn');
const modalContainer = document.querySelector('.modal_container');
const removeBtn = document.querySelector('.x');

modalBtn.addEventListener('click', function(){
    modalContainer.classList.add('visibleM')
})

removeBtn.addEventListener('click', function(){
    modalContainer.classList.remove('visibleM');
})