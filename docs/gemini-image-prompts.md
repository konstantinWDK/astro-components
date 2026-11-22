# Prompts de Gemini para las plantillas de tienda

Las plantillas **Telón** (teatro), **Corcho** (pesca) y **Barro** (motos de cross) llevan ilustraciones
generadas en SVG (`TheaPoster`, `FishArt`, `MotoArt`), así que funcionan sin ninguna imagen. Este archivo
te da los prompts para generar fotos reales con Gemini y sustituirlas cuando quieras.

## Cómo sustituir una ilustración por una foto

1. Genera la imagen, expórtala en WebP y guárdala en `public/images/<plantilla>/`.
2. Abre el componente de arte (`src/components/lib/app/TheaPoster.astro`, `FishArt.astro` o `MotoArt.astro`).
3. Sustituye el `<svg>` por una `<img src="..." alt={item.name} width="800" height="800" loading="lazy" decoding="async" />`
   cuando el producto tenga un campo `image` en `data.ts` (añádelo al tipo y a los datos).
4. Mantén el SVG como alternativa: `{item.image ? <img … /> : <svg …>…</svg>}`.

Reglas comunes para todas las imágenes: formato WebP, máximo 120 KB por imagen, texto alternativo
descriptivo (qué es el producto, no "imagen de"), y proporción fija para que no salte el diseño.

## Estilo común (añádelo al final de cada prompt)

> Fotografía de producto de estudio, fondo liso, luz suave lateral con sombra suave debajo, sin texto, sin
> logotipos reales, sin marcas de agua, composición centrada con espacio alrededor, alta nitidez, 1:1, 1600 px.

---

## Telón · Entradas de teatro (`templates/theater`)

Proporción de los carteles: **3:4** (la ilustración actual es 300×400).
Paleta: vino oscuro, rojo telón `#e23d55`, oro `#f0c66a`.

| Uso | Prompt |
| --- | --- |
| Cartel «La casa de Bernarda Alba» | Cartel de teatro minimalista: cinco sillas de madera oscura vacías sobre un escenario negro bajo un único foco cálido, un luto de tela negra colgado, paleta granate y oro, estilo gráfico editorial, sin texto. |
| Cartel «El fantasma de la ópera» | Cartel de musical: una máscara blanca sobre terciopelo violeta oscuro, una lámpara de cristal iluminada al fondo, brillos dorados, estilo cinematográfico dramático, sin texto. |
| Cartel «Una noche en el bar» | Cartel de comedia: barra de bar vacía de noche con cuatro copas y un foco naranja, tonos cálidos, ambiente íntimo, ilustración fotográfica, sin texto. |
| Cartel «Giselle» | Cartel de ballet: bailarina en tutú largo blanco de espaldas entre niebla azul violácea sobre un escenario, luz de luna, estilo romántico, sin texto. |
| Cartel «El Principito» | Cartel infantil: un asteroide diminuto con una rosa bajo una cúpula de cristal y un niño de pelo rubio mirando las estrellas, estilo ilustración de papel recortado, sin texto. |
| Cartel «Hamlet» | Cartel de drama: un actor de espaldas ante un telón gris con una calavera sobre una mesa, luz fría desde arriba, alto contraste, sin texto. |
| Cartel «Chicago» | Cartel de musical de jazz: piernas con medias de rejilla y plumas rojas sobre fondo negro, foco dorado, estilo art déco, sin texto. |
| Hero (telón abierto) | Interior de un teatro a la italiana visto desde el patio de butacas con el telón de terciopelo rojo entreabierto y luz dorada saliendo del escenario, profundidad de campo, 16:9, sin personas. |
| Plano de sala (fondo opcional) | Vista cenital abstracta de un patio de butacas de teatro con butacas curvas en granate, sin personas, iluminación tenue. |

---

## Corcho · Tienda de pesca (`templates/fishing`)

Proporción de producto: **1:1** (la ilustración actual es 300×300).
Paleta: azul verdoso profundo, aqua `#35c9b7`, arena `#f0d9a0`.

| Uso | Prompt |
| --- | --- |
| Caña spinning Lince | Caña de pescar de spinning de carbono negro con empuñadura de corcho y anillas doradas, en diagonal sobre fondo gris azulado liso. |
| Caña de trucha Alba | Caña de pescar de mosca larga y fina de color verde bosque, con detalles de hilo beige, en diagonal sobre fondo claro liso. |
| Caña de surfcasting Atlas | Caña de pescar de surfcasting de tres tramos, azul marino y blanca, apoyada en diagonal, fondo liso. |
| Carrete Brisa 3000 | Carrete de spinning de aluminio plateado con manivela negra y detalles dorados, vista lateral, fondo liso. |
| Carrete de mosca Tramo | Carrete de mosca de aluminio mecanizado verde oliva con freno de disco visible, vista lateral, fondo liso. |
| Señuelos | Minnow plateado con ojo realista y dos anzuelos triples; cucharilla ondulante dorada; vinilo shad verde pradera con cola de paleta. Un prompt por señuelo, sobre fondo liso y con gotas de agua. |
| Línea trenzada | Bobina de hilo trenzado verde musgo con el extremo suelto enrollado, fondo liso. |
| Sacadera y cubo | Sacadera plegable con red de goma negra y mango telescópico; cubo de cebo verde con bomba de aire. Fondo liso. |
| Hero | Río de montaña al amanecer con niebla y un pescador con caña lanzando, silueta, luz dorada baja, 16:9. |
| Escena de lanzado (sustituto del SVG) | Secuencia de 6 fotogramas 16:9 de un lanzado de pesca desde la orilla: de la caña cargada al corcho posado en el agua con ondas. Misma cámara fija en todos. |

---

## Barro · Motos de cross (`templates/motocross`)

Proporción de producto: **1:1** (la ilustración actual es 300×300; las motos admiten 4:3 si prefieres).
Paleta: negro asfalto, naranja `#ff5a1f`, amarillo `#ffd23f`.

| Uso | Prompt |
| --- | --- |
| Dash 125 2T | Moto de motocross naranja de 125 cc de dos tiempos, vista lateral completa, placa de número blanca con el 27, neumáticos de tacos, limpia, fondo liso gris oscuro. |
| Roca 250 4T | Moto de motocross azul de 250 cc de cuatro tiempos, vista lateral completa, horquilla invertida, placa de número, fondo liso gris oscuro. |
| Cima 450 4T | Moto de motocross naranja y negra de 450 cc, vista lateral completa, escape plateado, placa de número blanca, fondo liso gris oscuro. |
| Mini 85 2T | Minimoto de motocross naranja de 85 cc para jóvenes pilotos, vista lateral, fondo liso. |
| Casco Pro Carbono | Casco de motocross de fibra de carbono naranja y negro con visera larga y gafas, vista tres cuartos, fondo liso. |
| Botas Race | Botas de motocross negras con cierres de aluminio naranjas, par visto de lado, fondo liso. |
| Guantes y camiseta | Guantes de motocross naranjas y negros; camiseta de manga larga naranja con franjas amarillas y número, dobladas sobre fondo liso. |
| Recambios | Filtro de aire de espuma amarilla en su jaula; kit de transmisión con cadena, piñón y corona de aluminio naranja. |
| Hero | Moto de motocross en pleno salto sobre una rampa de tierra al atardecer, polvo naranja, montañas al fondo, fotografía deportiva 16:9, sin texto legible. |
| Escena de salto (sustituto del SVG) | Secuencia de 6 fotogramas 16:9 de una moto de cross rodando, subiendo una rampa, saltando y aterrizando entre polvo. Misma cámara en todos. |

---

## Vídeo con scroll

Las escenas de scroll (`FishCast`, `MotoRide` y el telón de `TheaHero`) están dibujadas en SVG y se
reproducen con el progreso del scroll, sin vídeo. Si prefieres vídeo real:

1. Genera o graba el clip (5 a 8 s, 16:9, sin audio) y expórtalo como **secuencia de fotogramas WebP**
   (de 60 a 120 fotogramas, 1280×720, máximo 60 KB cada uno) en `public/frames/<plantilla>/`.
2. Sustituye el `<svg>` de la escena por un `<canvas>` y, en el script, dibuja el fotograma
   `Math.round(progreso * (total - 1))` en cada `requestAnimationFrame` (el cálculo del progreso ya existe).
3. Deja el SVG como alternativa para `prefers-reduced-motion` y para cuando no cargue JavaScript.

Gemini genera imágenes; para vídeo real hace falta un modelo de vídeo distinto (por ejemplo Veo) o grabarlo.
