from bson import ObjectId
from app.config import students_collection
from app.models.studentModel import Student


async def delete_student(student_id: str):
    result = await students_collection.delete_one({"_id": ObjectId(student_id)})
    return result.deleted_count


async def create_student(student: Student):
    student_dict = student.dict()
    student_dict["_id"] = ObjectId()
    result = await students_collection.insert_one(student_dict)
    return str(result.inserted_id)


async def get_students():
    students = await students_collection.find().to_list(100)
    for student in students:
        student["id"] = str(student["_id"])
        del student["_id"]
    return students


async def get_student_by_id(student_id: str):
    student = await students_collection.find_one({"_id": ObjectId(student_id)})
    if student:
        student["id"] = str(student["_id"])
        del student["_id"]
        return student
    return None
