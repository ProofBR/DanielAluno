const number = document.querySelector("#number");

function color(){
alert("Boom")

if(number.value>5) {
alert("O número digitado é maior que 5")
} else {
    alert("O número digitado é menor ou igual a 5")

}}

let colorBody = document.querySelector("body");
    
function changeColor() {
        if (colorBody.className == "body_white"){
        colorBody.classList.remove("body_white");
        colorBody.classList.add("body_yellow");
    } else {
        colorBody.classList.remove("body_yellow");
        colorBody.classList.add("body_white");
    }
}

const numberAposta = document.querySelector("#sorte"); 

function Aposta(){
const random = Math.floor(Math.random*100)+1)
    if (randomAposta == random){
        alert("Parabéns, você ganhou!")
    }else{
        alert("Mais sorte na próxima! kkkk")
    }
    }