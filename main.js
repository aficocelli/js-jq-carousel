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

      alert("ciao");

    }
  );





});
