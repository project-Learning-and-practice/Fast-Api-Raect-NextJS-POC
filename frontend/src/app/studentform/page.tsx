"use client";
import React, { useState } from "react";
import "./FormComponent.css";
import StudentTable from "@/app/Table/Page";
import { useAppDispatch } from "@/app/redux/store";
import student from "../Models/studentModel";
import { addStudent } from "../redux/slices/studentSlice";

function FormComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: name,
      age: age,
      email: email,
    };
    const studentData = new student(name, age, email);
    // const result = await fetch("http://localhost:8000/api/students/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // axios
    //   .post("http://localhost:8000/api/students/", data)
    //   .then((response) => console.log("Data created:", response.data))
    //   .catch((error) => console.error("Error:", error));

    dispatch(addStudent(studentData));
  };

  return (
    <div className="form-outer">
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">Student Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="studentname"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="lastname">Student age</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br />
        <button className="save-btn" type="submit">
          Save
        </button>
        <button className="update-btn">Update</button>
        <button className="delete-btn">Delete</button>
        <button className="clear-btn">Clear</button>
      </form>
      <StudentTable />
    </div>
  );
}

export default FormComponent;
