'use strict';
    
var boxTop = 200;
var boxLeft = 200;
var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch(keyName){
        case "ArrowDown":
            console.log(keyName + " pressed")
            downPressed = true
            boxTop += 10
            document.getElementById("box").style.top = boxTop + "px"
            break
        case "ArrowUp":
            console.log(keyName + " pressed")
            upPressed = true
            boxTop -= 10
            document.getElementById("box").style.top = boxTop + "px"
            break
            
        case "ArrowLeft": 
            console.log(keyName + " pressed")
            leftPressed = true
            boxLeft -= 10
            document.getElementById("box").style.left  = boxLeft + "px"
            break
        case "ArrowRight":
            console.log(keyName + " pressed")
            rightPressed = true
            boxLeft += 10
            document.getElementById("box").style.left  = boxLeft + "px"
            break
    }
});
// document.addEventListener('keyup', (event) => {
//     let top = document.getElementById("box").style.top
//     let left = document.getElementById("box").style.left 
//     const keyName = event.key;
//     switch(keyName){
//         case "ArrowDown":
//             console.log(keyName + " not pressed")
//             downPressed = false
//         case "ArrowUp":
//             console.log(keyName + " not pressed")
//             upPressed = false
//         case "ArrowLeft": 
//             console.log(keyName + " not pressed")
//             leftPressed = false
//         case "ArrowRight":
//             console.log(keyName + " not pressed")
//             rightPressed = false
//     }
// })