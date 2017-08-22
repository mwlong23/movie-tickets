//business logic
var price = 12;

function Movie(movieTitle, showTimes, movieRating ){
  this.movieTitle = movieTitle;
  this.showTimes = showTimes;
  this.movieRating = movieRating;
}

function moviePricing(time, age){
  if(age <= 12 && time <=14 ){
    return price - 7;
  }else if(age >= 65 && time <=14 ){
    return price - 3;
  }else if(age <= 12 && time >= 14){
    return price - 3;
  }else if(age >= 65 && time >= 14){
    return price - 2;
  }else if(time <=14 ){
    return price - 6;
  }else{
    return price;
  }
}

// user interface logic
$(document).ready(function() {
  $("#movie-ticket-form").submit(function(event){
    event.preventDefault();

    var movieNameInput = $("#movie-name").val();
    var timeInput = $("#time").val();
    var ageInput = $("#age").val();
    var ticketPrice = moviePricing(timeInput, ageInput)

    var movieInquiry = new Movie(movieNameInput, timeInput, ageInput);
    console.log( movieInquiry, ticketPrice);
    $("#output").append('<p>'+ ticketPrice + '</p>');
  });

});
