(function ($) {
    $.fn.replaceClass = function (pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));

function startSearch(event) {
  if(event.key === 'Enter') {
    var searchFor = $('.search-box:text').val();
    $('.search-box:text').val('');
    $('i').replaceClass('fa-times', 'fa-search');
    $('.search-box').blur();

    $.ajax({});

    console.log('Key enterred: ' + event.key);
    console.log('enterred text = ' + searchFor);
  }
}

$('.search-box').focus(function() {
  $('i').replaceClass('fa-search', 'fa-times');
});

$('.search-box').blur(function() {
  $('i').replaceClass('fa-times', 'fa-search');
});

$('i.fa').click(function() {
  $('.search-box:text').val('');
});

$(document).ready(function() {
  console.log('Ziggy is ready!');
});
