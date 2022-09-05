import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default ({ el, options: { autoPlay = true, initWidth, initHeight, modulePath } }) => {

    const width = initWidth || el.clientWidth;
    const height = initHeight || el.clientHeight;

    const scene = new THREE.Scene();

    // 导入素材
    const loader = new GLTFLoader();
    loader.load(modulePath, function (gltf) {
        debugger
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });


    // 创建方块
    const geometry = new THREE.BoxGeometry(100, 100, 100)
    // 创建材质
    // const material = new THREE.MeshBasicMaterial({  // basic不受光照影响
    //     color: 0x00ffff
    // })
    const material = new THREE.MeshLambertMaterial({
        color: 0xf0f0f0,
        transparent: true,
        opacity: .5
    })
    // 创建mesh网格模型对象
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    // mesh.position.set(100, 100, 100)
    mesh.rotateY(45)

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(300, 300, 300)
    camera.lookAt(50, 50, 50)

    const cameraHelper = new THREE.CameraHelper(camera, 10) // 相机辅助工具
    scene.add(cameraHelper)

    // 创建光源
    const ambient = new THREE.AmbientLight(0xffffff, .5) // 环境光
    scene.add(ambient)

    const point = new THREE.PointLight(0xffffff, 1) // 点光源
    point.position.set(200, 100, 50)
    scene.add(point)
    const pointHelper = new THREE.PointLightHelper(point, 10) // 点光源辅助工具
    scene.add(pointHelper)

    // 创建坐标轴
    const axesHelper = new THREE.AxesHelper(300)
    scene.add(axesHelper)

    // 创建渲染器 负责将相机拍摄的画面渲染出来
    const render = new THREE.WebGLRenderer();
    render.setSize(width, height)
    render.render(scene, camera) //渲染
    el.appendChild(render.domElement)

    // 添加控制器
    const controls = new OrbitControls(camera, render.domElement)
    controls.addEventListener('change', () => {
        render.render(scene, camera) //渲染
    })

    const autoRender = () => {
        render.render(scene, camera) //渲染
        mesh.rotateY(0.01)
        mesh.rotateX(0.01)
        requestAnimationFrame(autoRender)
    }
    if (autoPlay) {
        autoRender()
    }

    return {
        scene, camera, render, autoRender
    }
}