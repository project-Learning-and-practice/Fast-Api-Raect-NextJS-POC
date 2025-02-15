from bson import ObjectId #handle monogo db object
from app.config import books_collection #
from app.models.bookModel import Book


async def create_book(book: Book):
    book_dict = book.dict()
    book_dict["_id"] = ObjectId()
    result = await books_collection.insert_one(book_dict)
    return str(result.inserted_id)


async def get_books():
    books = await books_collection.find().to_list(100)
    for book in books:
        book["id"] = str(book["_id"])
        del book["_id"]
    return books


async def get_book_by_id(book_id: str):
    book = await books_collection.find_one({"_id": ObjectId(book_id)})
    if book:
        book["id"] = str(book["_id"])
        del book["_id"]
        return book
    return None


async def assign_book_to_student(book_id: str, student_id: str):
    result = await books_collection.update_one(
        {"_id": ObjectId(book_id)}, {"$set": {"student_id": student_id}}
    )
    return result.modified_count
