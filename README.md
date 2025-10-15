# FastAPI + React - Vercel Demo

Una aplicación de prueba de concepto que combina FastAPI (Python) como backend y React (con Vite) como frontend, lista para desplegar en Vercel.

## 🚀 Características

- **Backend**: FastAPI con endpoints REST
- **Frontend**: React + Vite para una interfaz rápida y moderna
- **Deploy**: Configurado para Vercel con builds automáticos

## 📋 Requisitos Previos

- Python 3.9+
- Node.js 18+
- npm o yarn

## 🛠️ Instalación y Desarrollo Local

### Backend (FastAPI)

1. Crear un entorno virtual:
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

2. Instalar dependencias:
```bash
pip install -r requirements.txt
```

3. Ejecutar el servidor de desarrollo:
```bash
uvicorn api.main:app --reload --port 8000
```

El backend estará disponible en: http://localhost:8000

### Frontend (React + Vite)

1. Instalar dependencias:
```bash
cd frontend
npm install
```

2. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

El frontend estará disponible en: http://localhost:5173

## 🌐 Desplegar en Vercel

### Opción 1: Usando Vercel CLI

1. Instalar Vercel CLI:
```bash
npm i -g vercel
```

2. Desplegar:
```bash
vercel
```

### Opción 2: Usando la interfaz web de Vercel

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente la configuración desde `vercel.json`
3. El despliegue se hará automáticamente

## 📁 Estructura del Proyecto

```
test-vercel/
├── api/
│   └── main.py          # Backend FastAPI
├── frontend/
│   ├── src/
│   │   ├── App.jsx      # Componente principal
│   │   ├── App.css      # Estilos del componente
│   │   ├── main.jsx     # Punto de entrada
│   │   └── index.css    # Estilos globales
│   ├── index.html       # HTML principal
│   ├── package.json     # Dependencias del frontend
│   └── vite.config.js   # Configuración de Vite
├── requirements.txt     # Dependencias de Python
├── vercel.json         # Configuración de Vercel
└── README.md
```

## 🔌 Endpoints de la API

- `GET /` - Mensaje de bienvenida
- `GET /api/hello` - Obtiene el mensaje "Hola Mundo" con información adicional

## 🎨 Características del Frontend

- Diseño responsive
- Gradientes modernos
- Efectos de glassmorphism
- Llamadas a la API con manejo de errores
- Estados de carga

## 📝 Notas

- El archivo `vercel.json` está configurado para manejar tanto el backend Python como el frontend estático
- CORS está habilitado en el backend para permitir peticiones desde el frontend
- En producción, considera restringir los orígenes permitidos en CORS

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📄 Licencia

Este proyecto es una prueba de concepto para fines educativos.
