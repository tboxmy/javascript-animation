const { GeometryUtils } = require("three");
const THREE = require("three");

function createRenderer() {
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setClearColor("#f8f8ff");
  renderer.setClearColor("#16161d");
  let output = document.querySelector("#output");
  output.appendChild(renderer.domElement);

  return renderer;
}
function createScene() {
  return new THREE.Scene();
}
function createCamera() {
  let camera = new THREE.PerspectiveCamera(
    45, // perspective degree
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near value
    1000 //  far value
  );
  let x = -30; // move left
  let y = 40; // move up
  let z = 30; // move further out
  camera.position.set(x, y, z);
  camera.lookAt(0, 5, 0);

  return camera;
}
let renderer = createRenderer();
let scene = createScene();
let camera = createCamera();

function createAxesHelpers() {
  let axes = new THREE.AxesHelper(40);
  return axes;
}

function createCube() {
  let geom = new THREE.BoxGeometry(4, 4, 4);
  //   let material = new THREE.MeshBasicMaterial({
  //     color: "tomato",
  //   });
  //   let material = new THREE.MeshPhongMaterial({
  //     color: "black",
  //     emissive: "tomato",
  //     flatShading: true,
  //     shininess: 150,
  //   });

  let material = new THREE.MeshLambertMaterial({
    color: "black",
    emissive: "dodgerblue",
    shininess: 150,
  });
  let mesh = new THREE.Mesh(geom, material);
  return mesh;
}
function createLight() {
  let light = new THREE.PointLight("white", 1);
  return light;
}
let axesHelper = createAxesHelpers();
let cube = createCube();
let light = createLight();
light.position.x = 10;
light.position.y = 10;
scene.add(axesHelper);
// scene.add(cube);
renderer.render(scene, camera);
let start = 0;
function animate() {
  if (cube.position.x < start + 50) {
    cube.position.x += 0.1;
    cube.rotation.y += 0.1;
  } else if (cube.position.y < 10) cube.position.y += 0.1;
  else if (cube.position.z < 50) cube.position.z += 0.1;
  else {
    start = -50;
    cube.position.x = start;
    cube.position.y = 0;
    cube.position.z = 0;
    cube.rotation.y = 0;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
function createSphere() {
  let geom = new THREE.SphereGeometry(4, 30, 30);
  //   let material = new THREE.MeshBasicMaterial({
  //     color: "dodgerblue",
  //   });
  //   let material = new THREE.MeshPhongMaterial({
  //     color: "black",
  //     emissive: "dodgerblue",
  //     flatShading: true,
  //     shininess: 150,
  //   });

  let material = new THREE.MeshLambertMaterial({
    color: "black",
    emissive: "dodgerblue",
    shininess: 150,
  });

  let mesh = new THREE.Mesh(geom, material);
  return mesh;
}
let sphere = createSphere();
sphere.position.x = 20;
scene.add(cube, sphere, light);
animate();
console.log(renderer);
