function buildControls() {
    const W_KEY = 87;
    const A_KEY = 65;
    const S_KEY = 83;
    const D_KEY = 68;

    wPressed = false;
    sPressed = false;
    aPressed = false;
    dPressed = false;

    document.addEventListener('keydown',
    (event) => {
        
        if (event.keyCode === W_KEY) {

            wPressed = true;

        }

        if (event.keyCode.code === A_KEY) {

            aPressed = true;
        }

        if (event.keyCode === S_KEY) {

            sPressed = true;
        }

        if (event.keyCode === D_KEY) {

            dPressed = true;

    }
    
});

document.addEventListener('keyup',
    (event) => {
        
        if (event.keyCode === W_KEY) {

            wPressed = false;

        }

        if (event.keyCode === A_KEY) {

            aPressed = false;
        }

        if (event.keyCode === S_KEY) {

            sPressed = false;
        }

        if (event.keyCode === D_KEY) {

            dPressed = false;

    }
    
    
});
    
}