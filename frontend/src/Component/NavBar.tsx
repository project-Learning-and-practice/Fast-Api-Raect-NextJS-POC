import Link from "next/link";
import React from "react";
import Links from "./Links/Links";

function NavBar() {
  return (
    <div className="navcontent">
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/studentform">Student Registration</Link>
            </li>
            <li>
              <Link href="/bookdetails">Book details</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
