(function ($) {
    $.fn.replaceClass = function (pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));

function composePageName(titleStr) {
  return titleStr.replace(/ /g, '_');
}

function displaySearchResults(items) {
  var baseURL = 'https://en.wikipedia.org/wiki/';

  if(items.length > 0) {
    for(var i = 0; i < items.length; i++) {
      var resultHTML = '<div class="item">' +
      '<a class="title" href="' + baseURL + composePageName(items[i].title) +
      '" target="_blank">' + items[i].title + '</a><div class="description"><p>' +
      items[i].snippet + '</p></div></div>';
      $('div.wrap').append(resultHTML);
    }
  } else {
    $('div.wrap').append('<h2>Sorry, something went wrong. Check your connection.</h2>');
  }
}

function startSearch(event) {
  if(event.key === 'Enter') {
    var searchFor = $('.search-input:text').val();
    $('.search-input:text').val('');
    $('i').replaceClass('fa-times', 'fa-search');
    $('.search-input').blur();
    $('div.wrap').empty();

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
