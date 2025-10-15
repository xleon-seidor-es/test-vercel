from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configurar CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especifica los dominios permitidos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "¡Hola Mundo desde FastAPI!"}

@app.get("/api/hello")
def get_hello():
    return {
        "message": "¡Hola Mundo!",
        "description": "Esta es una API creada con FastAPI",
        "status": "success"
    }
