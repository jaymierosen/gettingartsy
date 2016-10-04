
// color swatches
/*
      #cat          { fill:   #000; }
      #pupils       { fill:   #AD5C51; }
      #mouth       { fill:   #AD5C51; }
      #face         { fill:   #F4CBB2; }
      #nose       { fill:   #F00; }
      #shadow-legs  { fill:   #7DBBE6; }
      #eyes         { fill:   #FFF; }
      #puddle     { fill:   #9CDAF1; }
      #drop       { fill:   #9CDAF1; }
      #octo       { fill:   #C3E4D8; }
*/
  var _currentFill = "fill:#000";
    $("#sweater").click(function (event) { $(event.target).attr('style', _currentFill); })
    var $swatches = $("#swatches");
    $swatches.click(function (event) { 
      $swatch = $(event.target);
      loc = [parseInt($swatch.attr('x'), 10), parseInt($swatch.attr('y'), 10)]
      $("#selection", $swatches).attr('x', loc[0]);
      $("#selection", $swatches).attr('y', loc[1]);
      _currentFill = $swatch.attr('style'); ; 
    })