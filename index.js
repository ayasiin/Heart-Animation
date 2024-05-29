// Counter Program
const decreaseBtn = document.getElementById('decreaseBtn')
const increaseBtn = document.getElementById('increaseBtn')
const countLabel = document.getElementById('countLabel')
const btnContainer = document.getElementById('btnContainer')


let count = 0;
increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent= count
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = 0;
}
btnContainer.onclick = function (){
btnContainer.style.backgroundColor = 'gray';
resetBtn.style.color ='red'
decreaseBtn.style.color = 'black'
increaseBtn.style.color = 'green'
}
