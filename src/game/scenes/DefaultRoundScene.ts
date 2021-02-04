import {Scene} from "three";
import * as THREE from "three";


export class DefaultRoundScene {

    _scene: Scene = null;

    constructor() {
        this._scene = new Scene()
    }

    initialize() {
        const scene = this._scene;

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

    }

    get scene(): Scene {
        return this._scene
    }
}