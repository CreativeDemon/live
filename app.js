import * as THREE from "https://esm.sh/three@0.178";
import {OrbitControls} from "https://esm.sh/three@0.178/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "https://esm.sh/three@0.178/examples/jsm/loaders/GLTFLoader.js";

const scene=new THREE.Scene();
scene.background=new THREE.Color("#111111");

const camera=new THREE.PerspectiveCamera(
45,
window.innerWidth/window.innerHeight,
0.1,
100
);

camera.position.set(0,1.2,2);

const renderer=new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.setPixelRatio(
window.devicePixelRatio
);

document.body.appendChild(
renderer.domElement
);

const controls=new OrbitControls(
camera,
renderer.domElement
);

controls.enablePan=false;
controls.enableDamping=true;
controls.dampingFactor=0.1;
controls.minDistance=1;
controls.maxDistance=4;
controls.target.set(0,0.8,0);

const hemi=new THREE.HemisphereLight(
0xffffff,
0x444444,
2
);

scene.add(hemi);

const dir=new THREE.DirectionalLight(
0xffffff,
2
);

dir.position.set(
2,
5,
2
);

scene.add(dir);

const floor=new THREE.Mesh(

new THREE.CircleGeometry(
5,
64
),

new THREE.MeshStandardMaterial({

color:"#222222"

})

);

floor.rotation.x=-Math.PI/2;

scene.add(floor);

let girl;

window.bodyMesh=null;

const texLoader=new THREE.TextureLoader();

const loader=new GLTFLoader();

loader.load(

"/assets/Anime-Girl.glb",

(gltf)=>{

girl=gltf.scene;

console.log("MODEL LOADED");

girl.traverse((obj)=>{

if(obj.isMesh){

console.log(

"Mesh:",

obj.name

);

console.log(

obj.name,

obj.material

);

if(obj.name==="Body"){

window.bodyMesh=obj;

console.log(

"BODY FOUND",

bodyMesh

);

}

}

});

const box=new THREE.Box3()

.setFromObject(

girl

);

const center=

box.getCenter(

new THREE.Vector3()

);

const min=

box.min;

girl.position.x-=center.x;

girl.position.z-=center.z;

girl.position.y-=min.y;

scene.add(

girl

);

},

(xhr)=>{

console.log(

Math.round(

xhr.loaded/

xhr.total

*100

)

+"%"

);

},

(err)=>{

console.error(err);

}

);

window.hideMesh=(name)=>{

if(!girl)return;

girl.traverse((obj)=>{

if(

obj.isMesh

&&

obj.name===name

){

obj.visible=false;

}

});

};

window.showMesh=(name)=>{

if(!girl)return;

girl.traverse((obj)=>{

if(

obj.isMesh

&&

obj.name===name

){

obj.visible=true;

}

});

};

window.naked=()=>{

hideMesh("T-Shirt");

hideMesh("Jean_shorts");

hideMesh("Low-heeled_mules");

hideMesh("Shoulder_Bag_1");

hideMesh("Headband");

};

window.casual=()=>{

showMesh("T-Shirt");

showMesh("Jean_shorts");

showMesh("Low-heeled_mules");

showMesh("Shoulder_Bag_1");

showMesh("Headband");

};

window.changeBody=(path)=>{

if(!bodyMesh){

console.log(

"Body not found"

);

return;

}

texLoader.load(

path,

(tex)=>{

tex.flipY=false;

tex.colorSpace=

THREE.SRGBColorSpace;

bodyMesh.material.map=tex;

bodyMesh.material.needsUpdate=true;

console.log(

"Changed:",

path

);

},

undefined,

(err)=>{

console.error(err);

}

);

};

window.addEventListener(

"resize",

()=>{

camera.aspect=

window.innerWidth/

window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

}

);

function animate(){

requestAnimationFrame(

animate

);

controls.update();

renderer.render(

scene,

camera

);

}

animate();