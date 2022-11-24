function buildPlayerMovement () {
    scene.registerBeforeRender(function () {

        if (!scene.isReady()) {
            return;
        }

        if (wPressed) {
            
            const movementAmount = new BABYLON.Vector3(0, 0, 0.1)

            playerMesh.locallyTranslate(movementAmount);

    
        }

        if (sPressed) {
           
            const backwards = new BABYLON.Vector3(0, 0, -0.1);

            playerMesh.locallyTranslate(backwards);
        }

        if (aPressed) {
            
            const left = new BABYLON.Vector3(-0.1, 0, 0);

            playerMesh.locallyTranslate(left);
        }

        if (dPressed) {
            const right = new BABYLON.Vector3(0.1, 0, 0);
            playerMesh.locallyTranslate(right);
        }

    });
}