$("#drg").draggable();

$( "#drp" ).droppable({
  drop: function() {
    //alert("hello");
    $("#drg").fadeOut(1000);
  }
});