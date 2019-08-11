$(function() {
  $('.load-info').on('click', function() {
    $(this).attr('disabled', true)
    $.ajax({
      method: 'GET',
      url: 'js/data_artists.json',
      dataType: 'json'
    }).done(function(data) {
      $.each(data.artists, function(key, val) {
        $('.info-artists')
          .append('<li>' + val.name + '</li>')
      }); //each 
    }); //ajax done
  }); // click event
}); // jQuery Ready