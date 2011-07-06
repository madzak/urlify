function slugify(string, maxWords, maxLength) {
    var slug = string.toLowerCase().replace(/[^\w\s]/g, ''),
        words = slug.split(/\s+/).slice(0, maxWords || 7),
        exceedsCharacterLimit = slug.length > (maxLength || Number.MAX_VALUE);

    return (exceedsCharacterLimit ? words.slice(0, -1) : words).join('-');
}
