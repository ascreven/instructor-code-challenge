
$(document).ready(function(){
  $(".submit").on("click", function(event) {
    event.preventDefault();
    searchInput = $('#movie-search').val();
    searchForMovie(searchInput);
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
      searchResults(results);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  }
  function searchResults(movies) {
    var listItems = movies.Search;
  console.log(listItems);
  for(var i = 0; i < listItems.length; i++) {
      console.log(listItems[i]);
      $('ul').append('<li>' + listItems[i].Title + '</li>');
    }
}
