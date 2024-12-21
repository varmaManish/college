function updateStudent() {
    // Get data from the Update Student form
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    const studentClass = document.getElementById('student-class').value;

    // Validation (optional, can be extended)
    if (!studentId || !studentName || !studentClass) {
        alert('Please fill out all fields!');
        return;
    }

    // Add the student data to the Total Student section
    addStudent(studentId, studentName, studentClass);

    // Clear the form
    document.getElementById('student-id').value = '';
    document.getElementById('student-name').value = '';
    document.getElementById('student-class').value = '';

    // Optionally show the Total Student section
    showTotalStudent();

    alert('Student updated and added to Total Student!');
}

function addStudent(id, name, className) {
    const studentList = document.getElementById('student-list');
    const studentItem = document.createElement('div');
    studentItem.classList.add('strip'); // Add the strip style
    studentItem.innerHTML = `
        <p class="id"><strong>ID:</strong> ${id}</p>
        <p class="name"><strong>Name:</strong> ${name}</p>
        <p class="class"><strong>Class:</strong> ${className}</p>
    `;
    studentList.appendChild(studentItem);
}
