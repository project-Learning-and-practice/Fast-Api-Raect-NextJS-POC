from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.student_routes import router as student_router
from app.routes.book_routes import router as book_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(student_router, prefix="/api")
app.include_router(book_router, prefix="/api")


@app.get("/")
def read_root():
    return {"message": "Welcome to Book Management System with Change.... FastAPI!......."}
