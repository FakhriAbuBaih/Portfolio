import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import style from './Characters.module.css';
import Loader from '../Loader/Loader';

export default function CharactersSwiper({ model, status }) {
  const path = `/Models/${model}/`; // Corrected path
  const divRef = useRef(null); // Reference to the div where the scene will be rendered
  const [loading, setLoading] = useState(true); // State to manage loader visibility

  useEffect(() => {
    const divElement = divRef.current;
    const width = divElement.clientWidth;
    const height = divElement.clientHeight;

    // Create the renderer and set its size to the div dimensions
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(width, height);
    renderer.setClearColor(0x00FFFFCC, 0); // Transparent background
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Append renderer to the div instead of document.body
    divElement.appendChild(renderer.domElement);

    // Create the scene, camera, and controls
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    if (status === 'notactive') {
      camera.position.set(0, 20, 30);
      const spotLight = new THREE.SpotLight(0xffffff, 1000, 150, 0.7, 1);
      const spotLight2 = new THREE.SpotLight(0xffffff, 2000, 150, 0.7, 1);
      spotLight.position.set(10, 60, 10);
      spotLight2.position.set(0, 0, 0);
      spotLight.castShadow = true;
      spotLight.shadow.bias = -0.0001;
      scene.add(spotLight);
      scene.add(spotLight2);
      controls.enablePan = false; // Enable panning when 'notactive'
      controls.autoRotate = false;
      controls.minDistance = 0;
      controls.maxDistance = 60;
      controls.minPolarAngle = 0.5;
      controls.maxPolarAngle = 1.5;
      controls.target = new THREE.Vector3(0, 10, 0);
      controls.enableRotate = false;
      controls.enableZoom = false;
      controls.enablePan = false;
    } else {
      camera.position.set(10, 20, 30);
      const spotLight = new THREE.SpotLight(0xffffff, 20000, 150, 0.7, 1);
      const spotLight2 = new THREE.SpotLight(0xffffff, 10000, 150, 0.7, 1);
      spotLight.position.set(40, 50, 40);
      spotLight2.position.set(-40, -50, -20);
      spotLight.castShadow = true;
      spotLight.shadow.bias = -0.0001;
      scene.add(spotLight);
      scene.add(spotLight2);
      controls.autoRotate = true;   // Enable auto-rotation when 'active'
      controls.enableRotate = true; // Enable rotating camera using the mouse
      controls.enablePan = true;    // Enable panning camera using the mouse
      controls.enableZoom = true;
      controls.autoRotateSpeed = 5;
      controls.minDistance = 0;
      controls.maxDistance = 60;
      controls.minPolarAngle = 0.5;
      controls.maxPolarAngle = 1.5;
      controls.target = new THREE.Vector3(0, 10, 0);
    }

    controls.update();

    // Create ground and lighting
    const groundGeometry = new THREE.CircleGeometry(7, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x00000000, side: THREE.DoubleSide });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.castShadow = false;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Load 3D model
    const loader = new GLTFLoader().setPath(path);
    loader.load(`${model}.glb`, (gltf) => {
      const mesh = gltf.scene;

      mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      mesh.position.set(0, 0, 0);
      scene.add(mesh);

      // Hide the loader when the model is loaded
      setLoading(false);
    }, (xhr) => {
      console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
    }, (error) => {
      console.error(error);
      setLoading(false); // Hide loader even if there is an error
    });

    // Handle window resize
    const handleResize = () => {
      const newWidth = divElement.clientWidth;
      const newHeight = divElement.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();  // Proper disposal of controls
      renderer.dispose();  // Dispose renderer to avoid memory leaks
      scene.clear();       // Clear the scene for memory management
      divElement.removeChild(renderer.domElement);
    };
  }, [status]);

  const divHeight = status === 'active' ? '100%' : '80%';
  const divWidth = status === 'active' ? '200%' : '100%';

  return (
    <div className={`${style.model}`} style={{ height: divHeight }}>
      {loading && (
        <Loader />
      )}
      <div className={`${style.body}`} ref={divRef} style={{ width: divWidth }}>
        {/* This div will contain the WebGL scene */}
      </div>
      <h4>{model}</h4>
    </div>
  );
}
