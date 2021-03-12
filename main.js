// jquery ready

$ ( function(){

  // evento al click dx
  $(".next").click(
    function(){

      var imgSlider = $(".images img.active");

      var firstImg = $(".images img.first");

      imgSlider.removeClass("active");

      if(imgSlider.hasClass("last") == false){


        imgSlider.next().addClass("active");

      } else{

        firstImg.addClass("active");

      }

    }
  );

  $(".prev").click(
    function(){

      var imgSlider = $(".images img.active");

      var lastImg = $(".images img.last");

      imgSlider.removeClass("active");

      if(imgSlider.hasClass("first") == false){


        imgSlider.prev().addClass("active");

      } else{

        lastImg.addClass("active");

      }

    }
  );





});
