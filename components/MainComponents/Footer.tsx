import Image from "next/image";
import { FC } from "react";

import logo from '../../public/assets/logo.png'

export const Footer: FC = () => {
  return (
    <footer className="bg-green-600 text-white py-5">
      <ul className="container mx-auto">
        <li><Image src={logo} alt='logo' width={150} height={150} /></li>
      </ul>
    </footer>
  );
};
