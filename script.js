let headEl =document.getElementById("heading")

let msgEl =document.getElementById("msg")

let btnEl =document.getElementById("start")

let imageEl =document.getElementById("dice")

const audio = new Audio("/aud/roll.wav");

let images = ["/img/1.png", "/img/2.png","/img/3.png","/img/4.png","/img/5.png","/img/6.png"]


function rolldice(){
    let num = Math.floor(Math.random()*6)
    audio.play()
    imageEl.src=images[num]
    headEl.textContent="Do you want to roll the dice, again?"
    btnEl.textContent= "Roll the dice again"
    num++
    if(num===6) msgEl.textContent= "Hurray! " + "You got a " + num
    else msgEl.textContent = "You got a " + num
}