// jquery ready

$ ( function(){


  // invoco funzione con click icona destra

  $(".next").click(function(){

    slider("right");

  });


  // invoco funzione con click icona sinistra


  $(".prev").click(function(){

    slider("left");

  });

  // invoco funzione con tasto destro e sinistro

  $(document).keydown(function(e){

    if(e.keyCode == 39){

      slider("right");

    } else if (e.keyCode == 37){

      slider("left");

    }

  });

  // // evento al click dx
  // $(".next").click(
  //   function(){
  //
  //     // dichiarazione variabili
  //     var imgSlider = $(".images img.active");
  //
  //     var bulletSlider = $(".nav i.active");
  //
  //
  //     var firstImg = $(".images img.first");
  //
  //     var firstBullet = $(".nav i.first");
  //
  //     // rimuovo classe active al click
  //
  //     imgSlider.removeClass("active");
  //
  //     bulletSlider.removeClass("active");
  //
  //     // se non è presente classe last aggiungi active al successivo
  //
  //     if(imgSlider.hasClass("last") == false && bulletSlider.hasClass("last") == false){
  //
  //       imgSlider.next().addClass("active");
  //
  //       bulletSlider.next().addClass("active");
  //
  //     } else{
  //
  //       // altrimenti aggiungi active all'elemento con classe first
  //
  //       firstImg.addClass("active");
  //
  //       firstBullet.addClass("active");
  //
  //     }
  //
  //   }
  // );
  //
  // // evento al click sx
  //
  // $(".prev").click(
  //   function(){
  //
  //     // dichiarazione variabili
  //
  //     var imgSlider = $(".images img.active");
  //
  //     var bulletSlider = $(".nav i.active");
  //
  //     var lastImg = $(".images img.last");
  //
  //     var lastBullet = $(".nav i.last");
  //
  //     // al click rimuovo classe active
  //
  //     imgSlider.removeClass("active");
  //
  //     bulletSlider.removeClass("active");
  //
  //     // se non è presente classe first aggiungo active all'elemento precedente
  //
  //     if(imgSlider.hasClass("first") == false && bulletSlider.hasClass("first") == false ){
  //
  //
  //       imgSlider.prev().addClass("active");
  //
  //       bulletSlider.prev().addClass("active");
  //
  //     } else{
  //
  //       // altrimenti aggiungo active all'elemento che ha classe last
  //
  //       lastImg.addClass("active");
  //
  //       lastBullet.addClass("active");
  //
  //     }
  //
  //   }
  // );


  // al click del bullet appare img corrispondente

  $(".nav i").click(function(){

    // ad ogni click rimuovo classe active a immagini e bullets
    $(".nav i").removeClass("active");

    $(".images img.active").removeClass("active");


    // se non c'è classe active

    if ($(this).hasClass("active") == false){

      // aggiungo classe active al bullet corrispondente

      $(this).addClass("active");

      // se presente classe first  aggiungo classe active all'immagine con classe first
      if( $(this).hasClass("first")){

        $(".images img.first").addClass("active");

      } else if ($(this).hasClass("last")){

        // se c'è classe last la aggiungo ad immagine con classe last

        $(".images img.last").addClass("active");

      } else if ($(this).prev().hasClass("first")){

        // se presente classe first all'elemento precendente

        $(".images img.first").next().addClass("active");

      } else{

        $(".images img.last").prev().addClass("active");
      }

    }

  });

});





// funzione che data la direzione (right/left) e classe (.next/.prev) crea lo scorrimento

function slider (direction) {


    if (direction == "right" ){

      var imgSlider = $(".images img.active");

      var bulletSlider = $(".nav i.active");


      var firstImg = $(".images img.first");

      var firstBullet = $(".nav i.first");

      // rimuovo classe active al click

      imgSlider.removeClass("active");

      bulletSlider.removeClass("active");

      // se non è presente classe last aggiungi active al successivo

      if(imgSlider.hasClass("last") == false && bulletSlider.hasClass("last") == false){

        imgSlider.next().addClass("active");

        bulletSlider.next().addClass("active");

      } else{

        // altrimenti aggiungi active all'elemento con classe first

        firstImg.addClass("active");

        firstBullet.addClass("active");

      }





    } else if ( direction == "left"){


      var imgSlider = $(".images img.active");

      var bulletSlider = $(".nav i.active");

      var lastImg = $(".images img.last");

      var lastBullet = $(".nav i.last");

      // al click rimuovo classe active

      imgSlider.removeClass("active");

      bulletSlider.removeClass("active");

      // se non è presente classe first aggiungo active all'elemento precedente

      if(imgSlider.hasClass("first") == false && bulletSlider.hasClass("first") == false ){


        imgSlider.prev().addClass("active");

        bulletSlider.prev().addClass("active");

      } else{

        // altrimenti aggiungo active all'elemento che ha classe last

        lastImg.addClass("active");

        lastBullet.addClass("active");

      }

    }


}
// funzione
