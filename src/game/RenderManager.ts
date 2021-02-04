import * as THREE from "three";
import {Camera, Scene, WebGLRenderer} from "three";

class RenderManager {

    private readonly _renderer: WebGLRenderer = null;
    private _camera: Camera = null;
    private _scene: Scene = null;
    private _rendering: boolean = false;

    constructor() {
        const renderer = this._renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    }

    private doRender = () => {

        if (!this._scene || !this._camera || !this._rendering) {
            this._rendering = false;
            console.log("STOP rendering")
            return;
        }
        this._renderer.render( this._scene, this._camera );
        requestAnimationFrame(this.doRender)
    }

    set camera(cam: Camera) {
        this._camera = cam;
    }
    get camera(): Camera {
        return this._camera;
    }

    set scene(scene: Scene) {
        this._scene = scene;
    }
    get scene(): Scene {
        return this.scene;
    }

    public startRendering = () => {
        this._rendering = true;
        this.doRender()
    }
}

export const renderManager = new RenderManager()