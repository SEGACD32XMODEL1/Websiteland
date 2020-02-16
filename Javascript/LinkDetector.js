jQuery(function($) {
    var re = /((http|https|ftp):\/\/[a-zа-я0-9\w?=&.\/-;#~%-]+(?![a-zа-я0-9\w\s?&.\/;#~%"=-]*>))/g;
    function makeHTML(textNode) {
        var source = textNode.data;
        return source.replace(re, function() {
            var url = arguments[0];
            var a = $('<a></a>').attr({'onclick' : 'window.open(\'' + url + '\'); return false;','href': '#', 'target': '_blank'}).text(url);
            return url.match(/^https?:\/\/$/) ? url : $('<div></div>').append(a).html();
        });
    };
    function eachText(node, callback) {
        $.each(node.childNodes, function() {
            if (this.nodeType != 8 && this.nodeName != 'A') {
                this.nodeType != 1 ? callback(this) : eachText(this, callback);
            }
        });
    };
    $.fn.autolink = function() {
        return this.each(function() {
            var queue = [];
            eachText(this, function(e) {
                var html = makeHTML(e);
                if (html != e.data) {
                    queue.push([e, makeHTML(e)]);
                }
            });
            $.each(queue, function(i, x) {
                $(x[0]).replaceWith(x[1]);
            });
        });
    };
});