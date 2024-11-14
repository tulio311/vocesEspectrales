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

        <link rel="stylesheet" type="text/css" href="../css/record.css">
       
        
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

   <div id="start">Start Recording</div>
   <div id="stop">Stop Recording</div>


   <script type="text/javascript" src="../js/record.js"></script>

    </body>
</html>


        </div>