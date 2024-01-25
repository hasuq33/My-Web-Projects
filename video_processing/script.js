document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const scanSpeed = 4; // Declare scanSpeed once

    // Set up the video stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.log(error);
        });


    function drawBackFrame() {
        let scanPosition = 500;

        function drawFrame1() {
            canvas.width = 600;
            canvas.height = 500;

            // Draw the video frame
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Draw the scanner effect
            ctx.fillStyle = 'rgba(83,179,50, 0.6)';
            ctx.fillRect(0, scanPosition, canvas.width, 20);

            // Update the scan position
            scanPosition -= scanSpeed;

            if (scanPosition <= 0) { // Stop when scanPosition reaches 0
                drawScannerEffect(); // Stop animation
            } else {
                requestAnimationFrame(drawFrame1);
            }
        }

        drawFrame1();
    }

    function drawScannerEffect() {
        let scanPosition = 0;

        function drawFrame() {
            canvas.width = 600;
            canvas.height = 500;

            // Draw the video frame
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Draw the scanner effect
            ctx.fillStyle = 'rgba(83,179,50, 0.6)';
            ctx.fillRect(0, scanPosition, canvas.width, 20);

            // Update the scan position
            scanPosition += scanSpeed;

            if (scanPosition >= canvas.height) { // Stop when scanPosition reaches canvas height
                drawBackFrame();
            } else {
                requestAnimationFrame(drawFrame);
            }
        }

        drawFrame();
    }

    // Wait for the video to start playing before drawing the scanner effect
    video.addEventListener('play', () => {
        drawBackFrame();
    });
});