var getArtists = new Request('js/data_artists.json', {
  method: 'GET'
});


var artists = fetch(getArtists).then(function(response) {
  return response.json();
});

document.querySelector('.load-info')
  .addEventListener('click', function() {
    document.querySelector('.load-info').disabled = true;
    artists.then(function(data) {
      var output = "";
      for(var i=0; i<data.artists.length; i++){
        output += '<li>' + data.artists[i].name + '</li>'
        document.querySelector('.info-name').innerHTML = output;
      }
      
      console.log(data);
    });
  });
