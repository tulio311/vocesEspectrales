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
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/style-responsive.css">
        <link rel="stylesheet" href="css/vertical-rhythm.min.css">
        <link rel="stylesheet" href="css/magnific-popup.css">
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/splitting.css">
        <link rel="stylesheet" href="css/YTPlayer.css">
        <link rel="stylesheet" href="css/demo-elegant/demo-elegant.css">
        <link rel="stylesheet" href="css/myStyles.css">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
    
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
        <div class="page paginaDeInicio" id="top">
            
            <!-- Navigation Panel -->
            <nav class="main-nav dark transparent stick-fixed wow-menubar">
                <div class="main-nav-sub full-wrapper">
                    
                    <!-- Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
                    If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
                    image size for support of retina screens. See details in the template documentation. *) -->
                    
                    
                    
                </div>
            </nav>
            <!-- End Navigation Panel -->
            
            <main id="main">

                <img src="imagenes/Img_fondo_INTRO.jpg" id="fondo">
            
                <!-- Home Section bg-dark-alpha-80-->
                <section class="home-section parallax-5 light-content z-index-1" id="home">
                    <div class="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
                        
                        <!-- Home Section Content -->
                        <div class="home-content text-center">        
                                            
                            <h2 class="section-title-tiny mb-50 mb-sm-30 wow fadeInDownShort">¿Cuáles son los espectros que habitan nuestra voz?</h2>
                            
                            <h1 class="hs-title-3 mb-80 mb-sm-50 mb-xs-30">
                               <span class="wow charsAnimInLong" data-splitting="chars">¿Qué ocurre cuando dejas que los espectros de la voz se manifiesten?</span>
                            </h1>
                            
                            <div class="local-scroll wow fadeInUpShort" data-wow-delay="0.57s">
                                <a href="/frontPage/index.html" class="link-hover-anim link-circle-1 align-middle" data-link-animate="y">Explorar <i class="mi-arrow-right size-18 align-middle"></i></a>
                            </div>
                            
                        </div>
                        <!-- End Home Section Content -->                   
                        
                    </div>
                </section>
                <!-- End Home Section -->
                
                
                
                
            </main>
    
        
        </div>
        <!-- End Page Wrap -->      
        
        <!-- JS -->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/jquery.ajaxchimp.min.js"></script>             
        <script src="js/contact-form.js"></script>        
        <script src="js/all.js"></script> 
        <!-- End JS -->
         
        <script type="text/javascript">
            console.log("a");
            document.getElementById("Link").addEventListener("click",()=>{
                const url = '/FrontPage.html';
                console.log("Clicked");
                // Make the AJAX request
                fetch(url)
                .then(response => {
                    // Check if the request was successful
                    if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                    }
                    // Parse the HTML text from the response
                    return response.text();
                })
                .then(htmlContent => {
                    // Handle the HTML content
                    console.log(htmlContent);

                    // Optionally, you can inject the HTML content into the DOM
                    document.getElementById('content').innerHTML = htmlContent;
                })
                .catch(error => {
                    // Handle any errors
                    console.error('There was a problem with the fetch operation:', error);
                });
            });
        </script>
        
    </body>
</html>


        </div>