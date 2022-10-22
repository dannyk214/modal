let btn = document.querySelector('.btn');
let close = document.querySelector('.close');
let modal = document.querySelector('.modal-container');
let model = document.querySelector('.modal-container');
btn.addEventListener('click', function(){
    modal.style.display = 'block';
    btn.style.display = 'none';
});
close.addEventListener('click', function(){
    modal.style.display = 'none';
    btn.style.display = 'block';
});
model.addEventListener('click', function(){
    modal.style.display = 'none';
    btn.style.display = 'block';
});