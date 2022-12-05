import * as THREE from 'three';
import hdr from '../../static/HDR2.hdr';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import model from '../../static/scene.glb'



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
                })
                res(gltf)
            })
        })
    })
}

// export async function loadModel(url) {
//     let gltf = await loader.loadAsync(url);
//     return gltf;
// }