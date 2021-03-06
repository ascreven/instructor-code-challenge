
$(document).ready(function(){
  $(".submit").on("click", function(event) {
    event.preventDefault();
    // what was searched
    searchInput = $('#movie-search').val();
    // call api for search results
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
      // run through function to append search results
      searchResults(response);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  }
  function searchResults(movies) {
  for(var i = 0; i < movies.Search.length; i++) {
    // append result title
      $('ul').append('<li>' + movies.Search[i].Title + '</li>');
    }
}
