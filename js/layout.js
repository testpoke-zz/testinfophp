
//$('.carousel').carousel();

var 
    menuLeft        = document.getElementById( 'cbp-spmenu-s1' ),
    showLeftPush    = document.getElementById( 'showLeftPush' ),
    body            = document.body;

//$(menuLeft).toggleClass('cbp-spmenu-open');


$("#showLeftPush").click(function(event){
    event.preventDefault();

    $(this).toggleClass('active');

    $("#container").toggleClass('cbp-spmenu-push-toright');
    
    $(menuLeft).toggleClass('cbp-spmenu-open');
    
    
    
//    $(menuLeft).toggleClass('cbp-spmenu-open');
//    $(showLeftPush).toggleClass('disabled');
    
});