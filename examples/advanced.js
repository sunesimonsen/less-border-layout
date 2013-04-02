/*global document, $*/
$(function () {
    document.addEventListener("touchstart", function (e) {
        var $target = $(e.target);
        var $scrollable = $target.closest('.scrollable');

        var insideScrollable = $scrollable.length > 0;
        if (insideScrollable) {
            var scrollable = $scrollable[0];
            if (scrollable.scrollTop <= 0) {
                scrollable.scrollTop = 1;
            } else if (scrollable.scrollHeight <= scrollable.scrollTop + scrollable.offsetHeight) {
                scrollable.scrollTop = scrollable.scrollHeight - scrollable.offsetHeight - 1;
            }
        }
        return true;
    }, true);

    document.addEventListener("touchmove", function (e) {
        var $target = $(e.target);
        var $scrollable = $target.closest('.scrollable');

        var insideScrollable = $scrollable.length > 0;
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
