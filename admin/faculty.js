function updateFaculty() {
    // Get form inputs
    const facultyId = document.getElementById('faculty-id').value;
    const facultyName = document.getElementById('faculty-name').value;
    const facultyTitle = document.getElementById('faculty-title').value;
    const facultyPassword = document.getElementById('faculty-password').value;

    // Validation: Ensure all fields are filled
    if (!facultyId || !facultyName || !facultyTitle || !facultyPassword) {
        alert('Please fill out all fields!');
        return;
    }

    // Add faculty data to the Total Faculty section
    addFaculty(facultyId, facultyName, facultyTitle, facultyPassword);

    // Clear the form after submission
    document.getElementById('faculty-id').value = '';
    document.getElementById('faculty-name').value = '';
    document.getElementById('faculty-title').value = '';
    document.getElementById('faculty-password').value = '';

    // Optionally show the Total Faculty section after update
    showTotalFaculty();

    alert('Faculty updated and added to Total Faculty!');
}

function addFaculty(id, name, title, password) {
    const facultyList = document.getElementById('faculty-list'); // Get the faculty list container
    const facultyItem = document.createElement('div'); // Create a new div for the faculty entry

    // Add the 'strip' style class
    facultyItem.classList.add('strip');

    // Populate the div with faculty details in a structured format
    facultyItem.innerHTML = `
        <p class="id"><strong>ID:</strong> ${id}</p>
        <p class="name"><strong>Name:</strong> ${name}</p>
        <p class="title"><strong>Title:</strong> ${title}</p>
        <p class="password"><strong>Password:</strong> ${password}</p>
    `;

    // Append the new faculty entry to the faculty list
    facultyList.appendChild(facultyItem);
}
