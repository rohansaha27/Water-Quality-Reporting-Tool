document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = {
        issueType: document.getElementById('issueType').value,
        severity: document.getElementById('severity').value,
        description: document.getElementById('description').value,
        // Handling file uploads would typically be done on the server-side
    };

    console.log('Form Data:', formData);
    alert('Report submitted successfully!');
});
