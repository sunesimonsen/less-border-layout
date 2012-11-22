$(function () {
    document.addEventListener("touchstart", function(){}, true);
    // Just some javascript to make the demo a little interactive
    $('.item').click(function () {
        $('.content').addClass('showMailView');
    });
    $('.back-to-inbox').click(function () {
        $('.content').removeClass('showMailView');
    });
});