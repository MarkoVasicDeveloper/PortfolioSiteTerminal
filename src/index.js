import * as THREE from 'three';
import { background } from './js/backround';
import { importModel } from "./js/importModel";
import { moveCamera } from './js/moveCamera';
import { setupStage } from "./js/setupStage";
import { drawCanvas } from './js/drawCanvas';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
import { input } from './js/input';

const { scene, camera, renderer} = setupStage();

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
// composer.addPass(new DotScreenPass({x:0, y: 0}, 1, 10.1))

let computer;
importModel(scene).then(res => {scene.add(res.scene); computer = res.scene})

background(scene);

window.addEventListener('wheel', (e) => moveCamera(e, camera));
window.addEventListener('keyup', (e) => {
    input(e.key, canvas);
})

const canvas = drawCanvas();

const ctx = canvas.getContext('2d');

export const canvasTexture = new THREE.CanvasTexture(canvas);
canvasTexture.minFilter = THREE.LinearFilter
canvasTexture.wrapS = THREE.ClampToEdgeWrapping;
canvasTexture.wrapT = THREE.ClampToEdgeWrapping;

function animation() {

    canvasTexture.needsUpdate = true;
    
    if(computer) {
        computer.traverse(mesh => {
            if(mesh.name === 'defaultMaterial006'){
                mesh.position.set(-0.155,0.19, -0.25)
            }
        })
    }
    renderer.render(scene, camera);
    // composer.render();
    requestAnimationFrame(animation);
}

animation();