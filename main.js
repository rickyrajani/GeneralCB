function showContent(id) {
    $('.sub-content').fadeOut('slow');
    $('.nav').fadeOut('slow');
    $('.board-info').fadeOut('slow');

    setTimeout(function(){
        $(id).fadeIn('slow');
    }, 500);
}

function hideContent() {
    $('.sub-content').fadeOut('slow');
    $('.nav').fadeIn('slow');
    $('.board-info').fadeIn('slow');

}
