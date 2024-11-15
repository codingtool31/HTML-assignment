let localStream;
async function getUserMedia() {


    if (navigator.getUserMedia) {
        const videoRef = document.querySelector(".cam");
        const res = await navigator.getUserMedia(
            {
                audio: true,
                video: { width: 1280, height: 720 },
            },
            (stream) => {
                window.localStream = stream;
                videoRef.srcObject = stream;
            },
            (err) => {
                console.error(`The following error occurred: ${err.name}`);
            }
        );
    } else {
        alert("Browser location not supported.");
    }
}
getUserMedia();
function stopVideo() {
    const videoRef = document.querySelector(".cam");
    videoRef.srcObject.getTracks().forEach((track) => track.stop());
    videoRef.style.display = "none";
}

function startVideo() {
    const videoRef = document.querySelector(".cam");
    videoRef.play();
}