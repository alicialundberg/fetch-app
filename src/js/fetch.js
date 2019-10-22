// Start post_course if add-button is clicked
document.getElementById('add').addEventListener("click", post_course);

// Fetch courses from RestAPI
function get_courses() {
    fetch('http://studenter.miun.se/~allu1801/dt173g/moment5/restapi/index.php')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2> Kurser inom Webbutveckling </h2>';
        data.forEach(function(course) {
            output += `
            <div id= "courses">
                <h3> ${course.code}</h3>
                <p> ${course.name}</p>
                <p>Progression: ${course.progression}</p>
                <a href="${course.course_syllabus}">Webblänk</a>
         </div>`
        });
        document.getElementById('output').innerHTML = output;
    })
}

get_courses(); // Call function

// Get data from input, convert to JSON and post to RestAPI
function post_course() { 
    let code = document.getElementById('code').value;
    let name = document.getElementById('name').value;
    let progression = document.getElementById('progression').value;
    let course_syllabus = document.getElementById('course_syllabus').value;

    let obj = {
        code: code,
        name: name,
        progression: progression,
        course_syllabus: course_syllabus
    };

    fetch('http://studenter.miun.se/~allu1801/dt173g/moment5/restapi/index.php', {
        method: 'POST',
        body: JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}