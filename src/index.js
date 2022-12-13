import * as THREE from 'three';
import { background } from './js/backround';
import { importModel } from "./js/importModel";
import { moveCamera } from './js/moveCamera';
import { setupStage } from "./js/setupStage";
import { drawCanvas } from './js/drawCanvas';
import { input } from './js/input';
import { onResize } from './js/onResize';

const nav = document.querySelector('nav');
const projectsDiv = document.getElementById('projects');
const canvas = drawCanvas();
const ctx = canvas.getContext('2d');

const { scene, camera, renderer} = setupStage();

let computer;
importModel(scene).then(res => {scene.add(res.scene); computer = res.scene})

background(scene);

window.addEventListener('wheel', (e) => moveCamera(e, camera));
window.addEventListener('keyup', (e) => {
    input(e.key, canvas, ctx);
})
window.addEventListener('scroll', () => {
    if(projectsDiv.getBoundingClientRect().top < 1){
        nav.classList.replace('nav-hidden', 'nav');
        return
    }
    nav.classList.replace('nav', 'nav-hidden');
})

window.addEventListener('resize', () => onResize(camera, renderer, canvas))


export const canvasTexture = new THREE.CanvasTexture(canvas);
canvasTexture.minFilter = THREE.LinearFilter
canvasTexture.wrapS = THREE.ClampToEdgeWrapping;
canvasTexture.wrapT = THREE.ClampToEdgeWrapping;

function animation() {
    
    if(computer) {
        computer.traverse(mesh => {
            if(mesh.name === 'defaultMaterial006'){
                mesh.position.set(-0.155,0.19, -0.25)
            }
        })
        canvasTexture.needsUpdate = true;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

animation();