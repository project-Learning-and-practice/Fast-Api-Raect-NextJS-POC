from pydantic import BaseModel
from typing import Optional


class Book(BaseModel):
    title: str
    author: str
    student_id: Optional[str] = None

    class Config:
        orm_mode = True
