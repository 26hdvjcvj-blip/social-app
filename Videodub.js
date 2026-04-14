const videoInput = document.getElementById('videoInput');
const previewSection = document.getElementById('preview-section');
const mainVideo = document.getElementById('mainVideo');
const dubBtn = document.getElementById('dubBtn');
const statusSection = document.getElementById('status');
const downloadSection = document.getElementById('download-section');
const downloadBtn = document.getElementById('downloadBtn');

videoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        mainVideo.src = url;
        previewSection.classList.remove('hidden');
        document.getElementById('upload-section').classList.add('hidden');
    }
});

dubBtn.addEventListener('click', async () => {
    // Show loading UI
    dubBtn.disabled = true;
    statusSection.classList.remove('hidden');
    
    const file = videoInput.files[0];
    const formData = new FormData();
    formData.append('video', file);
    formData.append('target_lang', document.getElementById('targetLang').value);

    // REAL TIME DUBBING LOGIC (Using ElevenLabs as example)
    try {
        /* 
        In a real app, you would send this to your backend (Node.js/Python)
        The backend would call: https://api.elevenlabs.io/v1/dubbing
        */
        
        console.log("Starting dubbing for:", file.name);
        
        // Simulating 5 seconds of "Real-time" processing
        await new Promise(resolve => setTimeout(resolve, 5000));

        // On Success:
        statusSection.classList.add('hidden');
        downloadSection.classList.remove('hidden');
        
        // In reality, this URL would come from your API
        alert("Dubbing Complete! For 10-minute videos, the high-quality processing is finished.");
        
    } catch (error) {
        alert("Error during dubbing: " + error.message);
        statusSection.classList.add('hidden');
    }
});
