import * as THREE from 'three'
// import OrbitControls from 'three-orbit-controls';

// OrbitControls(THREE)
var OrbitControls = require('three-orbit-controls')(THREE)

import { sceneJSON } from '../output/Main';  

// Setup scene
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

var spotLight = new THREE.SpotLight();
spotLight.position.set(500, 1000, 1000);
spotLight.power = 3;
spotLight.castShadow = true;
scene.add(spotLight);

// Axis helper
const axesHelper = new THREE.AxesHelper( 100 );
scene.add( axesHelper );

// Camera
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(250, 250, 250)
camera.lookAt(0, 0, 0) 
// camera.up.set(0,0,1)

// Controls
const controls = new OrbitControls(camera)
controls.enableZoom = true;
controls.autoRotate = true;


// Attach canvas canvas
document.body.appendChild( renderer.domElement );

// Scene data prep
const sceneData = JSON.parse(sceneJSON);


// "Pixels"

var dotGeometry = new THREE.Geometry();
dotGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
var dotMaterial = new THREE.PointsMaterial( { size: 1, sizeAttenuation: false } );
var dot = new THREE.Points(dotGeometry, dotMaterial);
scene.add(dot);

// var geometry = new THREE.BoxGeometry(10, 10, 10);

// var matProps = {
//   specular: '#a9fcff',
//   color: '#00abb1',
//   emissive: '#006063',
//   shininess: 10,
//   transparent: true,
//   opacity: 0.5,

// }

// var material = new THREE.MeshPhongMaterial(matProps);

// Make pixels & position them
export const doPoints = points => points.forEach(({x,y,z}) => {
  console.log("foo");
  var dotGeometry = new THREE.Geometry();
  dotGeometry.vertices.push(new THREE.Vector3(x, y, z));
  var dotMaterial = new THREE.PointsMaterial( { size: 1, sizeAttenuation: false } );
  var dot = new THREE.Points(dotGeometry, dotMaterial);
  scene.add(dot);
  
});
// export const doPoints = points => points.forEach(({x,y,z}) => {
//   var pixel = new THREE.Mesh( geometry, material);
//   pixel.castShadow = true;
//   pixel.position.set(x,y,z)
//   scene.add( pixel );
// });

// Start LOOP
function animate() {
  requestAnimationFrame( animate );
  controls.update();
	renderer.render( scene, camera );
}

animate();
doPoints(sceneData);