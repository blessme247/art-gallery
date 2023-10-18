let innerCursor = document.querySelector(".inner-cursor")
let outerCursor = document.querySelector(".outer-cursor")


const moveCursor = (e)=>{
    // get x-axis and y-axis of the mouse position on the screen
    let x = e.clientX
    let y = e.clientY

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
}

document.addEventListener("mousemove", moveCursor)