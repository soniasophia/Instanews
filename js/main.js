$(function() {
  $('#sections').on('change', function() {
    $('.loader-gif').show();
    $('.stories').empty();
    $('.website-header').addClass('small-header');
    $('.logo').addClass('small-logo');

    var section = this.value;
    var storyString = '';
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json';
    url += '?' + $.param({
      'api-key': '322b3247fdb14b38b38d51b8c82d9cad'
    }); 
  
    $.ajax({
      method: 'GET',
      url: url, 

    }).done(function(data) {
      var imagesTrue = data.results.filter(function(imagesFilter) {
        return imagesFilter.multimedia.length > 0;
      }).slice(0, 12)

      $.each(imagesTrue, function (index, value) {
        storyString += '<li class="story-cell">' + '<a href="' + value.url + '" target="_blank">' + '<div style="background-image: url(\'' + value.multimedia[4].url + '\')" class="image-container">' + '<p class="story-abstract">' + value.abstract + '</p>' + '</div>' + '</a>' + '</li>'
      });

      $('.stories').append(storyString);

    }).fail(function () {
      $('.stories').append('<p><span class="error-message">Sorry, something went wrong.</span></p>');

    }).always(function () {
      $('.loader-gif').hide();

    });

  });

});