let datos = {};

let positivos = createArray(755);

let number = 1;

let startPlaying = false;

let tagsSelected = [];

//let url = "http://localhost:8000";
let url = "https://voces-espectrales.net";



const vars = ['AudioName','Col1','Descripcion','Col2','Fecha','Hora','Lugar','Col3','AudioData','Duracion','Col4','Nombre','Col5'];

let shouldStop = false;

let lastInput= 0;

// Generar lista
const container = document.getElementById("container");
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


// Generar tags
const lasTags = [
  ["matamami",4],
  ["argentina", 1],
  ["presentaciones", 2],
  ["voces maternadas", 3],
  ["voces explosivas", 4],
  ["voces silentes", 5],
  ["canturreo", 6],
  ["voces nasales", 7],
  ["voces animales", 8],
  ["voces maternadas. quejidos", 9],
  ["gritos", 10],
  ["susurros", 11],
  ["quejidos", 12],
  ["voces estridentes", 13],
  ["balbuceos", 14],
  ["risas", 15],
  ["delirio", 16],
  ["dúos", 17],
  ["voces divertidas", 18],
  ["voces pesadas", 19],
  ["gemidos", 20],
  ["suspiros", 21],
  ["quebranto", 22],
  ["Argentina", 23],
  ["Buenos Aires", 24],
  ["experimentación vocal", 25],
  ["impulsos vocales", 26],
  ["reflexiones vocales", 27],
  ["CASo", 28],
  ["autobiografías vocales", 1],
  ["exploraciones vocales", 2],
  ["multifónicos", 3],
  ["voces graves", 4],
  ["entramados vocales", 5],
  ["vocalizaciones guiadas", 6],
  ["obras improvisatorias", 7],
  ["Músicos en Congreso", 8],
  ["Santa Fe", 9],
  ["auto-percepciones vocales", 10],
  ["micropiezas vocales", 11],
  ["respiraciones", 12],
  ["UNR", 13],
  ["Rosario", 14],
  ["autopercepciones vocales", 15],
  ["llanto", 16],
  ["memoria profunda", 17],
  ["voces guturales", 18],
  ["continuo vocal", 19],
  ["besos", 20],
  ["silbidos", 21],
  ["labios", 22],
  ["diseño sonoro", 23],
  ["Tigre", 24],
  ["Presentaciones", 25],
  ["secretos", 26],
  ["piezas electroacústicas", 27],
  ["estudios sonoros", 28],
  ["UNTREF", 29],
  ["reflexiones sobre la voz", 30],
  ["Morón", 31],
  ["Buenos Aires voces maternadas", 32],
  ["Escuela de Artes Musicales", 33],
  ["UCR", 34],
  ["San José", 35],
  ["Costa Rica", 36],
  ["cuidar la voz", 37],
  ["Turrialba", 38],
  ["poesía", 39],
  ["voces ancestrales", 40],
  ["Escuela de Artes Plásticas", 41],
  ["saliva", 42],
  ["miedo", 43],
  ["vocal painting", 44],
  ["creaciones sonoras", 45],
  ["Comunidad Alto Pacuare", 46],
  ["voces infantiles", 47],
  ["Cártago", 48],
  ["censura", 49],
  ["Santiago", 50],
  ["Chile", 51],
  ["sonidos estridentes", 52],
  ["ceceos", 53],
  ["balbuceo", 54],
  ["glissandos", 55],
  ["voces internas", 56],
  ["continuo vocal", 1],
  ["voces desaparecidas", 2],
  ["canto", 3],
  ["activaciones de archivo", 4],
  ["Universidad Católica de Valparaíso", 5],
  ["Valparaíso", 6],
  ["respiración", 7],
  ["voces rasposas", 8],
  ["regalo sonoro", 9],
  ["dolor profundo", 10],
  ["suspiros. bostezo", 11],
  ["Chiloé", 12],
  ["exploraciones vocales voces infantiles", 13],
  ["ternura", 14],
  ["dientes", 15],
  ["Pontificia Universidad Javeriana", 16],
  ["Bogotá", 17],
  ["Colombia", 18],
  ["memorias profundas", 19],
  ["tos", 20],
  ["Universidad Industrial de Santander", 21],
  ["Bucaramanga", 22],
  ["sonidos rasposos", 23],
  ["lengua", 24],
  ["Universidad de Antioquia", 25],
  ["Medellín", 26],
  ["Reflexiones sobre la voz", 27],
  ["voces animarles", 28],
  ["La Pascasia", 29],
  ["sonidos granulares", 30],
  ["resonancia", 31],
  ["reiteraciones", 32],
  ["trémolo", 33],
  ["voz monstruosa", 34],
  ["instrumentos musicales", 35],
  ["sonidos percusivos", 36],
  ["Pumpumyachkan", 37],
  ["Qosqo", 38],
  ["Perú", 39],
  ["Universidad Nacional de Música", 40],
  ["Lima", 41],
  ["sonidos percutidos", 42],
  ["samples", 43],
  ["montañas", 44],
  ["mar", 45],
  ["Coyoacán", 46],
  ["Ciudad de México", 47],
  ["México", 48],
  ["grito ahogado", 49],
  ["glissando", 50],
  ["risa", 51]
];



const tagCont = document.getElementById('cuerpoTags');

for (let i=0; i<lasTags.length; i++){
    const tag = lasTags[i][0];
    const tagN = lasTags[i][1];

    const cont = document.createElement("div");
    cont.className = "form-check mb-2";

    const input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "checkbox";
    input.value = "checked";
    input.id = (tag + "check").replace(" ","_");

    const label = document.createElement("label");
    label.className = "form-check-label";
    label.innerHTML = tag;

    cont.appendChild(input);
    cont.appendChild(label);


    const contNum = document.createElement("div");
    contNum.id = (tag + "num").replace(" ","_");
    contNum.innerHTML = tagN;


    tagCont.appendChild(cont);
    tagCont.appendChild(contNum);


}




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




async function filtrarTags(){

    for(let i=0;i<lasTags.length;i++){

        const tag = lasTags[i][0].replace(" ","_");
        //console.log(tag);
        const box = document.getElementById( tag + "check");
        if(box.checked){

            if(!tagsSelected.includes(tag)){
                tagsSelected.push(tag);
            }

        }else{
            tagsSelected = tagsSelected.filter(item => item !== tag);
        }

    }


    const a = await buscar();

    fillPageN(1);


    // Agregar bloques de tags
    const contTags = document.getElementById("tagsSelected");

    const cruz = document.getElementById("cruz");

    for(let i=0; i<lasTags.length; i++){

        const tag = lasTags[i][0];

        let ind = 0;

        for(let j = 0; j<tagsSelected.length; j++){
            if(tag == tagsSelected[j]){
                ind = 1;
                break;
            }
        }

        const block = document.getElementById(tag + "Block");

        if(ind){
            if(block == null){
                const blockCont = document.createElement("div");
                blockCont.style.backgroundColor = "#50bdcd";
                block.id = tag + "Block";

                const text = document.createElement("p");
                text.innerHTML = tag;

                const cruzCopia = cruz.cloneNode(true);
                cruzCopia.style.display = "inline-block";

                blockCont.appendChild(tag);
                blockCont.appendChild(cruzCopia);

            }
        }else{
            if(block !== null){
                block.remove()
            }
        }

        
    }


    document.getElementById("btn-close").click();

}


function preventHiding(e){
    e.stopPropagation();
}


function noFilter(){

    for(let i=0;i<lasTags.length;i++){
        const tag = lasTags[i][0].replace(" ","_");
        const box = document.getElementById( tag + "check");
        box.checked = false;
    }

    for(let i=0;i<tagsSelected.length; i++){
        document.getElementById( tagsSelected[i] + "check").checked = true;
    }

}





























