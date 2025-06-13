## 🐱 App de Razas de Gatos

Aplicación desarrollada con **Ionic + Angular**, que consume datos de [TheCatAPI](https://thecatapi.com/) para mostrar razas de gatos con imágenes, descripción y funcionalidad de búsqueda. Incluye splash screen personalizado y diseño responsive.

---

### 🚀 Tecnologías utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular 13+](https://angular.io/)
- [Capacitor](https://capacitorjs.com/)
- [TheCatAPI](https://thecatapi.com/)
- HTML5, SCSS, TypeScript

---

### 📲 Características

- Listado de razas de gatos con nombre, imagen y botón de detalle.
- Búsqueda por nombre en inglés.
- Diseño adaptable a móviles (Android).
- Splash screen personalizado al iniciar la app.
- Uso de componentes nativos de Ionic para experiencia móvil fluida.

---

### 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/CamSdv/ionic.git
cd ionic
```

2. Instala las dependencias:

```bash
npm install
```

3. Agrega plataformas y sincroniza Capacitor:

```bash
npx cap add android
npx cap sync
```

4. Abre en Android Studio:

```bash
npx cap open android
```

5. Compila y ejecuta en tu dispositivo o emulador.

---

### 🖼️ Splash screen e íconos

Los assets fueron generados con:

```bash
npx @capacitor/assets generate
```

El splash y los íconos personalizados se encuentran en `android/app/src/main/res/`.

---

### 🔍 API usada

Esta app usa la API pública:

- [https://api.thecatapi.com/v1/breeds](https://api.thecatapi.com/v1/breeds)

No requiere autenticación ni clave para uso básico.

---

### 📁 Estructura del proyecto

```bash
src/
├── app/
│   ├── home/               # Página principal con cards
│   ├── detail/             # Detalle de cada gato con cards
│   ├── shared/
|       ├── services/       # Lógica para consumo de API
│   
│   └── ...
├── assets/                 # Splash, iconos, etc.
├── global.scss             # Estilos globales
└── index.html              # Archivo raíz
```

---

### ✅ TODO / Mejoras futuras

- Mejorar accesibilidad y diseño visual.
- Agregar favoritos o guardar razas preferidas localmente.
- Internacionalización (i18n).

---

### 📄 Licencia

MIT
