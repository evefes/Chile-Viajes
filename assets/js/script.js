


const popoverTriggerList = document.querySelectorAll(
'[data-bs-toggle="popover"]'
);

const popoverList = [...popoverTriggerList].map(
(popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

/* Agregar toggle a cards*/
    $(".img-1").click(function () {
    $(".text-1").toggle("slow", function () {} );
    });
    
    $(".img-2").click(function (){
    $(".text-2").toggle(2500, "swing", function () {});
    });
    
    $(".img-3").click(function () {
    $(".text-3").toggle("slow", function () {} );
    });
    
    $(".img-4").click(function (){
    $(".text-4").toggle(2500, "swing", function () {});
    });
    