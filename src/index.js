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

const { scene, camera, renderer} = setupStage();

buttonReady.onclick = () => {
    loadinPage.style.display = 'none';

    if(window.innerHeight > window.innerWidth) {
        launchFullScreen(document.documentElement);
        const myScreenOrientation = window.screen.orientation;
        myScreenOrientation.lock('landscape');

        camera.position.set(-0.1255,0.108,0.65);
        // camera.rotation.z = Math.PI / 2;
    };
}


let computer;
importModel(scene).then(res => {scene.add(res.scene); computer = res.scene})

background(scene);

window.addEventListener('resize', () => onResize())
window.addEventListener('wheel', (e) => moveCamera(e, camera));
window.addEventListener('keyup', (e) => input(e.key, canvas, ctx));
window.addEventListener('scroll', () => {
    if(projectsDiv.getBoundingClientRect().top < 1){
        nav.classList.replace('nav-hidden', 'nav');
        return
    }
    nav.classList.replace('nav', 'nav-hidden');
})

let touchStart;

window.addEventListener('touchstart', (e) => touchStart = e.changedTouches[0].clientY);
window.addEventListener('touchmove', (e) => moveCamera(e, camera, touchStart));

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