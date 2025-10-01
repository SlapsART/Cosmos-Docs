---
title: Introducción para DEVS
description: A guide in my new Starlight docs site.
---


MUI es la librería de componentes de interfaz de usuario de React que usamos para implementar diseños en Sincosoft. Originalmene esta librería la implementa Material Design de Google.

[Documentación de MUI](https://mui.com/material-ui/getting-started/).

### Instalación
Comandos de instalacion:

1. ##### Libreria personalizada:

   ```js
   npm install componentes-sinco
   ```
2. ##### Material-UI:

   ```js
    npm install @mui/material @mui/styled-engine-sc styled-components.
   ```
3. ##### Styled-components:

   ```js
    npm install @mui/material @mui/styled-engine-sc styled-components.
   ```
4. ##### Mui iconos SVG:

   ```js
    npm install @mui/icons-material.
   ```

### Importación y uso del Theme de Sinco en su proyecto

Para utilizar los componentes de la librería Sinco correctamente, tu proyecto debe estar envuelto dentro de la etiqueta `<ThemeProvider>` que proporciona el tema personalizado de MUI.

```bash title="Instalando dependencias…"
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from '@mui/material/styles';
import { SincoTheme } from 'componentes-sinco'; // o AdproSincoTheme, ADCTheme
import App from './App';

const Root = () => (
 <StrictMode>
    <ThemeProvider theme={SincoTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

#### Fuentes de tipografia:

Vía Fontsource: npm install @fontsource/roboto y luego en su archivo de entrada

```bash title="Instalando dependencias…"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

Vía Fontsource: npm install @fontsource/roboto y luego en su archivo de entrada

```bash title="Instalando dependencias…"
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

#### MUI X

MUI X es una colección de componentes avanzados que en incluye: Data Grid, Date and Time pickers , Charts, etc Actualmente Sincosoft cuenta con licencia Pro activa par el uso de estos componentes con caracteristicas mas avanzadas.

Instrucciones de instalacion:
- [Data Grid](https://mui.com/x/react-data-grid/getting-started/#installation)
- [Date and Time pickers](https://mui.com/x/react-date-pickers/getting-started/#installation)
- [Charts](https://mui.com/x/react-date-pickers/getting-started/#installation)
- [TreeView](https://mui.com/x/react-tree-view/)


