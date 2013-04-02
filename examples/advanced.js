$(function () {
    document.addEventListener("touchstart", function(){ return false; }, true);

    function enableTransition() {
        var views = $('.mailView, .mailList');
        views.addClass('transitioning');
        setTimeout(function () {
            views.removeClass('transitioning');
        }, 500);
    }
    // Just some javascript to make the demo a little interactive
    $('.item').click(function () {
        enableTransition();
        $('.content').addClass('showMailView');
    });

    $('.back-to-inbox').click(function () {
        enableTransition();
        $('.content').removeClass('showMailView');
    });
});
