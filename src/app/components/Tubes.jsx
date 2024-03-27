import { useFrame, useThree } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"

import * as THREE from 'three';
import { extend } from '@react-three/fiber'
import { useRef } from "react";


function Tube({ curve }) {
  const brainMat = useRef()

  const { viewport } = useThree()
  useFrame(({ clock, mouse }) => {
    brainMat.current.uniforms.time.value = clock.getElapsedTime()
    brainMat.current.uniforms.mouse.value = new THREE.Vector3(
      mouse.x * viewport.width / 2,
      mouse.y * viewport.height / 2,
      0
    )
  })

  const BrainMaterial = shaderMaterial(
    {
      time: 0,
      color: new THREE.Color(0.1, 0.3, 0.6),
      mouse: new THREE.Vector3(0., 0., 0.),

    },
    // vertex shader
    /*glsl*/`
    varying vec2 vUv;
    uniform float time;
    uniform vec3 mouse;
    varying float vProgress;
    void main() {
      vUv = uv;
      vProgress = smoothstep(-1.,1.,sin(vUv.x*8. + time*3.));

      vec3 p = position;
      float maxDist = 0.07;
      float dist = length(mouse - p);
      if(dist < maxDist){
        vec3 dir = normalize(mouse - p);
        dir*= (1.-dist/maxDist);
        p -= dir*0.01;
      }
      gl_Position = projectionMatrix * modelViewMatrix * vec4 (p, 1.0);
    }
    `,
    // fragment shader
    /*glsl*/`
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    varying float vProgress;
    
    void main() {      
      // Definir tonos de violeta oscuro con matiz azulado para la base
      vec3 finalColor = vec3(0.1, 0.0, 0.2); // Violeta oscuro azulado
    
      float hideCorners = smoothstep(1., 0.1, vUv.x);
      float hideCorners1 = smoothstep(1., 0.1, vUv.x);
    
      // Definir tonos de violeta menos oscuros con matiz azulado para los lados
      vec3 darkerVioletBlue = vec3(0.05, 0.0, 0.1); // Violeta menos oscuro azulado
      vec3 mixedColor = mix(finalColor, darkerVioletBlue, hideCorners); // Aplicar tono menos oscuro en los lados
    
      // Ajustar color progresivo hacia un violeta más oscuro con matiz azulado
      vec3 progressiveColor = vec3(0.15, 0.0, 0.3); // Violeta más oscuro azulado progresivo
      finalColor = mix(finalColor, progressiveColor, vProgress);
    
      gl_FragColor.rgb = finalColor; // Color progresivo
      gl_FragColor.rgb = mix(mixedColor, finalColor, hideCorners * hideCorners1); // Mezclar colores dependiendo de la posición
    
      gl_FragColor.a = 1.0; // Alpha
    

    }
    `
  )
  extend({ BrainMaterial })

  return (
    <>
      <mesh>
        <tubeGeometry args={[curve, 64, 0.001, 3, false]} />
        <brainMaterial
          ref={brainMat}
          side={THREE.DoubleSide}
          transparent={true}
          depthTest={false}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  )
}

export default function Tubes({ allthecurves }) {
  return (
    <>
      {allthecurves.map((curve, index) => (
        <Tube curve={curve} key={index} />
      ))}
    </>
  )
}