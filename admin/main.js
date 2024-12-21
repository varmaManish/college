function showDashboard() {
    hideAllSections();
     // Placeholder for dashboard functionality
}

function showUpdateStudent() {
    hideAllSections();
    document.getElementById('update-student-section').style.display = 'block';
}

function showTotalStudent() {
    hideAllSections();
    document.getElementById('total-student-section').style.display = 'block';
}
// Function to show the Update Faculty section
function showUpdateFaculty() {
    hideAllSections();
    document.getElementById('update-faculty-section').style.display = 'block';
}
// Function to show the Total Faculty section
function showTotalFaculty() {
    hideAllSections();
    document.getElementById('total-faculty-section').style.display = 'block';
}

function hideAllSections() {
    document.getElementById('update-student-section').style.display = 'none';
    document.getElementById('update-faculty-section').style.display = 'none';
    document.getElementById('total-faculty-section').style.display = 'none';
    document.getElementById('total-student-section').style.display = 'none';
}

