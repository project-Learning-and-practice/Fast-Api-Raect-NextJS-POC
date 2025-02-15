from pydantic import BaseModel


class BookSchema(BaseModel):
    title: str
    author: str
    student_id: str


class BookResponse(BookSchema):
    id: str
