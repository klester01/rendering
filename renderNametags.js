
function renderNametags(nametags) {
    var outArray = [];//placeholder for name tags.
    for (var i = 0; i < nametags.length; i++) {
        var newTag = `
        <div class="card text-black bg-primary mb-3" style="max-width: 18rem;">
           <div class="card-header">Hello, my name is:
                <div class="text-center mt-5">
                
                        <p> <h3> ${nametags[i]} </h3></p> 
                    
                </div>
            </div>
        </div>
`
        outArray.push(newTag);//Pushing newTag values into the OutArray 
    }




    return outArray.join("");



}

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