
function renderStudents(students) {
    var roll = [];
    for (var i = 0; i < students.length; i++) {
        var rollCall = `
     <div class="text-center mt-5" style="max-width: 12rem;">
        <div class="card bg-light ">
            <div>${students[i].name}</div>
            <div>${students[i].isPresent}</div>
        </div>
     </div>
 `
        roll.push(rollCall);
    }
    return roll.join("");
}



function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}