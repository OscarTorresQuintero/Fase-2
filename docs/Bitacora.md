# ✅ Bitácora #1

## 📅 Fecha
03 / Nov / 2025

## 👤 Responsable
Sara Lucia Rodriguez Olmos

## ✅ Tipo de aporte
Corrección de contenido y accesibilidad

---

## 📝 Descripción
Se realizó una revisión general del contenido del sitio **Floraria** para corregir errores textuales presentes en el documento principal `index.html`.  
Asimismo, se mejoró la accesibilidad al actualizar la estructura semántica y los atributos alternativos de imágenes.

Este ajuste facilita una mejor comprensión del contenido por parte de usuarios y lectores de pantalla.

---

## ✅ Cambios realizados
- Corrección de error tipográfico: “vairiedad” → “variedad”
- Ajuste de atributos `alt` en imágenes
- Homologación del nombre del proyecto en el texto (“Floraira” → “Floraria”)
- Ajuste de placeholders en formulario
- Revisión semántica de títulos (`<h1>`, `<h2>`, `<h3>`)

---

## 📎 Evidencias
```html
En <strong>Floraria</strong> podrás encontrar el paraíso de las
flores con variedad, frescura y belleza incomparables.
```



# ✅ Bitácora #2

## 📅 Fecha
03 / Nov / 2025

## 👤 Responsable
Adriana Lucia Daza Murcia 

## ✅ Tipo de aporte
Organización semántica de estructura

---

## 📝 Descripción
Se reorganizó la jerarquía semántica para mejorar la interpretación del contenido.  
También se documentaron secciones principales mediante comentarios internos en el HTML.

---

## ✅ Cambios realizados
- Organización por secciones: `#inicio`, `#flores`, `#contacto`
- Mejora en jerarquía textual
- Normalización de tarjetas `<article>`
- Comentarios internos agregados en HTML
- Sin cambios en `style.css` (solo contiene scroll-behavior)

---

## 📎 Evidencias
```html
<!-- Sección catálogo de flores -->
<section id="flores">
```



# ✅ Bitácora #3

## 📅 Fecha
05 / Nov / 2025

## 👤 Responsable
Valery Eilin Palacios Rocha

## ✅ Tipo de aporte
Preparación para interactividad (JS)

---

## 📝 Descripción
Se analizó la estructura del catálogo de flores para futuras funcionalidades interactivas, como efectos hover.  
Se propuso la creación de un archivo `main.js`.

---

## ✅ Cambios realizados
- Identificación de elementos interactivos (tarjetas)
- Propuesta de creación de archivo `./js/main.js`
- Inserción sugerida de `<script src="./js/main.js">`
- Diseño de funciones JS para hover

```js
const cards = document.querySelectorAll("article");
cards.forEach(card=>{
    card.addEventListener("mouseenter",()=>card.classList.add("brightness-110"));
    card.addEventListener("mouseleave",()=>card.classList.remove("brightness-110"));
});
```

---

## 📎 Evidencias
Tarjetas ubicadas en secciones “Flores recomendadas” y “Flores populares”.



  # ✅ Bitácora #4

## 📅 Fecha
06 / Nov / 2025

## 👤 Responsable
Oscar Torres Quintero

## ✅ Tipo de aporte
Mejoras visuales globales

---

## 📝 Descripción
Se revisó el comportamiento visual general del sitio y se verificó el desplazamiento suave entre secciones definido en `style.css`.

Se documentó la recomendación de mover estilos repetidos del HTML hacia `style.css`.

---

## ✅ Cambios realizados
- Confirmación de desplazamiento suave:
```css
html {
    scroll-behavior: smooth;
}
```
- Revisión de enlace interno del CTA “Ver flores”
- Análisis de uniformidad de imágenes
- Recomendación de consolidación de estilos en CSS

---

## 📎 Evidencias
```html
<a href="#flores" class="mx-auto ...">Ver Flores</a>
```
