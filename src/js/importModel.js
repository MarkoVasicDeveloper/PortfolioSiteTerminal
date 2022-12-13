import * as THREE from 'three';
import hdr from '../../static/HDR2.hdr';
import model from '../../static/scene.glb'
import { canvasTexture, loader, rgbeLoader } from '..';

export function importModel(scene) {
    return new Promise((res) => {

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