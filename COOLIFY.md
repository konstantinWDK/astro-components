# 🚀 Guía de Despliegue en Coolify

Esta guía detalla los pasos para desplegar **Astro Components Kit** (`astrocomponents.dev`) en tu propio servidor **Coolify** de manera continua y automática.

---

## 1. Requisitos Previos

- Tener el repositorio en GitHub/GitLab (ej: `https://github.com/konstantinwdk/astro-components`).
- Una instancia de Coolify funcionando con acceso a tu dominio (`astrocomponents.dev`).

---

## 2. Métodos de Despliegue en Coolify

El repositorio incluye un [`Dockerfile`](./Dockerfile) multi-stage optimizado con Nginx.

### Método A: Despliegue con Dockerfile (⭐ Recomendado)
Coolify detecta automáticamente el `Dockerfile` al conectar el repositorio.

1. **Crear recurso en Coolify:**
   - **+ New Resource** -> **Application** -> **Public/Private Repository**.
   - URL: `https://github.com/konstantinwdk/astro-components` (rama `main`).
2. **Configuración:**
   - **Build Pack:** `Dockerfile` (lo auto-detecta).
   - **Port:** `80`.
3. **Ventajas del Dockerfile incluido:**
   - Multi-stage build (`node:22-alpine` para compilar, `nginx:alpine` para servir).
   - Imagen final ultraligera de solo **~25 MB**.
   - Compresión **Gzip** y cabeceras de caché inmutable para assets estáticos (`_astro/*`).
   - Cabeceras de seguridad HTTP automáticas (X-Frame-Options, X-Content-Type-Options, etc.).

---

### Método B: Despliegue sin Dockerfile (Nixpacks / Static)
Si prefieres que Coolify lo maneje sin Dockerfile:
- **Build Pack:** `Nixpacks` o `Static`.
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Port:** `80`

---

## 3. Dominio, SSL y Despliegue Continuo

1. **Dominio:** En el campo **Domains (FQDN)** de Coolify escribe:
   ```
   https://astrocomponents.dev
   ```
   Coolify configurará el proxy inverso con certificado SSL (Let's Encrypt) automático.

2. **Auto-Deploy:**
   - Activa **Auto Deploy** en la configuración de la aplicación en Coolify.
   - Cada `git push` a `main` desencadenará una compilación y despliegue sin caída de servicio (zero-downtime).

---

## 4. Comandos Locales de Verificación

```bash
# Validar tipado TypeScript
npm run typecheck

# Validar compilación de producción
npm run build

# (Opcional) Probar el contenedor Docker localmente
docker build -t astro-components-kit .
docker run -p 8080:80 astro-components-kit
# Abre http://localhost:8080 en tu navegador
```

---

## 5. Publicación en NPM (Independiente de Coolify)

La publicación del paquete NPM es independiente del despliegue web:

```bash
# Verificar archivos que se empaquetarán (~100 kB de componentes)
npm pack --dry-run

# Publicar en npm
npm publish --access public
```
