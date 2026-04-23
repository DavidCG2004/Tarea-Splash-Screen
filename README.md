# 📸 Photo Gallery App

<div align="center">

![Ionic](https://img.shields.io/badge/Ionic-7.x-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-17.x-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
![Android](https://img.shields.io/badge/Android-Compatible-3DDC84?style=for-the-badge&logo=android&logoColor=white)

**Aplicación móvil de galería de fotos construida con Ionic + Angular + Capacitor**

</div>

---

## 📋 Tabla de contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Capturas de pantalla — Desktop](#-capturas-de-pantalla--desktop)
- [Capturas de pantalla — Móvil](#-capturas-de-pantalla--móvil)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Autor](#-autor)

---

## 📖 Descripción

Photo Gallery es una aplicación móvil desarrollada con **Ionic Framework**, **Angular** y **Capacitor** que permite tomar fotos con la cámara del dispositivo, almacenarlas localmente, gestionarlas y compartirlas. Incluye modo nocturno, splash screen personalizado y soporte nativo para Android.

---

## ✨ Características

| Función | Descripción |
|---|---|
| 📷 **Tomar fotos** | Captura imágenes directamente desde la cámara del dispositivo |
| 🗂️ **Galería persistente** | Las fotos se guardan localmente usando `@capacitor/filesystem` y `@capacitor/preferences` |
| 🗑️ **Eliminar fotos** | Selecciona y elimina fotos con confirmación |
| 📤 **Compartir fotos** | Comparte imágenes usando el share nativo del dispositivo |
| 🌙 **Modo nocturno** | Alterna entre tema claro y oscuro desde cualquier tab |
| 💬 **Alertas personalizadas** | Sistema de alertas reutilizables desde el servicio central |
| 🚀 **Splash Screen** | Pantalla de bienvenida animada con degradado personalizado |

---

## 🛠️ Tecnologías

- [Ionic Framework 7](https://ionicframework.com/)
- [Angular 17](https://angular.io/)
- [Capacitor 6](https://capacitorjs.com/)
- [@capacitor/camera](https://capacitorjs.com/docs/apis/camera)
- [@capacitor/filesystem](https://capacitorjs.com/docs/apis/filesystem)
- [@capacitor/preferences](https://capacitorjs.com/docs/apis/preferences)
- [@capacitor/share](https://capacitorjs.com/docs/apis/share)
- [@capacitor/splash-screen](https://capacitorjs.com/docs/apis/splash-screen)

---

## ⚙️ Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/photo-gallery.git
cd photo-gallery

# 2. Instalar dependencias
npm install

# 3. Ejecutar en navegador
ionic serve

# 4. Compilar para Android
ionic build
npx cap copy android
npx cap open android
```

---

## 📱 Uso

1. Abre la app en tu dispositivo Android
2. Ve al **Tab 2 (Photo Gallery)** y presiona el botón de cámara para tomar una foto
3. Toca una foto para **seleccionarla** — aparecerán los íconos de compartir 📤 y eliminar 🗑️ en la barra superior
4. Desde el **Tab 1** puedes alternar el **modo nocturno** con el botón 🌙 en la esquina superior derecha

---

## 🖥️ Capturas de pantalla — Desktop

> Ejecutando la aplicación en el navegador con `ionic serve`

<br>

### Tab 1 — Menú principal (Modo claro)
<!-- Reemplaza la ruta con tu captura real -->
![Tab 1 Modo Claro](./screenshots/desktop/tab1-light.png)

<br>

### Tab 1 — Menú principal (Modo oscuro)
<!-- Reemplaza la ruta con tu captura real -->
![Tab 1 Modo Oscuro](./screenshots/desktop/tab1-dark.png)

<br>

### Tab 2 — Galería de fotos
<!-- Reemplaza la ruta con tu captura real -->
![Tab 2 Galería](./screenshots/desktop/tab2-gallery.png)

<br>

### Tab 2 — Foto seleccionada (opciones visibles)
<!-- Reemplaza la ruta con tu captura real -->
![Tab 2 Selección](./screenshots/desktop/tab2-selected.png)

---

## 📲 Capturas de pantalla — Móvil

> Ejecutando la aplicación en dispositivo Android físico

<br>

<div align="center">

### Splash Screen
<!-- Reemplaza la ruta con tu captura real -->
<img src="./screenshots/mobile/splash.jpg" width="250" alt="Splash Screen"/>

&nbsp;&nbsp;&nbsp;

### Tab 1 — Modo claro
<!-- Reemplaza la ruta con tu captura real -->
<img src="./screenshots/mobile/tab1-light.jpg" width="250" alt="Tab 1 Claro"/>

&nbsp;&nbsp;&nbsp;

### Tab 1 — Modo oscuro
<!-- Reemplaza la ruta con tu captura real -->
<img src="./screenshots/mobile/tab1-dark.jpg" width="250" alt="Tab 1 Oscuro"/>

</div>

<br>

<div align="center">

### Tab 2 — Galería vacía
<!-- Reemplaza la ruta con tu captura real -->
<img src="./screenshots/mobile/tab2-empty.jpg" width="250" alt="Galería vacía"/>

&nbsp;&nbsp;&nbsp;

### Tab 2 — Galería con fotos
<!-- Reemplaza la ruta con tu captura real -->
<img src="./screenshots/mobile/tab2-photos.jpg" width="250" alt="Galería con fotos"/>

&nbsp;&nbsp;&nbsp;

### Tab 2 — Foto seleccionada
<!-- Reemplaza la ruta con tu captura real -->
<img src="./screenshots/mobile/tab2-selected.jpg" width="250" alt="Foto seleccionada"/>

</div>

---

## 🗂️ Estructura del proyecto

```
src/
├── app/
│   ├── splash/
│   │   ├── splash.component.ts
│   │   ├── splash.component.html
│   │   └── splash.component.scss
│   ├── services/
│   │   └── photo.service.ts       # Lógica central: cámara, dark mode, share, delete
│   ├── tab1/
│   │   ├── tab1.page.ts
│   │   ├── tab1.page.html         # Botón modo nocturno + alerta
│   │   └── tab1.page.scss
│   ├── tab2/
│   │   ├── tab2.page.ts
│   │   ├── tab2.page.html         # Galería + selección + share + delete
│   │   └── tab2.page.scss
│   ├── app.component.ts           # Control del splash screen
│   ├── app.component.html
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
│   ├── icon-only.png              # Ícono de la app (1024x1024)
│   └── splash.png                 # Imagen base del splash (2732x2732)
└── global.scss                    # Variables de dark mode
```

---

## 👤 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)

---

<div align="center">
  Hecho con ❤️ usando Ionic + Angular + Capacitor
</div>
