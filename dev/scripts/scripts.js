$(function() {
  
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
        $("path").click(function (event) { $(event.target).attr('style', _currentFill); })
        var $swatches = $("#swatches");
        $swatches.click(function (event) { 
          $swatch = $(event.target);
          loc = [parseInt($swatch.attr('x'), 10), parseInt($swatch.attr('y'), 10)]
          $("#selection", $swatches).attr('x', loc[0]);
          $("#selection", $swatches).attr('y', loc[1]);
          _currentFill = $swatch.attr('style'); ; 
        })


        // SLIDER GALLERY //

      // when the next link is clicked
      // show the card with the class of .card__shown
      $(".next__button").on("click", function(e){
        // current card has a class of .card__shown
        var currentActiveCard = $(".card__shown");
        // moves to the next element
        var nextActiveCard = currentActiveCard.next();
          // when the carousel ends, we want to go back to the first card
          if(nextActiveCard.length == 0) {
            nextActiveCard = $(" .carousel__card").first();
          }
        // then, remove class of .card__shown
        // and add class of .card__hidden
        // adding z-index to make sure the the card will be the last in the stack of cards
        currentActiveCard.removeClass("card__shown").addClass("card__hidden").css("z-index", -10);
        // the next active card gets a class of .card__shown and remove the class of .card__hidden
        // z-index we want to be at top of stack of images
        nextActiveCard.addClass("card__shown").removeClass("card__hidden").css("z-index", 20);
        //set all the cards to a z-index of 1
        // EXCEPT for the current active and next active cards
        $(".carousel__inner").not([currentActiveCard, nextActiveCard]).css("z-index", 1);

        // preventing the default action of an anchor
        e.preventDefault();
      }); // end of previous button function

      $(".previous__button").on("click", function(e) {
        var currentActiveCard = $(".card__shown");
        var nextActiveCard = currentActiveCard.prev();
          if(nextActiveCard.length == 0) {
            nextActiveCard = nextActiveCard = $(" .carousel__card").last();
          }
        currentActiveCard.removeClass("card__shown").addClass("card__hidden").css("z-index", -10);
        nextActiveCard.addClass("card__shown").removeClass("card__hidden").css("z-index", 20);
        $(".carousel__inner").not([currentActiveCard, nextActiveCard]).css("z-index", 1);
        // preventing the default action of an anchor
        e.preventDefault();
      }); //end of next button function

}); //end of document ready
