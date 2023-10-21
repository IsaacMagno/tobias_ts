import React from "react";
import image404 from "/public/404.webp";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-900">
      <Image src={image404} alt="Not found" className="" />
      <h1 className="text-xl lg:text-3xl font-bold">Página não encontrada</h1>
      <Link
        href="/"
        className="bg-zinc-950 p-2 lg:p-3 rounded font-bold mt-12 hover:opacity-70 "
      >
        Voltar
      </Link>
    </div>
  );
};

export default NotFound;
