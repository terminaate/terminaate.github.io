import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import cl from './CanvasModel.module.scss';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const CanvasModel = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const rendererRef = useRef<null | Three.WebGLRenderer>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const modelUrl = import.meta.env.PROD ? 'https://terminaate.netlify.app/model.glb' : new URL('../../assets/models/model.glb', import.meta.url);

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = rendererRef;
    const { current: container } = containerRef;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  useEffect(() => {
    const { current: container } = containerRef;

    if (container) {
      const renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.outputEncoding = Three.sRGBEncoding;
      container.appendChild(renderer.domElement);

      const scene = new Three.Scene();
      const camera = new Three.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.set(3, 1, 0);
      // camera.rotation.set(0, 0, 0);
      camera.lookAt(0, 0, 0);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target = new Three.Vector3(0, 1, 0);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 5;

      const ambientLight = new Three.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const gltfLoader = new GLTFLoader();
      const loadModel = (gltf: GLTF) => {
        gltf.scene.position.set(0, 0, 0);
        scene.add(gltf.scene);
        setLoading(false);
      };

      if (modelUrl instanceof URL) {
        gltfLoader.load(modelUrl.href, loadModel);
      } else {
        gltfLoader.load(modelUrl, loadModel);
      }

      // const gridHelper = new Three.GridHelper();
      // scene.add(gridHelper);

      let req: number;
      const loop = () => {
        req = requestAnimationFrame(loop);
        renderer.render(scene, camera);
        controls.update();
      };

      loop();
      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <div ref={containerRef} className={cl.canvasContainer}>
      {loading && (
        <div className={cl.loader} />
      )}
    </div>
  );
};

export default CanvasModel;