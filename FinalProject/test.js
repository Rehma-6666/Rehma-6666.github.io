const cursor = document.querySelection('#cursor')
window.addEventListerner('mousemove'), (e) => {
    cursor.style.left=(e.x - 150) +'px'
    cursor.style.top=(e.y-150) + 'px'
    
}