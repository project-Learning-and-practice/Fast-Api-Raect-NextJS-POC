from pydantic import BaseModel
from typing import Optional


class Student(BaseModel):
    id: Optional[str] = None
    name: str
    age: int
    email: str

    class Config:
        orm_mode = True
