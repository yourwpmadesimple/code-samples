var data;
var request = new XMLHttpRequest();

request.open('GET', 'js/data.json');
output= "";
request.onreadystatechange = function() {
  if(request.status === 200 && request.readyState === 4) {
    data = JSON.parse(request.responseText);
    
    for(var i=0; i<data.artists.length;i++){
      output += 
      '<h2>' + data.artists[i].name + '</h2>' +
      '<h4>' + data.artists[i].reknown + '</h4>' +
      '<p>' + data.artists[i].bio + '</p>' +
      '<hr />';
    }
    console.log(data);
  }
  var update = document.querySelector('.artists');
  update.innerHTML = output;
}


request.send();