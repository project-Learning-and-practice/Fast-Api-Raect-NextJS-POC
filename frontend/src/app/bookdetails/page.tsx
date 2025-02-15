"use client";
import "./BookDetails.css";

function BookDetails() {
  return (
    <>
      <div className="book-table">
        <table className="content-table">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Auther</th>
              <th>Student ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anjana</td>
              <td>Perera</td>
              <td>111</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lahiru</td>
              <td>Perera</td>
              <td>222</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kaveeja</td>
              <td>Perera</td>
              <td>333</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookDetails;
