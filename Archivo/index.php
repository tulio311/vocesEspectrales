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
        
        <!-- Favicon 
        <link rel="icon" href="images/favicon.png" type="image/png" sizes="any">
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml"> -->

        <!-- Dashboard icons -->
        <!--  <link rel="icon" href="/favicon.ico"/>
        <link rel="manifest" href="/manifest.json"/>
        <script defer="defer" src="/static/js/main.1a2ea396.js"></script> 
        <link href="/static/css/main.ec9a3922.css" rel="stylesheet"> 
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>-->

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

        

        <link rel="stylesheet" href="../css/dataTables.bootstrap4.min.css">
        <link rel="stylesheet" href="../css/responsive.bootstrap4.min.css">
        <link rel="stylesheet" href="../css/select2.min.css">
        <link rel="stylesheet" href="../css/app.min.css">
        <link rel="stylesheet" href="../css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/icons.min.css">

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
                            <li><a href="../Archivo" class="opacity-1 no-hover"><span class="link-hover-anim underline" data-link-animate="y">Archivo</span></a></li>

                        </ul>                        
                        
                    </div>
                    <!-- End Main Menu -->
                    
                </div>
            </nav>
            <!-- End Navigation Panel -->
            
            <main id="main">
            
                <!-- Header Section bg-dark-1  -->
                <section class="page-section bg-dark-alpha-60 light-content parallax-5" style="background-image: url(../imagenes/Fondo-archivo.jpg)" id="home">
                    <div class="container position-relative pt-50">
                            
                        <!-- Section Content -->
                        <div class="text-center">
                            <div class="row" id="rowTexto">
                                
                                <!-- Page Title -->
                                <div class="col-md-8 offset-md-2 m-0 w-100">
                                        
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


           <audio id="song" src="../Audios/ADELA_LIDIV-CR-EP-231023-0290.wav">
            </audio>

            <div id="contentBox">

                

                <div id="menuBox">

               

                    <form class="app-search d-none d-lg-block">
                        <div class="position-relative">
                            <img class="lupa" src="../imagenes/sistrix-brands-solid.svg" width="15px" height="15px" alt="">
                            <input id="buscador" type="text" class="form-control" placeholder="Buscar...">
                            <!-- <span src="../imagenes/sistrix-brands-solid.svg" width="10px" height="10px" alt=""></span> -->
                            <!-- <span class="bx bx-search-alt"></span> -->
                        </div>
                    </form>

                    <label for="pais" class="mt-20 mb-10">País</label>
                    <select class="form-control select2" id="pais" name="pais">
                        <option value="_pais">Todos</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Peru">Perú</option>
                        <option value="Mexico">México</option>
                    </select>

                    <label for="ciudad" class="mt-20 mb-10">Ciudad</label>
                    <select class="form-control select2" id="ciudad" name="ciudad">
                        <option value="_ciudad">Todas</option>
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

                    <label for="coleccion" class="mt-20 mb-10">Colección</label>
                    <select class="form-control select2" id="coleccion" name="coleccion">
                        <option value="_colecciones">Todas</option>
                        <option value="Reflexiones sobre la voz">Reflexiones sobre la voz</option>
                        <option value="Cantos">Cantos</option>
                        <option value="Explosiones vocales">Explosiones vocales</option>
                        <option value="Respiraciones">Respiraciones</option>
                        <option value="Memorias de la voz">Memorias de la voz</option>
                        <option value="Articulaciones de la voz">Articulaciones de la voz</option>
                        <option value="Entramados vocales">Entramados vocales</option>
                    </select>
                                

                    <div id="tags" class="w-100 d-flex flex-column align-items-center justify-content-center">
                        <label class="mt-20 mb-10">Temas</label>
                        <button data-bs-target="#exampleModalScrollable" data-bs-toggle="modal" id="btnTags" type="button" class="btn btn-info waves-effect waves-light">Seleccionar</button>
                    </div>   


                    <div id="tagsSelected">
                        
                    </div>



                    <svg id="cruz" height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg> 

                <div class="modal fade" onclick="noFilter()" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable" onclick="preventHiding(event)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalScrollableTitle">Temas</h5>
                                <button type="button" id="btn-close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div id="cuerpoTags" class="modal-body">
                                





                            </div>

                            <div class="modal-footer">
                                <!-- <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button> -->
                                <button id="btnFiltrar" onclick="filtrarTags()" type="button" class="btn btn-primary">Filtrar</button>
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div><!-- /.modal -->


                </div>

                    <div id="listBox">

                        <table class="table">

                            <thead>
                                <tr class="item1" id="tableNames">
                                    <th class="imgCont1"></th>
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

                        <!-- paginación -->
                        <ul class="pagination">
                            <!--<paginate_button page-item previous disabled -->
                        <li class="arrow" onclick="leftArrow()">
                            <a class="page-link arrow">
                                <img  src="../imagenes/chevron-left-solid.svg" height="10px" width="10px">
                            </a>
                        </li>
                        <li class="paginate_button page-item active d-flex align-items-center">
                            <div id="number" class="page-link d-flex align-items-center justify-content-center" href="">
                                <div>1</div>
                            </div>
                        </li>
                        <li class="arrow" onclick="rightArrow()">
                            <a class="page-link arrow">
                                <img  src="../imagenes/chevron-right-solid.svg" height="10px" width="10px">
                            </a>
                        </li>
                        </ul> 

                    </div>

                    


                </div>

            <div id="controlsPlaceholder"></div>

            <div id="controls">

                <p id="nameInPlayer" class="m-0"></p>
                <p id="detInPlayer" class="m-0"></p>

                <div id="changerCont">
                    <img class="changer" id="changerPlay" src="../imagenes/play-blanco.svg" width="20px" height="20px">
                    <img class="changer" id="changerPause" src="../imagenes/pause-solid.svg" width="20px" height="30px">
                </div>

                <div class="cuartoElemento d-flex flex-row-reverse pr-20">
                    <p id="timeInPlayer" class="m-0">0:00</p>
                </div>
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
        <!-- <script src="../js/plugin.js"></script>-->
        
         
        <script src="../js/RealArchive.js"></script>
        
    </body>
</html>