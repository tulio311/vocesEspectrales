let datos = {};

let positivos = createArray(755);

let number = 1;

let startPlaying = false;

let tagsSelected = [];

//let url = "http://localhost:8000";
let url = "https://voces-espectrales.net";

// Generar lista
const container = document.getElementById("container");

const vars = ['AudioName','Col1','Descripcion','Col2','Fecha','Hora','Lugar','Col3','AudioData','Duracion','Col4','Nombre','Col5'];

let shouldStop = false;

let lastInput= 0;

for (let i = 1; i <= 50; i++) {

    const row = document.createElement("tr");
    row.className = "item";
    row.id = `it${i}`;

    const imgDiv = document.createElement("td");
    imgDiv.id = `img${i}`;
    imgDiv.className = `imgCont`;
    imgDiv.style.padding = "0";

    const imgSound = document.createElement("img");
    imgSound.id = `imgSound${i}`;
    imgSound.className = `imgSound`;

    imgDiv.appendChild(imgSound);

    const playDiv = document.createElement("td");
    playDiv.id = `play${i}`;
    playDiv.className = `playCont`;

    const play = document.createElement("img");
    //<object id="svg-object" type="image/svg+xml" data="image.svg" width="100" height="100"></object>
    play.id = `playButton${i}`;
    //play.type = image/svg+xml;
    //play.data = "../imagenes/play-solid.svg";
    play.className = `playButton`;
    play.src = "../imagenes/play-blanco.svg";
    play.style.width = "30px";
    play.style.height = "30px";

    playDiv.appendChild(play);

    /*

    const bolaPlay = document.createElement("div");
    bolaPlay.id = `bolaPlay${i}`;
    bolaPlay.className = `bolaPlay`;
    bolaPlay.style.display = "none";
    bolaPlay.style.backgroundColor = "red";
    bolaPlay.style.borderRadius = '50%';
    bolaPlay.style.width = "70%";
    bolaPlay.style.height = "70%";
    bolaPlay.style.alignItems = "center";
    bolaPlay.style.justifyContent = "center";
    bolaPlay.style.caretColor = "transparent";
    bolaPlay.style.cursor = "default"; 

    const trianglePlay = document.createElement("div");
    trianglePlay.class = `trianglePlay`;
    trianglePlay.style.clipPath = "polygon(0% 0%, 50% 50%, 0% 100%)";
    trianglePlay.style.width = "50%";
    trianglePlay.style.height = "50%";
    trianglePlay.style.backgroundColor = "white";

    bolaPlay.appendChild(trianglePlay);
    playDiv.appendChild(bolaPlay);

    */

    const nameDiv = document.createElement("td");
    nameDiv.id = `name${i}`;
    nameDiv.className = `nameCont`;

    const colDiv = document.createElement("td");
    colDiv.id = `col${i}`;
    colDiv.className = `colCont`;

    const detDiv = document.createElement("td");
    detDiv.id = `det${i}`;
    detDiv.className = `detCont`;

    const placeDiv = document.createElement("td");
    placeDiv.id = `place${i}`;
    placeDiv.className = `placeCont`;

    const locationIcon = document.createElement("img");
    locationIcon.id = `locationIcon${i}`;
    locationIcon.className = `locationIcon`;
    locationIcon.style.width = "40%";
    locationIcon.style.height = "40%";
    locationIcon.style.display = "inline-block";
    locationIcon.src = "../imagenes/location-dot-solid.svg";

    const locationIconW = document.createElement("img");
    locationIconW.id = `locationIconW${i}`;
    locationIconW.className = `locationIconW`;
    locationIconW.style.width = "40%";
    locationIconW.style.height = "40%";
    locationIconW.style.display = "none";
    locationIconW.src = "../imagenes/location-white.svg";

    const locationText = document.createElement("p");
    locationText.id = `locationText${i}`;
    locationText.className = `locationText`;
    locationText.style.display = "inline-block";

    placeDiv.appendChild(locationIcon);
    placeDiv.appendChild(locationIconW);
    placeDiv.appendChild(locationText);

    const audioFile = document.createElement("td");
    audioFile.id = `audioFile${i}`;
    audioFile.className = `audioFile`;

    // Append all inner divs to the main item div
    row.appendChild(imgDiv);
    row.appendChild(playDiv);
    row.appendChild(nameDiv);
    row.appendChild(colDiv);
    row.appendChild(detDiv);
    row.appendChild(placeDiv);
    row.appendChild(audioFile);

    // Append the item div to the container
    container.appendChild(row);
}
//----


$(".item").on("mouseenter", function(){
    const id = $(this).attr("id").slice(2);
    document.getElementById("locationIcon" + id).style.display = "none";
    document.getElementById("locationIconW" + id).style.display = "inline-block";
});

$(".item").on("mouseleave", function(){
    const id = $(this).attr("id").slice(2);
    document.getElementById("locationIcon" + id).style.display = "inline-block";
    document.getElementById("locationIconW" + id).style.display = "none";
});

$(".item").on("dblclick", function(){
    const id = $(this).attr("id").slice(2);
    const audioName = document.getElementById("audioFile" + id).innerHTML;
    const name = document.getElementById("name" + id).innerHTML;
    const det = document.getElementById("det" + id).innerHTML;
    console.log(audioName);
    const audioElement = document.getElementById("song");
    audioElement.src = "../Audios/" + audioName + ".wav";
    audioElement.play();

    document.getElementById("controls").style.display = "flex";

    document.getElementById("nameInPlayer").innerHTML = name;
    document.getElementById("detInPlayer").innerHTML = det;

    document.getElementById("changerPause").style.display = "block";
    document.getElementById("changerPlay").style.display = "none";
});


$(".playButton").on("click", function(){

    startPlaying = true;

    const id = $(this).attr("id").slice(10);
    const audioName = document.getElementById("audioFile" + id).innerHTML;
    const name = document.getElementById("name" + id).innerHTML;
    const det = document.getElementById("det" + id).innerHTML;
    console.log(audioName);
    const audioElement = document.getElementById("song");
    audioElement.src = "../Audios/" + audioName + ".wav";
    audioElement.play();

    document.getElementById("controls").style.display = "flex";

    document.getElementById("nameInPlayer").innerHTML = name;
    document.getElementById("detInPlayer").innerHTML = det;

    document.getElementById("changerPause").style.display = "block";
    document.getElementById("changerPlay").style.display = "none";

});




function createArray(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}




// This function makes the fetch request and returns the response data
async function getData() {

    try {
        const response = await fetch(url + '/Archivo/datos.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseData = await response.json();  // Parse the JSON response
        return responseData;  // Return the response data
    } catch (error) {
        console.error('Error:', error);
        return null;  // Return null on error
    }
}

// Example of calling the getData() function and then accessing the responseData
async function main() {
    datos = await getData();
    fillPageN(1);
}

main(); 



function fillPageN(N){

    const maxN = positivos.length - 1;
    const records = 50;

    for(let i=1;i<51;i++){

        const index = (N-1)*records + i-1;
        if (index <= maxN){
            const key = positivos[index] - 1;

            document.getElementById(`it${i}`).style.display = "flex";

            document.getElementById(`name${i}`).innerHTML = datos[key]['Persona'];
            //document.getElementById(`col${i}`).innerHTML = datos[positivos[(N-1)*13 + i-1] - 1]['AudioName'];
            document.getElementById(`det${i}`).innerHTML = datos[key]['Detonante'];
            document.getElementById(`locationText${i}`).innerHTML = datos[key]['pais'];
            document.getElementById(`audioFile${i}`).innerHTML = datos[key]['AudioName'];

            document.getElementById(`imgSound${i}`).src = "../audioImages/" + datos[key]['AudioName'] + ".png";

        }else{

            document.getElementById(`it${i}`).style.display = "none";

            //document.getElementById(`name${i}`).innerHTML = "";
            //document.getElementById(`col${i}`).innerHTML = datos[positivos[(N-1)*13 + i-1] - 1]['AudioName'];
            //document.getElementById(`det${i}`).innerHTML = "";
            //document.getElementById(`place${i}`).innerHTML = "";
            //document.getElementById(`audioFile${i}`).innerHTML = "";

            

            //document.getElementById(`imgSound${i}`).src = "";


        }
    }

}

function cleanString(s){
    return s.toLowerCase().replace("á","a").replace("é","e").replace("í","i").replace("ó","o").replace("ú","u");
}

function esIgual(valor,referencia){
    if(valor=="Todos" || valor=="Todas"){
        return true;
    }else if(valor == referencia){
        return true;
    }else{
        return false;
    }
}

function hasTag(audioData, tagList){

    //console.log(tagList);

    if(tagList.length === 0){
        return true;
    }

    const tags = audioData['Col5'].split(",");
    const audioTags = tags.map(e => cleanString(e.trim()));

    //console.log(audioTags);

    for(let i=0;i<tagList.length;i++){
        //console.log(audioTags);
        //console.log(cleanString(tagList[i]));
        if(audioTags.includes(cleanString(tagList[i]))){
            return true;
        }
    }

    return false;

}

function getTagsFromCol(col){
    if(col=="Todas"){
        return [];
    }
    if(col=="Reflexiones sobre la voz"){
        return ["reflexiones sobre la voz", "autopercepciones vocales", "autobiografías vocales"];
    }
    if(col=="Cantos"){
        return ["canto", "canturreo"];
    }
    if(col=="Explosiones vocales"){
        return ["gritos", "delirio", "impulsos vocales"];
    }
    if(col=="Respiraciones"){
        return ["respiraciones", "suspiros"];
    }
    if(col=="Memorias de la voz"){
        return ["memoria profunda", "voces ancestrales", "autobiografías vocales"];
    }
    if(col=="Articulaciones de la voz"){
        return ["risas", "glissandos", "voces guturales", "labios", "dientes", "saliva"];
    }
    if(col=="Entramados vocales"){
        return ["entramados vocales","piezas electroacústicas"];
    }
}


function buscar(){

    shouldStop = false;


    let start = Date.now();
    
    let texto = cleanString(document.getElementById('buscador').value);
    const selectedIndex1 = document.getElementById('pais').selectedIndex;
    const pais = document.getElementById('pais').options[selectedIndex1].text;
    const selectedIndex2 = document.getElementById('ciudad').selectedIndex;
    const ciudad = document.getElementById('ciudad').options[selectedIndex2].text;
    const selectedIndex3 = document.getElementById('coleccion').selectedIndex;
    const coleccion = document.getElementById('coleccion').options[selectedIndex3].text;

    const tagsCol = getTagsFromCol(coleccion);
    //console.log(tagsCol);

    positivos = [];
    

    for(let k=0;k<755;k++){

        //console.log(shouldStop);
        if(shouldStop == true){
            console.log("Finished");
            return;
        }

        let bool1 = esIgual(pais,datos[k]['pais']);
        let bool2 = esIgual(ciudad,datos[k]['ciudad']);

        


        for(let j=0;j<13;j++){

            //console.log(hasTag(datos[k],tagsSelected));

            if((!(bool1 && bool2) || !hasTag(datos[k],tagsCol)) || !hasTag(datos[k],tagsSelected)){
                break;
            }
            

            if(positivos.includes(k+1)){
                break;
            }else if(cleanString(datos[k][vars[j]]).includes(texto)){
                positivos.push(k+1);
                break;
            }

        }

    }

    console.log(positivos);

    fillPageN(1);
    number = 1;
    document.getElementById('number').innerHTML = number;

    let end = Date.now();
    //console.log(end);
    //console.log("Elapsed time:", end - start, "ms");
}

/*
document.getElementById("tagsDiv").addEventListener("click",()=>{
    document.getElementById('tagsContainer').style.display = "flex";
});
*/


document.getElementById('buscador').addEventListener("input",()=>{

    console.log("detected");

    shouldStop = true;

    if(Date.now() - lastInput > 1000){
        setTimeout(() => {
            shouldStop = false;
            buscar();// Will show the most updated data
        }, 1000); 
    }else{
        setTimeout(()=>{

            if(Date.now() - lastInput > 1000){
                buscar();
            }

        },1000);
    }

    lastInput = Date.now();

});


//document.getElementById("botonBuscar").addEventListener("click",buscar);
document.getElementById("pais").addEventListener("change",() => {

    console.log("iniciar");

    buscar();
    const selectedIndex1 = document.getElementById('pais').selectedIndex;
    const pais = document.getElementById('pais').options[selectedIndex1].text;

    const selectElement = document.getElementById("ciudad");
    const options = selectElement.options;

    let buenos = options[1];
    let santa = options[2];
    let rosario = options[3];
    let delta = options[4];
    let san = options[5];
    let turrialba = options[6];
    let comunidad = options[7];
    let cartago = options[8];
    let santiago = options[9];
    let chiloe = options[10];
    let valparaiso = options[11];
    let bogota = options[12];
    let bucaramanga = options[13];
    let medellin = options[14];
    let qosqo = options[15];
    let lima = options[16];
    let coyoacan = options[17];

    if(pais==""){
        buenos.style.display = "block";
        santa.style.display = "block";
        rosario.style.display = "block";
        delta.style.display = "block";
        san.style.display = "block";
        turrialba.style.display = "block";
        comunidad.style.display = "block";
        cartago.style.display = "block";
        santiago.style.display = "block";
        chiloe.style.display = "block";
        valparaiso.style.display = "block";
        bogota.style.display = "block";
        bucaramanga.style.display = "block";
        medellin.style.display = "block";
        qosqo.style.display = "block";
        lima.style.display = "block";
        coyoacan.style.display = "block";
    }else if(pais == "Argentina"){
        buenos.style.display = "block";
        santa.style.display = "block";
        rosario.style.display = "block";
        delta.style.display = "block";
        san.style.display = "none";
        turrialba.style.display = "none";
        comunidad.style.display = "none";
        cartago.style.display = "none";
        santiago.style.display = "none";
        chiloe.style.display = "none";
        valparaiso.style.display = "none";
        bogota.style.display = "none";
        bucaramanga.style.display = "none";
        medellin.style.display = "none";
        qosqo.style.display = "none";
        lima.style.display = "none";
        coyoacan.style.display = "none";
    }else if(pais == "Costa Rica"){
        buenos.style.display = "none";
        santa.style.display = "none";
        rosario.style.display = "none";
        delta.style.display = "none";
        san.style.display = "block";
        turrialba.style.display = "block";
        comunidad.style.display = "block";
        cartago.style.display = "block";
        santiago.style.display = "none";
        chiloe.style.display = "none";
        valparaiso.style.display = "none";
        bogota.style.display = "none";
        bucaramanga.style.display = "none";
        medellin.style.display = "none";
        qosqo.style.display = "none";
        lima.style.display = "none";
        coyoacan.style.display = "none";
    }else if(pais == "Chile"){
        buenos.style.display = "none";
        santa.style.display = "none";
        rosario.style.display = "none";
        delta.style.display = "none";
        san.style.display = "none";
        turrialba.style.display = "none";
        comunidad.style.display = "none";
        cartago.style.display = "none";
        santiago.style.display = "block";
        chiloe.style.display = "block";
        valparaiso.style.display = "block";
        bogota.style.display = "none";
        bucaramanga.style.display = "none";
        medellin.style.display = "none";
        qosqo.style.display = "none";
        lima.style.display = "none";
        coyoacan.style.display = "none";
    }else if(pais == "Colombia"){
        buenos.style.display = "none";
        santa.style.display = "none";
        rosario.style.display = "none";
        delta.style.display = "none";
        san.style.display = "none";
        turrialba.style.display = "none";
        comunidad.style.display = "none";
        cartago.style.display = "none";
        santiago.style.display = "none";
        chiloe.style.display = "none";
        valparaiso.style.display = "none";
        bogota.style.display = "block";
        bucaramanga.style.display = "block";
        medellin.style.display = "block";
        qosqo.style.display = "none";
        lima.style.display = "none";
        coyoacan.style.display = "none";
    }else if(pais == "Perú"){
        buenos.style.display = "none";
        santa.style.display = "none";
        rosario.style.display = "none";
        delta.style.display = "none";
        san.style.display = "none";
        turrialba.style.display = "none";
        comunidad.style.display = "none";
        cartago.style.display = "none";
        santiago.style.display = "none";
        chiloe.style.display = "none";
        valparaiso.style.display = "none";
        bogota.style.display = "none";
        bucaramanga.style.display = "none";
        medellin.style.display = "none";
        qosqo.style.display = "block";
        lima.style.display = "block";
        coyoacan.style.display = "none";
    }else if(pais == "México"){
        buenos.style.display = "none";
        santa.style.display = "none";
        rosario.style.display = "none";
        delta.style.display = "none";
        san.style.display = "none";
        turrialba.style.display = "none";
        comunidad.style.display = "none";
        cartago.style.display = "none";
        santiago.style.display = "none";
        chiloe.style.display = "none";
        valparaiso.style.display = "none";
        bogota.style.display = "none";
        bucaramanga.style.display = "none";
        medellin.style.display = "none";
        qosqo.style.display = "none";
        lima.style.display = "none";
        coyoacan.style.display = "block";
    }

});

document.getElementById("ciudad").addEventListener("change",buscar);
document.getElementById("coleccion").addEventListener("change",buscar);


function leftArrow(){
    console.log("a");
    if(number != 1){
        number -= 1;
        fillPageN(number);
        document.getElementById('number').innerHTML = number;
    }
}


function rightArrow(){

    console.log("b");

    if(positivos.length == 0){
        number = 1;
        fillPageN(1);
        document.getElementById('number').innerHTML = number;
        return;
    }

    const maxN = Math.ceil(positivos.length / 50);

    if(number < maxN){
        number += 1;
        fillPageN(number);
        document.getElementById('number').innerHTML = number;
    }
}




/*
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      //console.log('Enter key pressed anywhere on the page');
      buscar(); // Optional: prevent default behavior if needed
    }
  });
*/

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Space' || event.keyCode === 32) {

        if(startPlaying){

            const audio = document.getElementById('song');

            if (audio.paused) {
                audio.play();
                document.getElementById("changerPause").style.display = "block";
                document.getElementById("changerPlay").style.display = "none";
            } else {
                audio.pause();
                document.getElementById("changerPause").style.display = "none";
                document.getElementById("changerPlay").style.display = "block";

            }
        } 
    }
  });

/*function changer(){

    console.log("iniciado");

    const boton = document.getElementById('changer');
    const audio = document.getElementById('song');


    console.log(audio.paused);

    if(audio.paused){
        audio.play();
        boton.src = "../imagenes/pause-solid.svg";
    }else{
        audio.pause();
        boton.src = "../imagenes/play-blanco.svg";
    }

}
*/

document.addEventListener("DOMContentLoaded", () => {
    

    $(".changer").click( function() {

        const audio = document.getElementById('song');
        //console.log("iniciado");

        //console.log("Audio paused:", audio.paused);  // Log paused state

        if (audio.paused) {
            audio.play();
            document.getElementById("changerPause").style.display = "block";
            document.getElementById("changerPlay").style.display = "none";
        } else {
            audio.pause();
            document.getElementById("changerPause").style.display = "none";
            document.getElementById("changerPlay").style.display = "block";

        }
    });
});


document.getElementById('song').addEventListener("timeupdate", () => {

    const audio = document.getElementById("song");
    const currentTimeDisplay = document.getElementById("timeInPlayer");
    const currentTime = audio.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    
    currentTimeDisplay.innerHTML = `${minutes}:${seconds}`;
});
















