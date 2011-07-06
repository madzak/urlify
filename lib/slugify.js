var Urlify = {};

(function() {
	this.slugify = function(string, maxWords, maxLength) {
		var slug = string.toLowerCase().replace(/[^\w\s]/g, ''),
			words = slug.split(/\s+/).slice(0, maxWords || 7),
			exceedsCharacterLimit = slug.length > (maxLength || Number.MAX_VALUE);

		return (exceedsCharacterLimit ? words.slice(0, -1) : words).join('-');
	};
}).apply(Urlify);

(function($) {
	$.fn.slugify = function(options) {
		var defaults = {
				'max_words': null,
				'max_length': null
			},
			options = $.extend(defaults, options);

		return this.each(function() {
			var $this = $(this);
				link = $this.attr("href");

			if(link) {
				var parts = link.split("/");

				parts = $.map(parts, function(part) {
					return Urlify.slugify(part, options.max_words, options.max_length) || null;
				});

				$this.attr("href", "/"+parts.join("/"));
			}
		});
	};
})(jQuery);
