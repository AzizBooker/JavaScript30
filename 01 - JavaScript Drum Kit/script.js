

window.addEventListener('keydown',playSound)
function playSound(e){
    

        const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
       
        if(!audio) return; //Stop Function from running
        audio.currentTime=0
        audio.play()
        key.classList.add('playing')
    
}
function removeTranstion(e){
     if(e.propertyName!=='transform') return;
   console.log(e.propertyName)
   this.classList.remove('playing')

}
const keys=document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTranstion))

