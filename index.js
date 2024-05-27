const bodyEl = document.querySelector('body')
bodyEl.addEventListener('mousemove',(event)=>{
    const xPos = event.offsetX
    const ypost = event.offsetY
    const spanEl = document.createElement('span')
    spanEl.style.left = xPos + 'px';
    spanEl.style.top = ypost + 'px';
    const size = Math.random()*100
    spanEl.style.width = size + 'px'
    spanEl.style.height = size + 'px'
    bodyEl.appendChild(spanEl)
    setTimeout(()=>{
        spanEl.remove();
    },3000)
    console.log(spanEl)
})