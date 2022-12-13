export function moveCamera (e, camera) {

    const projectsDiv = document.getElementById('projects');
    if(e.deltaY > 0) {
        if(camera.position.z >= 2) return;
        if(camera.position.z < 1) {
            camera.position.z += 0.01;
        } else {
            camera.lookAt(-0.0955,0.088,-1)
            camera.position.z += 0.01;
            camera.position.x -= 0.01;
        }
    }

    if(e.deltaY < 0) {
        if(camera.position.z <= 0.3) {
            camera.position.set(-0.0955,0.088,0.3)
            window.scrollTo(0,0)
            return
        };
        if(camera.position.z < 1) {
            camera.position.z -= 0.01;
        } else {
            if(projectsDiv.getBoundingClientRect().top < window.innerHeight) return;
            camera.lookAt(-0.0955,0.088,-1)
            camera.position.z -= 0.01;
            camera.position.x += 0.01;
        }
    }
}