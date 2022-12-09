import * as THREE from 'three';
import hdr from '../../static/HDR2.hdr';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import model from '../../static/scene.glb'
import { canvasTexture } from '..';

export function importModel(scene) {
    return new Promise((res) => {
        const rgbeLoader = new RGBELoader();
        const loader = new GLTFLoader();

        rgbeLoader.load(hdr, (texture) => {
        
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
    
            loader.load(model, (gltf) => {
                gltf.scene.scale.set(1.27,1,1);
                gltf.scene.traverse(mesh => {
                    if(mesh.isMesh) mesh.castShadow = true;
                    if(mesh.name === 'defaultMaterial006'){
                        mesh.geometry = new THREE.PlaneGeometry(1.4,0.9,1);
                        mesh.material = new THREE.MeshBasicMaterial({
                            map: canvasTexture,
                            side: THREE.FrontSide
                        })
                    }
                })
                res(gltf)
            })
        })
    })
}