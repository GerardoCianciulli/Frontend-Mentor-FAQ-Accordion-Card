$(document).ready(function(){
    var arrowSVG = '<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>'
    
    $(".question").append(arrowSVG);
    $(".question-group").click(function(e){
      var expandAnswer = !$(e.target).hasClass("selected")
      $(".selected").removeClass("selected")
      if (expandAnswer)
        $("#" + e.target.id).addClass("selected")
    });
  });