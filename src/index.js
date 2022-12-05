import * as THREE from 'three';
import { background } from './js/backround';
import { importModel } from "./js/importModel";
import { moveCamera } from './js/moveCamera';
import { setupStage } from "./js/setupStage";

const { scene, camera, renderer} = setupStage();

let computer;
importModel(scene).then(res => {scene.add(res.scene); computer = res.scene})

// const backPlane = background();
// backPlane.position.z = -1;
// backPlane.position.y = 1;
// scene.add(backPlane);

// const bottomPlane = background();
// // plane.position.z = -1;
// bottomPlane.rotation.x = Math.PI / 2;
// bottomPlane.position.y = -0.35;
// scene.add(bottomPlane);

background(scene);

window.addEventListener('wheel', (e) => moveCamera(e, camera, computer));

function animation() {
    // if(computer) console.log(computer)
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

animation();