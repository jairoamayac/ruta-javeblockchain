# Ruta JaveBlockchain 2026-II

Sitio de la Ruta JaveBlockchain: cinco viernes (16 de octubre a 13 de
noviembre de 2026) para pasar del problema real al prototipo en Stellar.
Lo organiza el Semillero de Blockchain de la Facultad de Ingeniería de la
Pontificia Universidad Javeriana, con el apoyo de Stellar, BAF y el Centro
Javeriano de Emprendimiento.

- Sitio: https://ruta-javeblockchain.jairoamayac.workers.dev
- Inscripción: https://luma.com/7saf4ugr
- Instagram: @javeblockchain

## Qué hay en el sitio

| Página | Contenido |
|---|---|
| `/` | Fechas clave, formación de equipos y agenda de cada viernes con las dos rutas |
| `/tecnica` | Bloques técnicos minuto a minuto por nivel (Fundamentos y Builders) y tarea de cada semana |
| `/emprendimiento` | Talleres del CJE y del semillero, actividades, tareas y plantillas para copiar |
| `/entregables` | Qué entrega cada equipo en cada PR, estructura del repositorio y plantilla de PR |
| `/evaluacion` | Semáforo semanal, insignias, rúbricas técnicas y rúbrica del Demo Day |
| `/recursos` | Preinstalación, documentación y herramientas |

## Estructura del repositorio

```
public/        sitio estático (HTML, CSS y JS, sin build)
docs/          guía del equipo organizador
plantillas/    archivos para los repositorios de los equipos
wrangler.jsonc configuración del Worker de Cloudflare
```

## Desarrollo y despliegue

El sitio es un Cloudflare Worker que solo sirve archivos estáticos
(Workers Static Assets). No necesita build.

```bash
npm install
npx wrangler dev      # vista local en http://localhost:8787
npx wrangler deploy   # publica en https://ruta-javeblockchain.jairoamayac.workers.dev
```

Para cambiar una fecha, una actividad o una plantilla, edita el HTML de la
página en `public/` y vuelve a desplegar.
