import * as THREE from 'three';
import { background } from './js/backround';
import { importModel } from "./js/importModel";
import { moveCamera } from './js/moveCamera';
import { setupStage } from "./js/setupStage";
import { updateTexture } from './js/updateTexture';

const { scene, camera, renderer} = setupStage();

let computer;
importModel(scene).then(res => {scene.add(res.scene); computer = res.scene})

background(scene);

let string = '';

window.addEventListener('wheel', (e) => moveCamera(e, camera));
window.addEventListener('keyup', (e) => {
    
    if(e.key.length === 1 && string.length < 55) string = string + e.key;
    
    switch (e.key) {
        case 'Backspace':
            string = string.slice(0, -1);
            break;
        default:
            break;
    }
    
    ctx.fillStyle = '#111';
    ctx.fillRect(170, 905, canvas.width, 35);
    ctx.fillStyle = '#fec400';
    ctx.fillText(string + '|', 170, 930);
})

// canvasTexture.wrapS = canvasTexture.wrapT = THREE.RepeatWrapping
// canvasTexture.minFilter = THREE.LinearFilter
const canvas = updateTexture();

const ctx = canvas.getContext('2d');
var cursor = 'visible';

export const canvasTexture = new THREE.CanvasTexture(canvas);
canvasTexture.minFilter = THREE.LinearFilter
canvasTexture.wrapS = THREE.ClampToEdgeWrapping;
canvasTexture.wrapT = THREE.ClampToEdgeWrapping;

function animation() {

    canvasTexture.needsUpdate = true;
    // console.log(cursor)
    
    if(computer) {
        computer.traverse(mesh => {
            if(mesh.name === 'defaultMaterial006'){
                mesh.position.set(-0.155,0.19, -0.25)
            }
        })
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

animation();