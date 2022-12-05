export function moveCamera (e, camera, computer) {
    if(e.deltaY < 0) {
        if(camera.position.z >= 2) return;
        if(camera.position.z < 1) {
            camera.position.z += 0.01;
        } else {
            camera.lookAt(-0.0955,0.088,-1)
            camera.position.z += 0.01;
            camera.position.x -= 0.01;
            if(computer) {
                computer.scale.x += 0.005
                computer.scale.y += 0.005
                computer.scale.z += 0.005
            }
        }
    }

    if(e.deltaY > 0) {
        if(camera.position.z <= 0.29) return;
        if(camera.position.z < 1) {
            camera.position.z -= 0.01;
        } else {
            camera.lookAt(-0.0955,0.088,-1)
            camera.position.z -= 0.01;
            camera.position.x += 0.01;
            if(computer) {
                computer.scale.x -= 0.005
                computer.scale.y -= 0.005
                computer.scale.z -= 0.005
            }
        }
    }
}