import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

function Header() {
  return (
    <header className="border-b borderlight">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href="#">
            {/* <img src="/images/logo.png" alt="logo" width={160} height={60} /> */}
            <h1 className="text-2xl font-bold">
              <span className="text-green-500">Belief</span> Center
            </h1>
          </Link>
          <button className="cursor-pointer text-sm px-6 py-2 border border-gray-200 rounded-lg hover:border-gray-300 transition">Sign In</button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
