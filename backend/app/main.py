from fastapi import FastAPI # type: ignore
from app.routers import aboutnation
from app.utils.config import settings
import uvicorn
from fastapi.middleware.cors import CORSMiddleware # type: ignore

app = FastAPI(title="Culturology")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://culturology-nfactorial.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(aboutnation.router, prefix="/nation")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)