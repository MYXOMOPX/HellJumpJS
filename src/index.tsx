import "./ui/style/index.scss"
import * as THREE from 'three';
import {renderManager} from "./game/RenderManager";
import {DefaultRoundScene} from "./game/scenes/DefaultRoundScene";


const roundScene = new DefaultRoundScene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
renderManager.scene = roundScene.scene;
renderManager.camera = camera;
camera.position.z = 5;

renderManager.startRendering();