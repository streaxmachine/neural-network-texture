/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const material = new THREE.MeshMatcapMaterial();

export function Liquid(props) {
  const { nodes, materials } = useGLTF("/Untitled 1.glb");

  const { imageUrl } = useSelector((state) => state.imageUrl);
  const texture = new THREE.TextureLoader().load(imageUrl);

  const matcapTexture = new THREE.TextureLoader().load(
    "7B5254_E9DCC7_B19986_C8AC91-256px.png"
  );

  useEffect(() => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    material.matcap = texture;

    materials.liquid.matcap = texture;
    materials.liquid.map = texture;
  }, [texture, imageUrl]);

  return (
    <Float speed={5}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Liquid_2_object_90.geometry}
          material={material}
          position={[0.5, -0.2, -0.48]}
          rotation={[0, 0.03, 0]}
          scale={130.9}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/Untitled 1.glb");
