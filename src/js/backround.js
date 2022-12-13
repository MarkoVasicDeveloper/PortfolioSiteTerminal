import { loader } from '..';
import backgroundModel from '../../static/background.glb';

export function background(scene) {

    loader.load(backgroundModel, (glb) => {
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