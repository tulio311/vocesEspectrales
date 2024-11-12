<?php

$cache_duration = 12 * 60 * 60; // 12 hours in seconds
header('Cache-Control: public, max-age=' . $cache_duration);
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + $cache_duration) . ' GMT');

?>

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

        <!-- Dashboard icons -->
        <link rel="icon" href="/favicon.ico"/>
        <link rel="manifest" href="/manifest.json"/>
        <script defer="defer" src="/static/js/main.1a2ea396.js"></script>
        <link href="/static/css/main.ec9a3922.css" rel="stylesheet">
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

        <!-- CSS -->
        <link rel="stylesheet" href="../css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/style-responsive.css">
        <link rel="stylesheet" href="../css/vertical-rhythm.min.css">
        <link rel="stylesheet" href="../css/magnific-popup.css">
        <link rel="stylesheet" href="../css/owl.carousel.css">
        <link rel="stylesheet" href="../css/splitting.css">
        <link rel="stylesheet" href="../css/YTPlayer.css">
        <link rel="stylesheet" href="../css/demo-main/demo-main.css">

        <link rel="stylesheet" href="../css/myStylesArchivo.css">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"> 

    </head>
    <body class="appear-animate">
        
        <!-- Page Loader -->   
        <div class="page-loader flexBox">
            <div class="loader"></div>
            <div class="pt-40">Cargando...</div>
        </div>
        <!-- End Page Loader -->

        <!-- Skip to Content -->
        <a href="#main" class="btn skip-to-content">Skip to Content</a>
        <!-- End Skip to Content -->
        
        <!-- Page Wrap -->
        <div class="page" id="top">
            
            <!-- Navigation Panel -->
            <nav class="main-nav dark transparent stick-fixed wow-menubar">
                <div class="main-nav-sub full-wrapper">
                    
                    <!-- Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
                    If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
                    image size for support of retina screens. See details in the template documentation. *) -->
                    <div class="nav-logo-wrap local-scroll">
                        <a href="#top" class="logo">
                            <img class="mt-30" src="../imagenes/Logo.png" alt="Your Company Logo" width="105" height="34" />
                        </a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <div class="mobile-nav" role="button" tabindex="0">
                        <i class="mobile-nav-icon"></i>
                        <span class="visually-hidden">Menu</span>
                    </div>
                    
                    <!-- Main Menu -->
                    <div class="inner-nav desktop-nav">
                        
                        
                        <ul class="items-end clearlist">
                            
                            <!-- Languages 
                            <li>
                                <a href="#" class="mn-has-sub opacity-1">En <i class="mi-chevron-down"></i></a>
                                
                                <ul class="mn-sub to-left">                                    
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>                                    
                                </ul>
                                
                            </li>
                             End Languages -->  
                                                      
                            <li><a href="../frontPage" class="opacity-1 no-hover"><span class="link-hover-anim underline" data-link-animate="y">Inicio</span></a></li>
                            <li><a href="https://elinstantedesisifo.cc/aves/" class="opacity-1 no-hover"><span class="link-hover-anim underline" data-link-animate="y">Blog</span></a></li>
                            <li><a href="" class="opacity-1 no-hover"><span class="link-hover-anim underline" data-link-animate="y">Archivo</span></a></li>

                        </ul>                        
                        
                    </div>
                    <!-- End Main Menu -->
                    
                </div>
            </nav>
            <!-- End Navigation Panel -->
            
            <main id="main">
            
                <!-- Header Section -->
                <section class="page-section bg-dark-1 bg-dark-alpha-90 light-content parallax-5" style="background-image: url(../imagenes/Fondo-archivo.jpg)" id="home">
                    <div class="container position-relative pt-50">
                            
                        <!-- Section Content -->
                        <div class="text-center">
                            <div class="row">
                                
                                <!-- Page Title -->
                                <div class="col-md-8 offset-md-2">
                                        
                                    <h1 class="hs-title-1 mb-20">
                                        <span class="wow charsAnimIn" data-splitting="chars">Archivo</span>
                                    </h1>
                                    
                                    
                                    <div class="row opacity-07">
                                        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                            <p id="descripcion" class="section-descr mb-0 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="1.2s">
                                                Los audios que integran este archivo son resultado de talleres y colaboraciones artísticas llevadas a cabo por el artista e investigador mexicano Jorge David García.
                                            </p>
                                        </div>
                                    </div>
                                    

                               </div>
                               <!-- End Page Title -->
                                
                            </div>                            
                        </div>
                        <!-- End Section Content -->
                            
                    </div>              
                </section>
                <!-- End Header Section -->
                
        
           
           </main>

           <i class="fab fa-sistrix"></i>

           <audio id="song" src="">
            </audio>

            <div id="contentBox">

            <div id="menuBox"></div>

            <div id="listBox">

                <table class="table">

                    <thead>
                        <tr class="item" id="tableNames">
                            <th class="imgCont"></th>
                            <th class="playCont"></th>
                            <th class="nameCont">Nombre</th>
                            <th class="colCont">Colección</th>
                            <th class="detCont">Detonante</th>
                            <th class="placeCont"></th>
                        </tr>
                    </thead>

                    <tbody id="container">





                    </tbody>

                </table>
            </div>


            </div>

            <div id="controlsPlaceholder">
 
            </div>

            <div id="controls">

                <img id="changer" src="../imagenes/pause-solid.svg" width="40px" height="40px">
 
            </div>

        
            
        
        </div>
        <!-- End Page Wrap -->      
        
        <!-- JS -->
        <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.bundle.min.js"></script>
        <script src="../js/plugins.js"></script>
        <script src="../js/jquery.ajaxchimp.min.js"></script>             
        <script src="../js/contact-form.js"></script>        
        <script src="../js/all.js"></script> 
        <!-- End JS -->     

        <script src="../js/fontawesome.init.js"></script>
        
         
        <script src="../js/RealArchive.js"></script>
        
    </body>
</html>