import React from "react";
import Link from "next/link";
const Navbar = () => {
  const { user, username } = {};
  return (
    <nav className=" shadow-md py-4">
      <ul className="flex justify-around ">
        <li>
          <Link href="/">
            <a className="bg-black text-white p-3">Feed</a>
          </Link>
        </li>
        {username && (
          <>
            <li>
              <Link href="/admin">
                <a>Write Posts</a>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <>
                  <img src={user?.photoURL} alt="userimage" />
                </>
              </Link>
            </li>
          </>
        )}
        {!username && (
          <>
            <li>
              <Link href="/enter">
                <a className="bg-blue-500 text-white p-3">Log in</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
