function buildCamera() {
    
    camera = new BABYLON.FollowCamera("camera",
    
    new BABYLON.Vector3(0, 1, 1) ,
    
    scene
    
    );

    const amountOfRotation = 180;

    camera.rotationOffset = amountOfRotation;
}