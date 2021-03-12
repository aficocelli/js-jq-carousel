// jquery ready

$ ( function(){

  // evento al click dx
  $(".next").click(
    function(){

      var imgSlider = $(".images img.active");
      imgSlider.removeClass("active");

      imgSlider.next().addClass("active");
      

    }
  );

  $(".prev").click(
    function(){

      alert("ciao");

    }
  );





});
