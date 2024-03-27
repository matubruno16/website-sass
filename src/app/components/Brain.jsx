
"use client"

import { Canvas, extend, useFrame } from "@react-three/fiber"
import { OrbitControls, shaderMaterial, } from "@react-three/drei"
import { data } from "../../data"
import * as THREE from 'three';
import Tubes from "./Tubes";
import { useEffect, useMemo, useRef } from "react";

const PATHS = data.economics[0].paths

const randomRange = (min, max) => Math.random() * (max - min) + min;

let curves = [];
// loop curves
for (let i = 0; i < 100; i++) {
  // lopp points
  let points = []
  let length = randomRange(0.1, 1);
  for (let j = 0; j < 100; j++) {
    points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        Math.PI - (j / 100) * Math.PI * length,
        (i / 100) * Math.PI * 2,
      )
    );
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  curves.push(tempcurve);
}

let brainCurves = []

PATHS.forEach((path) => {
  let points = []
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]))
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  brainCurves.push(tempcurve)
})

function BrainParticles({ allthecurves }) {
  let density = 10;
  let numberOfPoints = density * allthecurves.length
  const myPoints = useRef([])
  const brainGeo = useRef()

  let positions = useMemo(() => {
    let positions = []
    for (let i = 0; i < numberOfPoints; i++) {
      positions.push(
        randomRange(-1, 1),
        randomRange(-1, 1),
        randomRange(-1, 1)
      )
    }
    return new Float32Array(positions)
  }, [])
  let randoms = useMemo(() => {
    let randoms = []
    for (let i = 0; i < numberOfPoints; i++) {
      randoms.push(
        randomRange(0.3, 1.),
      )
    }
    return new Float32Array(randoms)
  }, [])


  useEffect(() => {
    for (let i = 0; i < allthecurves.length; i++) {
      for (let j = 0; j < density; j++) {
        myPoints.current.push({
          currentOffset: Math.random(),
          speed: Math.random() * 0.01,
          curve: allthecurves[i],
          curPosition: Math.random()
        })

      }
    }
  }, [])

  useFrame(({ clock }) => {
    let curPositions = brainGeo.current.attributes.position.array;
    for (let i = 0; i < myPoints.current.length; i++) {
      myPoints.current[i].curPosition += myPoints.current[i].speed;
      myPoints.current[i].curPosition = myPoints.current[i].curPosition % 1;

      let curPoint = myPoints.current[i].curve.getPointAt(myPoints.current[i].curPosition)

      curPositions[i * 3] = curPoint.x
      curPositions[i * 3 + 1] = curPoint.y
      curPositions[i * 3 + 2] = curPoint.z
    }
    brainGeo.current.attributes.position.needsUpdate = true
  })

  const BrainParticlesMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    // vertex shader
    /*glsl*/`
    varying vec2 vUv;
    uniform float time;
    varying float vProgress;
    attribute float randoms;
    void main() {
      vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); 
    gl_PointSize = randoms*2. * (1. / - mvPosition.z);
    // gl_PointSize = 3.0;
    }
    `,
    // fragment shader
    /*glsl*/`
    uniform float time;    
    void main() {            
       float disc = length(gl_PointCoord.xy - vec2(0.5));
       float opacity = 0.3*smoothstep(0.5,0.4,disc);

      gl_FragColor = vec4(vec3(opacity),1.);
    }
    `
  )
  extend({ BrainParticlesMaterial })

  return (
    <>
      <points>
        <bufferGeometry attach="geometry" ref={brainGeo}>
          <bufferAttribute
            attach='attributes-position'
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach='attributes-randoms'
            count={randoms.length / 3}
            array={randoms}
            itemSize={3}
          />
        </bufferGeometry>
        <brainParticlesMaterial
          attach="material"
          depthTest={false}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  )
}

export default function Brain() {
  return (
    <Canvas camera={{ position: [0.1, 0, 0.3], near: 0.001, fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Tubes allthecurves={brainCurves} />
      <BrainParticles allthecurves={brainCurves} />
      <OrbitControls />
    </Canvas>
  )
}