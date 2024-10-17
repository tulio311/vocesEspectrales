var tarjeta = document.getElementsByClassName("tarjeta")[0];
var nAudios = 10;

let audioElement =document.getElementById("elAudio");
let videoElement = document.getElementById("miVideo");
let pausePlayButton = document.getElementsByClassName("pausePlayButton")[0];
let elSwitch = document.getElementById("switch");
let tipo = "Palabras";

let firstFlip = false;


tarjeta.addEventListener("click",() => {

    let audioIndex = changeAudio();

    console.log(audioIndex);

    if(firstFlip == false){

        if(window.innerWidth > 1000){
            document.getElementById("infoBox").style.display = "block";
        }

        videoElement.volume = 0.2;

        document.querySelector(".backTarjeta img").style.display = "block";
        cambiarInfo(audioIndex);

        firstFlip = true;
        tarjeta.classList.toggle("girar");
        audioElement.play();
        pausePlayButton.style.display = "block";

    }else{
        
        tarjeta.classList.toggle("girar");
        setTimeout(() => {
            cambiarInfo(audioIndex);
            console.log("After 0.4 second");
            tarjeta.classList.toggle("girar");
            document.querySelector(".backTarjeta img").style.display = "block";
            audioElement.play();
          }, 400);
        
        document.querySelector(".pausePlayButton i").classList.remove("mi-play");
        document.querySelector(".pausePlayButton i").classList.add("mi-pause");

    }
});

/*
tarjeta.addEventListener("mouseover",()=>{

    if(firstFlip){
        document.getElementById("infoBox").style.display = "block";
    }

});

tarjeta.addEventListener("mouseleave",()=>{

    if(firstFlip){
        document.getElementById("infoBox").style.display = "none";
    }

});
*/


/*
document.getElementsByClassName("backTarjeta")[0].addEventListener("mousemove",(event)=>{

    const trackingArea = document.getElementsByClassName("backTarjeta")[0];

    const x = event.clientX - trackingArea.getBoundingClientRect().left;
    const y = event.clientY - trackingArea.getBoundingClientRect().top;

    document.getElementById("infoBox").style.transform = `translate(-${x/5}px,-${y/6}px)`;

    console.log("x: "+ x + ", y: "+y);

});

*/

pausePlayButton.addEventListener("click",()=>{

    if(audioElement.paused){
        audioElement.play();
        document.querySelector(".backTarjeta img").style.display = "block";
    }else{
        audioElement.pause();
        document.querySelector(".backTarjeta img").style.display = "none";
    }

    document.querySelector(".pausePlayButton i").classList.toggle("mi-pause");
    document.querySelector(".pausePlayButton i").classList.toggle("mi-play");
});

const timeCambio = 400;

elSwitch.addEventListener("click",()=>{

    document.getElementById("infoBox").style.display = "none";

    videoElement.volume = 1;

    if (tipo =="Palabras"){
        tipo = "Sonidos";
        document.querySelector("#imgSonidos").style.display = "block";
        document.querySelector("#imgPalabras").style.display = "none";
        document.querySelector(".checkbox-wrapper-35 .switch + label").style.color = "#cd7737";  
        setTimeout(() => {
            document.querySelector(".backTarjeta").style.backgroundColor = "#8a3249";
            
          }, timeCambio);
        
    }else{
        tipo = "Palabras";
        document.querySelector("#imgSonidos").style.display = "none";
        document.querySelector("#imgPalabras").style.display = "block";
        document.querySelector(".checkbox-wrapper-35 .switch + label").style.color = "#50bdcd";  
        setTimeout(() => {
            document.querySelector(".backTarjeta").style.backgroundColor = "#005d6b";
          }, timeCambio);
        
    }

    if(firstFlip){
        firstFlip = false;
        tarjeta.classList.toggle("girar");
    }

    document.querySelector(".pausePlayButton").style.display = "none";
    document.querySelector(".pausePlayButton i").classList.remove("mi-play");
    document.querySelector(".pausePlayButton i").classList.add("mi-pause");
    
    audioElement.pause();
    changeAudio();




});


document.getElementsByClassName("entrar")[0].addEventListener("click",()=>{
    document.getElementsByClassName("overlay")[0].style.display = "none";
});




function changeAudio(){
    let audios = [];

    if(tipo == "Sonidos"){
        audios = audiosSonidosTarjeta;
    }else{
        audios = audiosPalabrasTarjeta;
    }

    let randomIndex = Math.floor(Math.random() * nAudios);
    lastAudio = audioElement.src.replace("../Audios/","");

    while(lastAudio == audios[randomIndex][0]){
        randomIndex = Math.floor(Math.random() * nAudios);
    }

    audioElement.src = "../Audios/" + audios[randomIndex][0];

    return randomIndex;

}

function cambiarInfo(audioIndex){

    let audios = [];

    if(tipo == "Sonidos"){
        audios = audiosSonidosTarjeta;
    }else{
        audios = audiosPalabrasTarjeta;
    }

    document.getElementById("detonador").innerHTML = audios[audioIndex][3];
    document.getElementById("nombre").innerHTML = audios[audioIndex][2];
    document.getElementById("lugar").innerHTML = audios[audioIndex][5];
    document.getElementById("coleccion").innerHTML = audios[audioIndex][1];
    document.getElementById("infoPlace").innerHTML = audios[audioIndex][4];


}





















