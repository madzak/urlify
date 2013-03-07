# Urlify
## Overview
A library for JavaScript to provide common URL transformation functions for website development

## Usage

### Slugify
Converts a url into a slugged url (usually for SEO puposes). Can specify make words or max length as options for the slugged output.
    
#### General
    <a class="test-link" href="/test/link/relative/link with spaces">My Link</a>
    
    var slugged = $("a.test-link").slugify()
    console.log(slugged.attr("href"))

    /test/link/relative/link-with-spaces
    
#### Max Words

    <a class="test-link" href="/test/link/relative/link with spaces">My Link</a>
    
    var slugged = $("a.test-link").slugify({'max_words':2})
    console.log(slugged.attr("href"))

    /test/link/relative/link-with
