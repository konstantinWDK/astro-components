---
name: threejs-guide
description: >-
  Comprehensive technical reference for Three.js r160+ development, 3D scenes,
  particle systems, shaders, materials, lighting, and performance in Astro.
---

# Three.js Reference Guide

A comprehensive reference for Three.js r160+ development. Use this when building 3D features, backgrounds, particles, or shader effects in this project.

## Quick Import Pattern

```js
import * as THREE from 'three';
// Addons (controls, loaders, post-processing)
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
```

---

## 1. Fundamentals

### Scene Setup
```js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 1.6, 3);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
```

### Object3D Hierarchy
- `Scene > Group > Mesh/Object3D` — tree structure
- Transforms: `position`, `rotation`, `scale`, `quaternion`
- Methods: `add()`, `remove()`, `attach()`, `getObjectByName()`, `traverse()`

### Math Utilities
- `Vector3`, `Vector2`, `Vector4` — positions, directions
- `Matrix4` — transformations
- `Quaternion` — rotation without gimbal lock
- `Euler` — Euler angle rotation
- `Color` — color management
- `MathUtils` — `lerp`, `clamp`, `degToRad`, `mapLinear`

### Common Patterns
```js
// Responsive canvas
window.addEventListener('resize', () => {
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
});

// Animation clock
const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Disposal pattern
geometry.dispose();
material.dispose();
texture.dispose();
```

### Performance Tips
- Merge geometries when possible (`BufferGeometryUtils.mergeGeometries()`)
- Use LOD (Level of Detail) for complex models
- Limit pixel ratio to 2 max
- Share materials and geometries across meshes

---

## 2. Geometry

### Built-in Geometries
| Geometry | Key Params |
|----------|-----------|
| `BoxGeometry(w, h, d, ws, hs, ds)` | dimensions + segments |
| `SphereGeometry(r, wSeg, hSeg)` | radius + segments |
| `PlaneGeometry(w, h, ws, hs)` | flat surface |
| `CylinderGeometry(rTop, rBot, h, radSeg)` | cone/cylinder |
| `TorusGeometry(r, tube, radSeg, tubSeg)` | ring/donut |
| `TorusKnotGeometry(r, tube, tubSeg, radSeg, p, q)` | complex knot |
| `CapsuleGeometry(r, length, capSeg, radSeg)` | pill shape |

### BufferGeometry (Custom)
```js
const geo = new THREE.BufferGeometry();
const vertices = new Float32Array([...]);
geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geo.computeVertexNormals();
```

### InstancedMesh (1000+ objects)
```js
const mesh = new THREE.InstancedMesh(geometry, material, count);
const matrix = new THREE.Matrix4();
matrix.setPosition(x, y, z);
mesh.setMatrixAt(i, matrix);
mesh.instanceMatrix.needsUpdate = true;
```

### Points & Lines
```js
const points = new THREE.Points(geometry, material);
const line = new THREE.Line(geometry, lineMaterial);
const lineLoop = new THREE.LineLoop(geometry, material);
```

---

## 3. Materials

### Material Types
| Material | Use Case |
|----------|----------|
| `MeshBasicMaterial` | Unlit, flat color |
| `MeshLambertMaterial` | Simple lighting (non-physically accurate) |
| `MeshPhongMaterial` | Specular highlights |
| `MeshStandardMaterial` | PBR (recommended default) |
| `MeshPhysicalMaterial` | Advanced PBR (clearcoat, transmission) |
| `MeshToonMaterial` | Cel/cartoon shading |
| `ShaderMaterial` | Custom GLSL |

### MeshPhysicalMaterial Advanced
```js
const mat = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.5,
  clearcoat: 1.0,         // Car paint, varnish
  clearcoatRoughness: 0.1,
  transmission: 1.0,      // Glass
  thickness: 0.5,
  ior: 1.5,
  iridescence: 1.0,       // Oil slick effect
  iridescenceIOR: 1.3,
  anisotropy: 0.8,        // Brushed metal
  sheen: 1.0,             // Fabric
});
```

### ShaderMaterial
```js
const mat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: texture },
    uColor: { value: new THREE.Color(0xff0000) },
  },
  vertexShader: `...`,
  fragmentShader: `...`,
  transparent: true,
  side: THREE.DoubleSide,
});
```

### Performance Tips
- Pool materials, don't create per-instance
- Use `alphaTest` instead of `transparent: true` when possible
- Minimize material count for draw call batching

---

## 4. Lighting

### Light Types
| Light | Description |
|-------|-------------|
| `AmbientLight(color, intensity)` | Fills entire scene evenly |
| `HemisphereLight(skyColor, groundColor, intensity)` | Sky-to-ground gradient |
| `DirectionalLight(color, intensity)` | Sun-like, parallel rays |
| `PointLight(color, intensity, distance, decay)` | Bulb, omnidirectional |
| `SpotLight(color, intensity, distance, angle, penumbra, decay)` | Cone/spotlight |
| `RectAreaLight(color, intensity, width, height)` | Panel/softbox |

### Shadows
```js
// Renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Light
light.castShadow = true;
light.shadow.mapSize.set(1024, 1024);
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 50;
light.shadow.bias = -0.001;
light.shadow.normalBias = 0.02;

// Mesh
mesh.castShadow = true;
mesh.receiveShadow = true;
```

---

## 5. Textures

### Loading
```js
const loader = new THREE.TextureLoader();
const texture = loader.load('/path/to/texture.jpg');

// Promise wrapper
const loadTexture = (path) => new Promise((resolve) => {
  new THREE.TextureLoader().load(path, resolve);
});
```

### Configuration
```js
texture.colorSpace = THREE.SRGBColorSpace; // For color textures
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2, 2);
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
texture.minFilter = THREE.LinearMipmapLinearFilter;
```

---

## 6. Loaders

### GLTF/GLB (Recommended)
```js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const loader = new GLTFLoader();
const draco = new DRACOLoader();
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
loader.setDRACOLoader(draco);

loader.load('model.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

---

## 7. Astro Integration Patterns

### Canvas Component
```astro
---
// Background3D.astro
---
<canvas id="three-canvas" class="three-canvas"></canvas>

<script>
  import * as THREE from 'three';

  const canvas = document.getElementById('three-canvas');
  if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    // ... Scene logic ...
  }
</script>

<style>
  .three-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
```
