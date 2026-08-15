# 🚀 Astro Components - Guía y Arquitectura

Tu librería de componentes y sitio web de documentación están completamente configurados para publicación en **NPM** y despliegue automatizado en **Coolify**.

---

## 🏗️ Resumen de la Arquitectura

### 1. **Paquete NPM (`package.json`)**
- 📦 Nombre del paquete: `astro-component-kit`
- 🎯 Exportaciones modulares para todas las categorías (`/buttons`, `/cards`, `/data`, `/forms`, `/feedback`, `/layout`, `/navigation`, `/overlays`, `/typography`, `/sections`, `/charts`, `/global.css`)
- 🔒 Campo `"files"` configurado: al ejecutar `npm publish` **solo** se empaquetan los componentes (`src/components/lib/`), tipos (`types.d.ts`), estilos (`src/styles/global.css`), `README.md` y `LICENSE`. La web de docs queda excluida del paquete NPM automáticamente.
- ⚡ Peer dependency en `astro >=5.0.0` y `sideEffects: false` para soporte óptimo de tree-shaking.

### 2. **Web de Documentación y Coolify**
- 🌐 El repositorio público en GitHub contiene **todo el código** (incluyendo `src/pages/`, `src/layouts/`, `src/data/registry/`).
- 🔄 **Despliegue con Coolify**: Coolify clona el repositorio desde GitHub, ejecuta `npm run build` y sirve el directorio `dist/` automáticamente con HTTPS.
- 📖 Consulta [COOLIFY.md](./COOLIFY.md) para la guía paso a paso.

---

## 🛠️ Scripts Disponibles

```bash
# Servidor de desarrollo local (http://localhost:4321)
npm run dev

# Compilar la web estática para producción (genera dist/)
npm run build

# Previsualizar el build de producción localmente
npm run preview

# Validación estricta de tipos de TypeScript y Astro
npm run typecheck

# Regenerar los datos del registry a partir de los componentes .astro
npm run registry:generate
```

---

## 📦 Cómo Publicar en NPM

```bash
# 1. Iniciar sesión en npm (solo la primera vez)
npm login

# 2. Verificar el contenido del paquete (dry-run)
npm pack --dry-run

# 3. Publicar la versión
npm publish --access public
```

Una vez publicado, cualquier proyecto Astro puede instalarlo con:
```bash
npm install astro-component-kit
```

Y usarlo directamente:
```astro
---
import { GlassButton, GlassCard } from 'astro-component-kit';
// O por categoría (recomendado para tree-shaking):
import { GlassButton, GlowButton } from 'astro-component-kit/buttons';
import { GlassCard, PricingCard } from 'astro-component-kit/cards';
import 'astro-component-kit/global.css';
---

<GlassButton variant="primary">Click me</GlassButton>
<GlassCard title="Dashboard">Contenido</GlassCard>
```
