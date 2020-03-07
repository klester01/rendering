
function renderRectangle(rectangle) { //this is a placeholder for whatever is being passed to it.
    //in the example below, the function rectangle is being passed via the rectangleAbstraction below
    return `
        <div class="text-center mt-5">
        <div style="background-color:${rectangle.color}; width:${rectangle.width}px; height:${rectangle.height}px " ></div>
        </div>
    `
}

function rectangle() { //rectangle function
    //looking for HTML element with ID of content
    //and assigning it to a variable
    var content = document.getElementById('content');

    var rectangleAbstraction = { //defining shape of rectangle
        width: 100,  // properties of the rectangle with the value associated with it. 
        height: 200, // properties of the rectangle with the value associated with it.
        color: "#FF00FF"  // properties of the rectangle with the value associated with it.
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);//whatevers in the innerHTML to anything in the 
    //div where the #id is located. 

}