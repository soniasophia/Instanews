// NYTimes API Key: 322b3247fdb14b38b38d51b8c82d9cad
// http://api.nytimes.com/svc/topstories/v2/{section}.{response-format}?api-key={322b3247fdb14b38b38d51b8c82d9cad}


$(function () {
  $('#sections').on('change', function () {
    $('.stories').empty();

    var section = this.value;
    var url = 'http://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=322b3247fdb14b38b38d51b8c82d9cad';


    $.ajax({
      method: 'GET',
      url: url,

  }).done(function (data) {
    console.log(data);

    $.each(data.results, function(index, value) {
      if (value.multimedia.length !==0) {
        $('.stories').append('<div class="story-cell"><img src="' + value.multimedia[2] + '">' + '<p><a href="' + value.url + value.abstract '">');
      
      }

  }).fail(function (){
    $('.stories').append('<p>Sorry, something went wrong.</p>')


  })


  });


});