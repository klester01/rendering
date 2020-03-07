
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards

    var rest = [];
    for (var i = 0; i < restaurants.length; i++) {

        var reviews = `
        
        <div class="text-left mt-3" style="max-width: 12rem;">
            <div class="card bg-light ">
                <div style="color:black;font-weight:bold;font-size:30px;"/>${restaurants[i].name}</div>
                <div style="color:gray;"/>${restaurants[i].type}</div>
                <div style="color:green;"/>${restaurants[i].priceRating}</div>
            </div>
        </div>
`
        rest.push(reviews);

    }

    return rest.join("");
}


function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}