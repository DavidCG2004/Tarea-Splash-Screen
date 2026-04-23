<img width="1366" height="768" alt="Captura de pantalla (81)" src="https://github.com/user-attachments/assets/072784b0-3350-4e81-9658-f201593fed49" />
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
<img width="1366" height="768" alt="Captura de pantalla (89)" src="https://github.com/user-attachments/assets/f6b54115-5982-42dd-be99-1f514684eaf2" />

<br>

### Tab 1 — Menú principal (Modo oscuro)
<!-- Reemplaza la ruta con tu captura real -->
![Tab 1 Modo Oscuro](./screenshots/desktop/tab1-dark.png)
<img width="1366" height="768" alt="Captura de pantalla (81)" src="https://github.com/user-attachments/assets/27b5ccc3-cddf-466e-8a3a-4a1a34cfcc2b" />

<br>

### Tab 2 — Galería de fotos
<!-- Reemplaza la ruta con tu captura real -->
![Tab 2 Galería](./screenshots/desktop/tab2-gallery.png)
<img width="1366" height="768" alt="Captura de pantalla (82)" src="https://github.com/user-attachments/assets/3a1f823c-9bf2-41e7-96bb-e76e76628b77" />

<br>

### Tab 2 — Foto seleccionada (opciones visibles)
<!-- Reemplaza la ruta con tu captura real -->
![Tab 2 Selección](./screenshots/desktop/tab2-selected.png)
<img width="1366" height="768" alt="Captura de pantalla (90)" src="https://github.com/user-attachments/assets/d79aa86b-826f-44c1-8ea4-a1958d6133a1" />
<img width="1366" height="768" alt="Captura de pantalla (84)" src="https://github.com/user-attachments/assets/e4cc9945-52ff-4dd9-9045-51ac87ed18be" />
<img width="1366" height="768" alt="Captura de pantalla (85)" src="https://github.com/user-attachments/assets/5f0a2fbc-63ed-4c17-8ece-0a2f5a0785cc" />
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

<div align="center">
  Hecho con ❤️ usando Ionic + Angular + Capacitor
</div>
