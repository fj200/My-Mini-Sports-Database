var Num_sport = ["soccer","cricket","basketball","field-hockey","tennis","volleyball","table-tennis","baseball","rugby","golf"]
var url = "http://localhost:3000/post";



$(document).ready(function() {
    $.get('http://localhost:3000/get-search-history', (data, status) => {
        data = JSON.parse(data)
        document.getElementById('history').innerHTML = data['history']
    })

    const urlParams = new URLSearchParams(window.location.search);
    const sport = urlParams.get('sport').toLowerCase().replaceAll(' ', '-')

    $.get(`http://localhost:3000/sport-data?sport=${sport}`, (data, status) => {
        data = JSON.parse(data)
        document.getElementById('sportImage').src=`images/${data['sport_name']}.jpg`
        document.getElementById('description').innerHTML = data['description']
        document.getElementById('sportVideo').data = data['youtube_link']
    })
    //send favorite sport to server or remove it
    $.get('http://localhost:3000/get-favorite-sports', (data, status) => {
        data = JSON.parse(data)
        if (data['favorite'].includes(sport))
            addToFavorite()
        else
            removeFromFavorite()
    })

    //The searchbox and button in the left bottom corner
    document.getElementById("searchBtn").onclick = function(){
        var sport = document.getElementById('searchBox').value;
};
  //list of available sports
    $("#soccer").click(function(){
        var selectedSport= document.getElementById("soccer").text;
    });
    $("#cricket").click(function(){
        var selectedSport= document.getElementById("cricket").text;
    });
    $("#basketball").click(function(){
        var selectedSport= document.getElementById("basketball").text;
    });
    $("#fieldHockey").click(function(){
        var selectedSport= document.getElementById("fieldHockey").text;
    });
    $("#tennis").click(function(){
        var selectedSport= document.getElementById("tennis").text;
    });
    $("#vollyball").click(function(){
        var selectedSport= document.getElementById("vollyball").text;
    });
    $("#tableTennis").click(function(){
        var selectedSport= document.getElementById("tableTennis").text;
    });
    $("#baseball").click(function(){
        var selectedSport= document.getElementById("baseball").text;
    });
    $("#rugby").click(function(){
        var selectedSport= document.getElementById("rugby").text;
    });
    $("#golf").click(function(){
        var selectedSport= document.getElementById("golf").text;
    });
   
});


//favorite functions
function addToFavorite() {
    const urlParams = new URLSearchParams(window.location.search);
    const sport = urlParams.get('sport').toLowerCase()

    $.get(`http://localhost:3000/add-favorite-sport?sport=${sport}`)
    document.getElementById('addFavBtn').hidden = true
    document.getElementById('remFavBtn').hidden = false
}

function removeFromFavorite() {
    const urlParams = new URLSearchParams(window.location.search);
    const sport = urlParams.get('sport').toLowerCase()

    $.get(`http://localhost:3000/remove-favorite-sport?sport=${sport}`)
    document.getElementById('addFavBtn').hidden = false
    document.getElementById('remFavBtn').hidden = true
}
 
