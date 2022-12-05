import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import background from '../../static/background.glb';

export function background(scene) {

    const loader = new GLTFLoader();

    loader.load(background, (glb) => {
        glb.scene.rotation.y = -Math.PI;
        glb.scene.position.y = 2.76;
        glb.scene.scale.x = 2.6;
        glb.scene.traverse((obj) => {
            if(obj.name === 'ShadowPlane') {
                obj.receiveShadow = true;
            }
        })
        scene.add(glb.scene);
    })
}