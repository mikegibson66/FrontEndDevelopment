/*
  highlight a square with a brighter red color
 */
function highlight(event){
    event.target.classList.toggle('highlight');
}

document.querySelectorAll('.unselected').forEach(item => {
    item.addEventListener('mouseover',highlight);
    item.addEventListener('mouseout',highlight);
    item.addEventListener('click',setSquare);
})

/*
  set to X or O
 */
function setSquare(event){
    event.target.classList.remove('unselected');
    event.target.classList.add('X-square');
}