(function ($) {
    $.fn.replaceClass = function (pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));

function startSearch(event) {
  if(event.key === 'Enter') {
    var searchFor = $('.search-input:text').val();
    $('.search-input:text').val('');
    $('i').replaceClass('fa-times', 'fa-search');
    $('.search-input').blur();

    // $.ajax({});

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
