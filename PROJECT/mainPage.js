var url = "http://localhost:3000/post";


$(document).ready(function(){
    $.get('http://localhost:3000/get-favorite-sports', (data, status) => {
        data = JSON.parse(data)
        document.getElementById('favorites').innerHTML = data['favorite']
    })
    $.get('http://localhost:3000/get-search-history', (data, status) => {
        data = JSON.parse(data)
        document.getElementById('history').innerHTML = data['history']
    })

    //direct to another webistes for sports news
$("#espn").click(function(){    
    $("a").attr("href","https://www.espn.com/");
});

$("#yahooSports").click(function(){    
    $("a").attr("href","https://ca.sports.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAE3PiGMw2SdZNqU_FUglxCJH6aV8nCFpOb4z-1MxLbJqolg-OvZDDelon0pdNRmoY0-BKJT8dx6PBlJir9MiQzbIKYZrgsFRVJAr7uwdDqMh6tghfNF99ifvZQnt2ZmsojPXKs5HLurxCWQN1uaWtDrIa-qNg3wN0ZAACxirmacP");
});

$("#foxSports").click(function(){    
    $("a").attr("href","https://www.foxsports.com/");
});

//list of available sports
 $("#soccer").click(function(){
    var selectedSport= document.getElementById("soccer").text;
});
$("#cricket").click(function(){
    var selectedSport= document.getElementById("cricket").text;
    alert(selectedSport);
});
$("#basketball").click(function(){
    var selectedSport= document.getElementById("basketball").text;
    alert(selectedSport);
});
$("#fieldHockey").click(function(){
    var selectedSport= document.getElementById("fieldHockey").text;
    alert(selectedSport);
});
$("#tennis").click(function(){
    var selectedSport= document.getElementById("tennis").text;
    alert(selectedSport);
});
$("#vollyball").click(function(){
    var selectedSport= document.getElementById("vollyball").text;
    alert(selectedSport);
});
$("#tableTennis").click(function(){
    var selectedSport= document.getElementById("tableTennis").text;
    alert(selectedSport);
});
$("#baseball").click(function(){
    var selectedSport= document.getElementById("baseball").text;
    alert(selectedSport);
});
$("#rugby").click(function(){
    var selectedSport= document.getElementById("rugby").text;
    alert(selectedSport);
});
$("#golf").click(function(){
    var selectedSport= document.getElementById("golf").text;
    window.open('http://google.com/search?q='+selectedSport);
    alert(selectedSport);
});

var smt="hello";

$("#alaki").click(function(){
    window.open('http://google.com/search?q='+smt);
});



/*
$("#cricket").click(function(){
     selectedSport=$("#cricket").text();
});

$("#basketball").click(function(){
    selectedSport=$("#basketball").text();
});
var selectedSport= document.createElement("id");
$(".list").click(function(){
    var sportName= document.getElementsByTag(a).
});*/


//search box and button
document.getElementById("searchBtn").onclick = function(){
    var sport = document.getElementById('searchBox').value;
 };
 $("#aSearchBtn").click(function(){    
    $("a").attr("href","https://www.foxsports.com/");//!!!!!!!!
});


});

function favoriteSport(){


}


/*function searchBox(){

    $("#searchBtn").click(function(){
       var sport = document.getElementById('searchBox').value;
        alert(sport);
    });
}*/



