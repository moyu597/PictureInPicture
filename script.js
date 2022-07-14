// set constants for all targeted elemnts
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promopt to select media stream, pass to video element,then play

async function selectMediastream(){
    try{
        const mediaStream =  await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=> {
            videoElement.play();
        }
    } catch (error){
        console.log('whoops,error here:', error);
    }
}

button.addEventListener('click', async ()=>{
    // disable the button 
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

});
// On Load
selectMediastream();