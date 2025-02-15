"use client";
import React from "react";
import "./TableComponent.css";

function TableComponent() {
  return (
    <div>
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anjana</td>
            <td>Perera</td>
            <td>k@gmail.com</td>
            <td>077777777</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lahiru</td>
            <td>Perera</td>
            <td>k@gmail.com</td>
            <td>077777777</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Kaveeja</td>
            <td>Perera</td>
            <td>k@gmail.com</td>
            <td>077777777</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
