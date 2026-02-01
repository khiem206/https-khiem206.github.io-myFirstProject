// Hàm hiển thị thông điệp khi click button
function showMessage() {
    const messageDiv = document.getElementById('message');
    const button = document.getElementById('clickBtn');
    
    // Toggle hiển thị/ẩn message
    if (messageDiv.style.display === 'none') {
        messageDiv.style.display = 'block';
        button.textContent = 'Ẩn sao băng';
    } else {
        messageDiv.style.display = 'none';
        button.textContent = 'Xem sao băng';
    }
}
