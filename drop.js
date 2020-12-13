$("#drg").draggable();

$("#drp").droppable({
    drop: function () {
        //alert("hello");
        $("#drg").fadeOut(1000);
    }
});

$("#drg").mouseenter(function () {
    $("#dv").effect( "bounce", 400 );
    $("#dv").effect( "shake", 400 );
    $("#dv").effect( "bounce", 400 );
});


