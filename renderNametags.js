
function renderNametags(nametags) {
    var outArray = [];
    for (var i = 0; i < nametags.length; i++) {
        var newTag = `
        
            <div class="text-center mt-5">
                <div class="background-color">
                <p> ${nametags} </p>
                </div> 
            </div>
        
        `
           
    }
    
        outArray.push(nametags).join("")

    `
}
    return `
        ${nametags}'

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}