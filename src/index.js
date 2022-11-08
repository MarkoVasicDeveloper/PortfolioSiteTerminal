import { setupStage } from "./js/setupStage";

const { scene, camera, renderer} = setupStage();

function animation() {
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

animation();