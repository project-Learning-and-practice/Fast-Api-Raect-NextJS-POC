from fastapi import APIRouter
from app.api.studentCrud import create_student, get_students, get_student_by_id, delete_student
from app.models.studentModel import Student

router = APIRouter()


@router.post("/students/")
async def add_student(student: Student):
    print(student)
    return {"id": await create_student(student)}


@router.get("/students/")
async def list_students():
    print("Call get student")
    return await get_students()


@router.get("/students/{student_id}")
async def student_detail(student_id: str):
    return await get_student_by_id(student_id)


@router.delete("/students/{student_id}")
async def remove_student(student_id: str):
    return {"deleted_count": await delete_student(student_id)}
