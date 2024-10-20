

//   function change_image(image){

//     var container = document.getElementById("main-image");
//     container.src = image.src;

// }


document.addEventListener( 'DOMContentLoaded', function () {

    let main = new Splide( '#main-slider', {
        // fixedWidth: 417,
        // fixedHeight: 410,
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
      } );
    
    let thumbnails=  new Splide( '#thumbnail-slider', {
          fixedWidth: 80,
          fixedHeight: 60,
          gap       : 10,
          rewind    : false,
          pagination: false,
          focus      : 'center',
          cover      : true,
          focus      : 'center',
          isNavigation: true,
          arrows    : true,
          dragMinThreshold: 0,
           dragMinThreshold: {
              mouse: 0,
              touch: 0,
            },
        
          breakpoints: {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
        
    } );
    
    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

  } );

  