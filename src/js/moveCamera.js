export function moveCamera (e, camera, touchStart) {

    let touch;
        
    if(touchStart) {
        if(e.changedTouches[0].clientY > touchStart) touch = -1;
        if(e.changedTouches[0].clientY < touchStart) touch = 1;
    }

    const projectsDiv = document.getElementById('projects');
    if(e.deltaY > 0 || touch > 0) {
        if(camera.position.z >= 2) return;
        if(camera.position.z < 1) {
            camera.position.z += touch > 0 ? 0.05 : 0.01;
        } else {
            camera.lookAt(-0.0955,0.088,-1)
            camera.position.z += touch > 0 ? 0.05 : 0.01;
            camera.position.x -= touch > 0 ? 0.05 : 0.01;
        }
    }

    if(e.deltaY < 0 || touch < 0) {
        if(window.innerHeight > window.innerWidth) {
            if(camera.position.z <= 0.65) {
                camera.position.set(-0.1355,0.108,0.65);
                return;
            }
        }

        if(camera.position.z <= 0.3) {
            camera.position.set(-0.0955,0.088,0.3)
            window.scrollTo(0,0)
            return
        };
        if(camera.position.z < 1) {
            camera.position.z -= touch < 0 ? 0.05 : 0.01;
            if(window.innerHeight > window.innerWidth) camera.rotation.z = Math.PI / 2;
        } else {
            if(projectsDiv.getBoundingClientRect().top < window.innerHeight) return;
            camera.lookAt(-0.0955,0.088,-1)
            camera.position.z -= touch < 0 ? 0.05 : 0.01;
            camera.position.x += touch < 0 ? 0.05 : 0.01;
        }
    }
}