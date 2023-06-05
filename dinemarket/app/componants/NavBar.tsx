import { RiMenu3Line } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
function NavBar() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-6 ml-14">
        <img src={"Logo.webp"} alt="Logo" width="140" height="25"></img>{" "}
        <ul className="grid grid-row-7 lg:grid-cols-7">
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
            <Link href={"./allProducts"}>All Products</Link>
          </li>
          <li>
            <textarea></textarea>
          </li>
          <li>
            <Link href={"./cart"}>
              {""}
              <CgShoppingCart />
            </Link>
          </li>
          <li>
            <RiMenu3Line />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
