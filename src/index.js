import * as THREE from 'three';
import { background } from './js/backround';
import { importModel } from "./js/importModel";
import { moveCamera } from './js/moveCamera';
import { setupStage } from "./js/setupStage";
import { drawCanvas } from './js/drawCanvas';
import { input } from './js/input';
import { onResize } from './js/onResize';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { launchFullScreen } from './js/launchFullScreen';

export const manager = new THREE.LoadingManager();
export const loader = new GLTFLoader(manager);
export const rgbeLoader = new RGBELoader(manager);

const nav = document.querySelector('nav');
const projectsDiv = document.getElementById('projects');
const loadinPage = document.getElementById('loadingPage');
const progressBar = document.getElementById('progressBar');
const progressLabel = document.getElementById('progressLabel');
const buttonReady = document.getElementById('ready');
const pr = document.getElementById('pr');
const canvas = drawCanvas();
const ctx = canvas.getContext('2d');

manager.onProgress = function(url, loaded, total) {
    progressBar.value = ((loaded / total) * 100).toFixed(0);
    pr.textContent = ((loaded / total) * 100).toFixed(0) + '%';
}

manager.onLoad = function() {
    progressLabel.textContent = 'READY!';
    buttonReady.classList.remove('hidden');
}

buttonReady.onclick = () => {
    loadinPage.style.display = 'none';
}

const { scene, camera, renderer} = setupStage();

let computer;
importModel(scene).then(res => {scene.add(res.scene); computer = res.scene})

background(scene);

window.addEventListener('wheel', (e) => moveCamera(e, camera));
window.addEventListener('keyup', (e) => input(e.key, canvas, ctx));
window.addEventListener('scroll', () => {
    if(projectsDiv.getBoundingClientRect().top < 1){
        nav.classList.replace('nav-hidden', 'nav');
        return
    }
    nav.classList.replace('nav', 'nav-hidden');
})
window.addEventListener('resize', () => onResize(camera, renderer, canvas));
window.addEventListener('DOMContentLoaded', () => {
    if(window.innerHeight > window.innerWidth) {
        launchFullScreen(document.documentElement);
        const myScreenOrientation = window.screen.orientation;
        myScreenOrientation.lock('landscape');
    };
})


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