function updateStudent() {
    // Get form inputs
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    const studentClass = document.getElementById('student-class').value;
    const studentPassword = document.getElementById('student-password').value;

    // Validation: Ensure all fields are filled
    if (!studentId || !studentName || !studentClass || !studentPassword) {
        alert('Please fill out all fields!');
        return;
    }

    // Add student data to the Total Student section
    addStudent(studentId, studentName, studentClass, studentPassword);

    // Clear the form after submission
    document.getElementById('student-id').value = '';
    document.getElementById('student-name').value = '';
    document.getElementById('student-class').value = '';
    document.getElementById('student-password').value = '';

    // Optionally show the Total Student section after update
    showTotalStudent();

    alert('Student updated and added to Total Student!');
}

function addStudent(id, name, className, password) {
    const studentList = document.getElementById('student-list'); // Get the student list container
    const studentItem = document.createElement('div'); // Create a new div for the student entry

    // Add the 'strip' style class
    studentItem.classList.add('strip');

    // Populate the div with student details in a structured format
    studentItem.innerHTML = `
        <p class="id"><strong>ID:</strong> ${id}</p>
        <p class="name"><strong>Name:</strong> ${name}</p>
        <p class="class"><strong>Class:</strong> ${className}</p>
        <p class="password"><strong>Password:</strong> ${password}</p>
    `;

    // Append the new student entry to the student list
    studentList.appendChild(studentItem);
}
