/*global document, $*/
$(function () {
    document.addEventListener("touchstart", function (e) {
        return true;
    }, true);

    document.addEventListener("touchmove", function (e) {
        var $target = $(e.target);
        var insideScrollable = $target.closest('.scrollable').length > 0;
        if (insideScrollable) {
            e.stopPropagation();
        } else {
            e.preventDefault();
        }
        return insideScrollable;

    }, true);

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
