var Urlify = Urlify || {};

!function() {
  this.slugify = function(string, maxWords) {
    var slug = string.toLowerCase().replace(/[^\w\s]/g, ''),
        words = slug.split(/\s+/).slice(0, maxWords || Number.MAX_VALUE);

    return words.join('-');
  };
}.apply(Urlify);

!function($) {
  $.fn.slugify = function(options) {
    var defaults = {
        'max_words': null
      },
      options = $.extend(defaults, options);

    return this.each(function() {
      var $this = $(this),
          link = $this.attr("href");

      if (link) {
        var parts = $.map(link.split('/'), function(part) {
          return Urlify.slugify(part, options.max_words) || null;
        });

        $this.attr("href", "/"+parts.join("/"));
      }
    });
  };
}(jQuery);
