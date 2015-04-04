
/* Main Nav Toggle for Small Screens
------------------------------------------------------- */
$('a.menu').click(
    function() {

    $('nav.navigation').toggle();

    if ($('a.menu').html() == 'Menu') {
        $('a.menu').html('Close');

    } else {
        $('a.menu').html('Menu');
        $('nav.navigation').removeAttr('style');
    }
    
});