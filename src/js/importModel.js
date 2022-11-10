import * as THREE from 'three';
import hdr from '../../static/HDR2.hdr';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export function importModel(model, scene) {
    const loader = new GLTFLoader();
    const rgbeLoader = new RGBELoader();

    rgbeLoader.load(hdr, (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;

        loader.load(model, (gltf) => {
            gltf.scene.scale.set(1.27,1,1);
            scene.add(gltf.scene)
        })
        
    })
}