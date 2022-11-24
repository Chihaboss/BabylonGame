function buildPlayer() {

    const playerSize = 1.0;
     playerMesh = BABYLON.Mesh.CreateBox("playerMesh", 
    playerSize,
    scene);

    camera.lockedTarget = playerMesh;

    playerMesh.position.y = 1;

}