// Function to handle faculty form submission
function updateFaculty() {
    // Get form inputs
    const facultyId = document.getElementById('faculty-id').value;
    const facultyName = document.getElementById('faculty-name').value;
    const facultyTitle = document.getElementById('faculty-title').value;

    // Validation: Ensure all fields are filled
    if (!facultyId || !facultyName || !facultyTitle) {
        alert('Please fill out all fields!');
        return;
    }

    // Add faculty data to the Total Faculty section
    addFaculty(facultyId, facultyName, facultyTitle);

    // Clear the form after submission
    document.getElementById('faculty-id').value = '';
    document.getElementById('faculty-name').value = '';
    document.getElementById('faculty-title').value = '';

    // Optionally show the Total Faculty section after update
    showTotalFaculty();

    alert('Faculty updated and added to Total Faculty!');
}

// Function to dynamically add faculty data to Total Faculty list
function addFaculty(id, name, title) {
    const facultyList = document.getElementById('faculty-list'); // Get the faculty list container
    const facultyItem = document.createElement('div'); // Create a new div for the faculty entry

    // Add the 'strip' style class
    facultyItem.classList.add('strip');

    // Populate the div with faculty details in a structured format
    facultyItem.innerHTML = `
        <p class="id"><strong>ID:</strong> ${id}</p>
        <p class="name"><strong>Name:</strong> ${name}</p>
        <p class="title"><strong>Title:</strong> ${title}</p>
    `;

    // Append the new faculty entry to the faculty list
    facultyList.appendChild(facultyItem);
}