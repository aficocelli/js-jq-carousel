// jquery ready

$ ( function(){

  // evento al click dx
  $(".next").click(
    function(){

      // dichiarazione variabili
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

    }
  );

  // evento al click sx

  $(".prev").click(
    function(){

      // dichiarazione variabili

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
  );

});

// funzione


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
