from fastapi import APIRouter
from app.api.bookCrud import create_book, get_books, get_book_by_id, assign_book_to_student
from app.models.bookModel import Book

router = APIRouter()


@router.post("/books/")
async def add_book(book: Book):
    return {"id": await create_book(book)}


@router.get("/books/")
async def list_books():
    return await get_books()


@router.get("/books/{book_id}")
async def book_detail(book_id: str):
    return await get_book_by_id(book_id)


@router.put("/books/{book_id}/assign/{student_id}")
async def assign_book(book_id: str, student_id: str):
    updated_count = await assign_book_to_student(book_id, student_id)
    return {"updated_count": updated_count}
