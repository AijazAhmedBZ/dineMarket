import Image from "next/image";
import React from "react";
import Link from "next/link";
function NavBar() {
  return (
    <div>
      <div className="flex">
        <img src={"Logo.webp"} alt="Logo" width="140" height="25"></img>
        <ul className="flex w-auto">
          <li>
            <Link href={"./female"}>Female</Link>
          </li>
          <li>
            <Link href={"./male"}>Male</Link>
          </li>
          <li>
            <Link href={"./kids"}>Kids</Link>
          </li>
          <li>
            <Link href={"./products"}>All Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
