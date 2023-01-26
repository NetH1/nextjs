import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import logo from '../../public/assets/logo.png'

const Header: FC = () => {
    const header_bg = 'bg-green-600 text-white'
  return (
    <header className={header_bg}>
      <ul className="flex justify-between container mx-auto items-center">
          <div className={header_bg}><Link href={'/'}><Image src={logo} alt='logo' width={150} height={150}/></Link></div>
          <div className="flex text-2xl gap-x-8">
          <Link href={'/'}><li>Главная</li></Link>
          <Link href={'/About'}><li>О нас</li></Link>
          <Link href={'/Contacts'}><li>Контакты</li></Link>
          <Link href={'/Store'}><li>Товары</li></Link>
          </div>
      </ul>
    </header>
  );
};

export default Header;
