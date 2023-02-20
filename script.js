let eye_ref = document.querySelectorAll(".eye");

//implementing mousemove and touchmove

let events = ["mousemove", "touchmove"];

//check for touch screen

function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}

//same function for both
events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
            eye_ref.forEach((eye) => {
                let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;  
                let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
                //console.log(eyeX, eyeY);
                //return cursor position
                var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
                var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

                //subtracting the x and y pos of mouse and the x and y pos of cursor
                let radian = Math.atan2(y - eyeY, x - eyeX);
                //convert radians to degrees
                let rotationDegrees = radian * (180 / Math.PI) * -1 +180;
                //rotate the eye
                eye.style.transform = `rotate(${rotationDegrees}deg)`;
            });
    });
});