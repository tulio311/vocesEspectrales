<?php

$cache_duration = 12 * 60 * 60; // 12 hours in seconds
header('Cache-Control: public, max-age=' . $cache_duration);
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + $cache_duration) . ' GMT');

?>

<div id="content">

<!DOCTYPE html>
<!-- Change the value of lang="en" attribute if your website's language is not English.
You can find the code of your language here - https://www.w3schools.com/tags/ref_language_codes.asp -->
<html lang="en">
    <head>
        
        <title>Aves | Archivo de voces espectrales</title>
        <meta name="description" content="Resonance &mdash; One & Multi Page Creative Template">  
        <meta charset="utf-8">
        <meta name="author" content="https://themeforest.net/user/bestlooker/portfolio">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Favicon -->
        <link rel="icon" href="images/favicon.png" type="image/png" sizes="any">
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml">         

        <!-- CSS -->
        <link rel="stylesheet" href="../css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/style-responsive.css">
        <link rel="stylesheet" href="../css/vertical-rhythm.min.css">
        <link rel="stylesheet" href="../css/magnific-popup.css">
        <link rel="stylesheet" href="../css/owl.carousel.css">
        <link rel="stylesheet" href="../css/splitting.css">
        <link rel="stylesheet" href="../css/YTPlayer.css">
        <link rel="stylesheet" href="../css/demo-elegant/demo-elegant.css">

        
        <link rel="stylesheet" href="../css/myStylesArchivo.css">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
    
    </head>
    <body class="appear-animate">
        
        <!-- Page Loader 
        <div class="page-loader flexBox">
            <div class="loader"></div>
            <div class="pt-40">Cargando...</div>
        </div>
   End Page Loader -->

        <div id="tagsContainer">

        <div id="tagsOverlay">
                <div class="tagContainer">
                    <input type="checkbox" id="matamami" name="terms">
                    <label for="matamami">matamami</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="argentina" name="terms">
                    <label for="argentina">argentina</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="presentaciones" name="terms">
                    <label for="presentaciones">presentaciones</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_maternadas" name="terms">
                    <label for="voces_maternadas">voces maternadas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_explosivas" name="terms">
                    <label for="voces_explosivas">voces explosivas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_silentes" name="terms">
                    <label for="voces_silentes">voces silentes</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="canturreo" name="terms">
                    <label for="canturreo">canturreo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_nasales" name="terms">
                    <label for="voces_nasales">voces nasales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_animales" name="terms">
                    <label for="voces_animales">voces animales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_maternadas_quejidos" name="terms">
                    <label for="voces_maternadas_quejidos">voces maternadas. quejidos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="gritos" name="terms">
                    <label for="gritos">gritos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="susurros" name="terms">
                    <label for="susurros">susurros</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="quejidos" name="terms">
                    <label for="quejidos">quejidos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_estridentes" name="terms">
                    <label for="voces_estridentes">voces estridentes</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="balbuceos" name="terms">
                    <label for="balbuceos">balbuceos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="risas" name="terms">
                    <label for="risas">risas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="delirio" name="terms">
                    <label for="delirio">delirio</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="duos" name="terms">
                    <label for="duos">dúos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_divertidas" name="terms">
                    <label for="voces_divertidas">voces divertidas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_pesadas" name="terms">
                    <label for="voces_pesadas">voces pesadas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="gemidos" name="terms">
                    <label for="gemidos">gemidos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="suspiros" name="terms">
                    <label for="suspiros">suspiros</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="quebranto" name="terms">
                    <label for="quebranto">quebranto</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="argentina" name="terms">
                    <label for="argentina">Argentina</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="buenos_aires" name="terms">
                    <label for="buenos_aires">Buenos Aires</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="experimentacion_vocal" name="terms">
                    <label for="experimentacion_vocal">experimentación vocal</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="impulsos_vocales" name="terms">
                    <label for="impulsos_vocales">impulsos vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="reflexiones_vocales" name="terms">
                    <label for="reflexiones_vocales">reflexiones vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="caso" name="terms">
                    <label for="caso">CASo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="autobiografias_vocales" name="terms">
                    <label for="autobiografias_vocales">autobiografías vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="exploraciones_vocales" name="terms">
                    <label for="exploraciones_vocales">exploraciones vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="multifonicos" name="terms">
                    <label for="multifonicos">multifónicos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_graves" name="terms">
                    <label for="voces_graves">voces graves</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="entramados_vocales" name="terms">
                    <label for="entramados_vocales">entramados vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="vocalizaciones_guiadas" name="terms">
                    <label for="vocalizaciones_guiadas">vocalizaciones guiadas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="obras_improvisatorias" name="terms">
                    <label for="obras_improvisatorias">obras improvisatorias</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="musicos_en_congreso" name="terms">
                    <label for="musicos_en_congreso">Músicos en Congreso</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="santa_fe" name="terms">
                    <label for="santa_fe">Santa Fe</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="auto_percepciones_vocales" name="terms">
                    <label for="auto_percepciones_vocales">auto-percepciones vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="micropiezas_vocales" name="terms">
                    <label for="micropiezas_vocales">micropiezas vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="respiraciones" name="terms">
                    <label for="respiraciones">respiraciones</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="unr" name="terms">
                    <label for="unr">UNR</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="rosario" name="terms">
                    <label for="rosario">Rosario</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="autopercepciones_vocales" name="terms">
                    <label for="autopercepciones_vocales">autopercepciones vocales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="llanto" name="terms">
                    <label for="llanto">llanto</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="memoria_profunda" name="terms">
                    <label for="memoria_profunda">memoria profunda</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_guturales" name="terms">
                    <label for="voces_guturales">voces guturales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="continuo_vocal" name="terms">
                    <label for="continuo_vocal">continuo vocal</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="besos" name="terms">
                    <label for="besos">besos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="silbidos" name="terms">
                    <label for="silbidos">silbidos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="labios" name="terms">
                    <label for="labios">labios</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="diseno_sonoro" name="terms">
                    <label for="diseno_sonoro">diseño sonoro</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="tigre" name="terms">
                    <label for="tigre">Tigre</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="presentaciones" name="terms">
                    <label for="presentaciones">Presentaciones</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="secretos" name="terms">
                    <label for="secretos">secretos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="piezas_electroacusticas" name="terms">
                    <label for="piezas_electroacusticas">piezas electroacústicas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="estudios_sonoros" name="terms">
                    <label for="estudios_sonoros">estudios sonoros</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="untref" name="terms">
                    <label for="untref">UNTREF</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="reflexiones_sobre_la_voz" name="terms">
                    <label for="reflexiones_sobre_la_voz">reflexiones sobre la voz</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="moron" name="terms">
                    <label for="moron">Morón</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="buenos_aires_voces_maternadas" name="terms">
                    <label for="buenos_aires_voces_maternadas">Buenos Aires voces maternadas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="escuela_de_artes_musicales" name="terms">
                    <label for="escuela_de_artes_musicales">Escuela de Artes Musicales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="ucr" name="terms">
                    <label for="ucr">UCR</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="san_jose" name="terms">
                    <label for="san_jose">San José</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="costa_rica" name="terms">
                    <label for="costa_rica">Costa Rica</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="cuidar_la_voz" name="terms">
                    <label for="cuidar_la_voz">cuidar la voz</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="turrialba" name="terms">
                    <label for="turrialba">Turrialba</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="poesia" name="terms">
                    <label for="poesia">poesía</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_ancestrales" name="terms">
                    <label for="voces_ancestrales">voces ancestrales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="escuela_de_artes_plasticas" name="terms">
                    <label for="escuela_de_artes_plasticas">Escuela de Artes Plásticas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="saliva" name="terms">
                    <label for="saliva">saliva</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="miedo" name="terms">
                    <label for="miedo">miedo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="vocal_painting" name="terms">
                    <label for="vocal_painting">vocal painting</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="creaciones_sonoras" name="terms">
                    <label for="creaciones_sonoras">creaciones sonoras</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="comunidad_alto_pacuare" name="terms">
                    <label for="comunidad_alto_pacuare">Comunidad Alto Pacuare</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_infantiles" name="terms">
                    <label for="voces_infantiles">voces infantiles</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="cartago" name="terms">
                    <label for="cartago">Cártago</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="censura" name="terms">
                    <label for="censura">censura</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="santiago" name="terms">
                    <label for="santiago">Santiago</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="chile" name="terms">
                    <label for="chile">Chile</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="sonidos_estridentes" name="terms">
                    <label for="sonidos_estridentes">sonidos estridentes</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="ceceos" name="terms">
                    <label for="ceceos">ceceos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="balbuceo" name="terms">
                    <label for="balbuceo">balbuceo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="glissandos" name="terms">
                    <label for="glissandos">glissandos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_internas" name="terms">
                    <label for="voces_internas">voces internas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="continuo_vocal" name="terms">
                    <label for="continuo_vocal">continuo vocal</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_desaparecidas" name="terms">
                    <label for="voces_desaparecidas">voces desaparecidas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="canto" name="terms">
                    <label for="canto">canto</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="activaciones_de_archivo" name="terms">
                    <label for="activaciones_de_archivo">activaciones de archivo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="universidad_catolica_de_valparaiso" name="terms">
                    <label for="universidad_catolica_de_valparaiso">Universidad Católica de Valparaíso</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="valparaiso" name="terms">
                    <label for="valparaiso">Valparaíso</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="respiracion" name="terms">
                    <label for="respiracion">respiración</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_rasposas" name="terms">
                    <label for="voces_rasposas">voces rasposas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="regalo_sonoro" name="terms">
                    <label for="regalo_sonoro">regalo sonoro</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="dolor_profundo" name="terms">
                    <label for="dolor_profundo">dolor profundo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="suspiros_bostezo" name="terms">
                    <label for="suspiros_bostezo">suspiros. bostezo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="chile" name="terms">
                    <label for="chile">Chiloé</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="exploraciones_vocales_voces_infantiles" name="terms">
                    <label for="exploraciones_vocales_voces_infantiles">exploraciones vocales voces infantiles</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="ternura" name="terms">
                    <label for="ternura">ternura</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="dientes" name="terms">
                    <label for="dientes">dientes</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="pontificia_universidad_javeriana" name="terms">
                    <label for="pontificia_universidad_javeriana">Pontificia Universidad Javeriana</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="bogota" name="terms">
                    <label for="bogota">Bogotá</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="colombia" name="terms">
                    <label for="colombia">Colombia</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="memorias_profundas" name="terms">
                    <label for="memorias_profundas">memorias profundas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="tos" name="terms">
                    <label for="tos">tos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="universidad_industrial_de_santander" name="terms">
                    <label for="universidad_industrial_de_santander">Universidad Industrial de Santander</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="bucaramanga" name="terms">
                    <label for="bucaramanga">Bucaramanga</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="sonidos_rasposos" name="terms">
                    <label for="sonidos_rasposos">sonidos rasposos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="lengua" name="terms">
                    <label for="lengua">lengua</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="universidad_de_antoquia" name="terms">
                    <label for="universidad_de_antoquia">Universidad de Antioquia</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="medellin" name="terms">
                    <label for="medellin">Medellín</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="reflexiones_sobre_la_voz" name="terms">
                    <label for="reflexiones_sobre_la_voz">Reflexiones sobre la voz</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voces_animarles" name="terms">
                    <label for="voces_animarles">voces animarles</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="la_pascasia" name="terms">
                    <label for="la_pascasia">La Pascasia</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="sonidos_granulares" name="terms">
                    <label for="sonidos_granulares">sonidos granulares</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="resonancia" name="terms">
                    <label for="resonancia">resonancia</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="reiteraciones" name="terms">
                    <label for="reiteraciones">reiteraciones</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="tremolo" name="terms">
                    <label for="tremolo">trémolo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="voz_monstruosa" name="terms">
                    <label for="voz_monstruosa">voz monstruosa</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="instrumentos_musicales" name="terms">
                    <label for="instrumentos_musicales">instrumentos musicales</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="sonidos_percusivos" name="terms">
                    <label for="sonidos_percusivos">sonidos percusivos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="pumpumyachkan" name="terms">
                    <label for="pumpumyachkan">Pumpumyachkan</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="qosqo" name="terms">
                    <label for="qosqo">Qosqo</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="peru" name="terms">
                    <label for="peru">Perú</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="universidad_nacional_de_musica" name="terms">
                    <label for="universidad_nacional_de_musica">Universidad Nacional de Música</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="lima" name="terms">
                    <label for="lima">Lima</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="sonidos_percutidos" name="terms">
                    <label for="sonidos_percutidos">sonidos percutidos</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="samples" name="terms">
                    <label for="samples">samples</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="montanas" name="terms">
                    <label for="montanas">montañas</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="mar" name="terms">
                    <label for="mar">mar</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="coyoacan" name="terms">
                    <label for="coyoacan">Coyoacán</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="ciudad_de_mexico" name="terms">
                    <label for="ciudad_de_mexico">Ciudad de México</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="mexico" name="terms">
                    <label for="mexico">México</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="grito_ahogado" name="terms">
                    <label for="grito_ahogado">grito ahogado</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="glissando" name="terms">
                    <label for="glissando">glissando</label>
                </div>
                <div class="tagContainer">
                    <input type="checkbox" id="risa" name="terms">
                    <label for="risa">risa</label>
                </div>
        </div>

        </div>

        <input type="text" id="buscador">

        <div id="botonBuscar">Buscar</div>

        <div id="optionsCont">

            <label for="pais">País</label>
            <select id="pais" name="pais">
                <option value="_pais"></option>
              <option value="Argentina">Argentina</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Peru">Perú</option>
              <option value="Mexico">México</option>
            </select>

            <label for="ciudad">Ciudad</label>
            <select id="ciudad" name="ciudad">
              <option value="_ciudad"></option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Rosario">Rosario</option>
              <option value="Delta de Tigre">Delta de Tigre</option>
              <option value="San Jose">San José</option>
              <option value="Turrialba">Turrialba</option>
              <option value="Comunidad Alto Pacuare">Comunidad Alto Pacuare</option>
              <option value="Cartago">Cártago</option>
              <option value="Santiago">Santiago</option>
              <option value="Chiloe">Chiloé</option>
              <option value="Valparaiso">Valparaíso</option>
              <option value="Bogota">Bogotá</option>
              <option value="Bucaramanga">Bucaramanga</option>
              <option value="Medellin">Medellín</option>
              <option value="Qosqo">Qosqo</option>
              <option value="Lima">Lima</option>
              <option value="Coyoacan">Coyoacán</option>
            </select>

            <label for="tags">Tags</label>
            <div id="tagsDiv">
            </div>

        </div>


        <div id="fileContainer">


            <?php

                for ($i = 1; $i < 756; $i++) {
                    echo '<div class="fileElement" id="e_' . (string) $i . '"></div>';
                }

            ?>



        </div>

        <script src="../js/archivo.js"></script>
    </body>
</html>


        </div>