
/* Main Nav Toggle for Small Screens
------------------------------------------------------- */
$('a.menu').click(
    function() {

    $('nav[role="navigation"]').toggle();

    if ($('a.menu').html() == '<i class="fa fa-bars"></i>') {
        $('a.menu').html('<i class="fa fa-times"></i>');

    } else {
        $('a.menu').html('<i class="fa fa-bars"></i>');

    }

    return false;
});
