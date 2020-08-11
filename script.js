$( function() {
  var changable = '';

  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];

    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });

    return hex.join( "" ).toUpperCase();
  }

  function refresh() {
    let red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );

    $(".selection__btn").click(function() {
      let clickedBtn = $(this),
        nextToClicked = clickedBtn.siblings(".selection__btn");
  
      clickedBtn.toggleClass("selection__btn_active");

      nextToClicked.click(function() {
        clickedBtn.removeClass("selection__btn_active");
        nextToClicked.addClass("selection__btn_active");
      });
      changable = clickedBtn.html();
    });

    $( "#result-text" ).css( changable, "#" + hex );
  }

  $( "#red, #green, #blue" ).slider({ 
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 0,
    slide: refresh,
    change: refresh
  });

  $( "#red" ).slider( "value", 0 );
  $( "#green" ).slider( "value", 0 );
  $( "#blue" ).slider( "value", 0 );

});