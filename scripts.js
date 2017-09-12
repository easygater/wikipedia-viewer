(function ($) {
    $.fn.replaceClass = function (pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));

function displaySearchResults(items) {
  // console.log('Ziggy made ajax with item count ' + items.length);
  // console.log('Title -> ' + items[0].title);
  // console.log('Description -> ' + items[0].snippet);
  if(items.length > 0) {
    for(item in items) {
      // TODO: write the code to display each item on the site
    }
  } else {}
}

function startSearch(event) {
  if(event.key === 'Enter') {
    var searchFor = $('.search-input:text').val();
    $('.search-input:text').val('');
    $('i').replaceClass('fa-times', 'fa-search');
    $('.search-input').blur();

    /*
      url: 'https://en.wikipedia.org/w/api.php'   -> works
      url: 'https://meta.wikimedi.org/w/api.php'  -> fails
    */
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      data: {
        action: 'query',
        list: 'search|allpages',
        titles: 'Main Page',
        srsearch: searchFor,
        srlimit: 100,
        format: 'json'
      },
      dataType: 'jsonp',
      success: function(data) {
        displaySearchResults(data.query.search);
      }
    });

    console.log('Key enterred: ' + event.key);
    console.log('enterred text = ' + searchFor);
  }
}

$('.search-input').focus(function() {
  $('i').replaceClass('fa-search', 'fa-times');
});

$('.search-input').blur(function() {
  $('i').replaceClass('fa-times', 'fa-search');
});

$('i.fa').click(function() {
  $('.search-input:text').val('');
});

$(document).ready(function() {
  console.log('Ziggy is ready!');
});
