import * as THREE from 'three';
import { importModel, loadModel } from "./js/importModel";
import { moveCamera } from './js/moveCamera';
import { setupStage } from "./js/setupStage";

const { scene, camera, renderer} = setupStage();

let computer;
importModel(scene).then(res => {scene.add(res.scene); computer = res.scene})

window.addEventListener('wheel', (e) => moveCamera(e, camera, computer));

function animation() {
    // if(computer) console.log(computer)
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

animation();