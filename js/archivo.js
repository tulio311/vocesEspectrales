let datos = {};

// This function makes the fetch request and returns the response data
async function getData() {

    try {
        const response = await fetch('http://localhost:8000/Archivo/datos.php', {
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
}

main();  // Call the function

setTimeout(() => {
    //console.log(datos);
    fillData();// Will show the most updated data
}, 2000); 



function fillData(){

    for(let i=1;i<756;i++){
        //console.log(datos[i-1]['AudioName']);
        document.getElementById(`e_${i}`).innerHTML = datos[i-1]['AudioName'];
    }

}

function cleanString(s){
    return s.toLowerCase().replace("á","a").replace("é","e").replace("í","i").replace("ó","o").replace("ú","u");
}

function esIgual(valor,referencia){
    if(valor==""){
        return true;
    }else if(valor == referencia){
        return true;
    }else{
        return false;
    }
}

const vars = ['AudioName','Col1','Descripcion','Col2','Fecha','Hora','Lugar','Col3','AudioData','Duracion','Col4','Nombre','Col5'];

function buscar(){

    console.log(datos[1]);
    
    let texto = cleanString(document.getElementById('buscador').value);
    const selectedIndex1 = document.getElementById('pais').selectedIndex;
    const pais = document.getElementById('pais').options[selectedIndex1].text;
    const selectedIndex2 = document.getElementById('ciudad').selectedIndex;
    const ciudad = document.getElementById('ciudad').options[selectedIndex2].text;

    //console.log(pais);
    //console.log(ciudad);

    let positivos = [];

    

    for(let k=0;k<755;k++){

        let bool1 = esIgual(pais,datos[k]['pais']);
        let bool2 = esIgual(ciudad,datos[k]['ciudad']);

        for(let j=0;j<13;j++){

            console.log(!(bool1 && bool2));

            if(!(bool1 && bool2)){
                break;
            }

            if(positivos.includes(k)){
                break;
            }else if(cleanString(datos[k][vars[j]]).includes(texto)){
                positivos.push(k);
                break;
            }

        }

    }

    for(let k=0;k<755;k++){

        if(positivos.includes(k)){
            document.getElementById(`e_${k+1}`).style.display = "block";
        }else{
            document.getElementById(`e_${k+1}`).style.display = "none";
        }

    }
}


document.getElementById("tagsDiv").addEventListener("click",()=>{
    document.getElementById('tagsContainer').style.display = "flex";
});






document.getElementById("botonBuscar").addEventListener("click",buscar);
document.getElementById("pais").addEventListener("change",() => {

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
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      //console.log('Enter key pressed anywhere on the page');
      buscar(); // Optional: prevent default behavior if needed
    }
  });




















