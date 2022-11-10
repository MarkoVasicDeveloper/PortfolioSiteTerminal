import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function setupStage() {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({antialias: true});

    const camera = new THREE.PerspectiveCamera(53.65, window.innerWidth / window.innerHeight, 0.1, 100);

    // const controls = new OrbitControls( camera, renderer.domElement );

    camera.position.set(-0.0955,0.088,0.3);
    camera.lookAt(-0.0955,0.088,-1)
    // controls.update();
    camera.updateProjectionMatrix();

    scene.add(camera);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 4;
    document.body.appendChild(renderer.domElement);
    
    return { scene, camera, renderer}
}