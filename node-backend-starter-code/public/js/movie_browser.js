
$(document).ready(function(){
  $(".submit").on("click", function(event) {
    event.preventDefault();
    searchInput = $('#movie-search').val();
    searchForMovie(searchInput);
    console.log(searchInput);
  });
});

function searchForMovie(keyword) {
    var url = 'http://www.omdbapi.com/?s='+keyword;
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done(function(response) {
      results = response;
      console.log(results);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  }
