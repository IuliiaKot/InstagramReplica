$(function(){
  $('#pics').imagesLoaded({
    $('#pics').masonry({
      itemSelector: '.box',
      columnWidth: 200,
      isAnimated: !Modernizr.csstransitions,
      isFitWidth: true
    });
  })

});
