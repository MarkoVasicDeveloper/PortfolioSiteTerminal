import * as THREE from 'three';
import { importModel } from "./js/importModel";
import { setupStage } from "./js/setupStage";
import comp from '../static/scene.gltf';

const { scene, camera, renderer} = setupStage();

importModel(comp, scene);


function animation() {
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

animation();