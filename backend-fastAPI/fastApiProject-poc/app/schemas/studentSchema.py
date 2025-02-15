from pydantic import BaseModel
from typing import List, Optional


class StudentSchema(BaseModel):
    name: str
    age: int
    email: str


class StudentResponse(StudentSchema):
    id: str
    books: Optional[List[str]] = []
