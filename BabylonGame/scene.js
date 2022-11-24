function buildLight (){

    const lightPosition = new BABYLON.Vector3(0, 5, 0)

    var light = new BABYLON.PointLight("light",

        lightPosition,
        scene
    );

    light.range = 100;
}


function buildGround () {
    
    const size_of_ground = 30;
    
    var ground = BABYLON.MeshBuilder.CreateGround("ground",
    {
        width: size_of_ground,
        height: size_of_ground,
        subdivisions: 1
    },
    scene
    );
}


buildScene = function () {
     scene = new BABYLON.Scene(engine);

    buildCamera();

    buildPlayer();

    buildLight();

    buildGround();

    buildControls();

     buildPlayerMovement();
    
    return scene;
}