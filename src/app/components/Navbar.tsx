import Link from 'next/link';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

export default function Navbar(){
  return (
    <nav className="grid grid-cols-12 items-center mx-auto px-8 py-4 max-w-[1400px]">
      <ul className="flex md:justify-end sm:justify-start justify-center sm:col-span-7 col-span-12 space-x-8 text-gray-800 font-medium">
        <li>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Shop" className="hover:text-black">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/Blog" className="hover:text-black">
            About
          </Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-black">
            Contact
          </Link>
        </li>
      </ul>

      <ul className="flex sm:justify-end justify-center gap-8 sm:gap-0 sm:col-span-5 col-span-12 items-center space-x-6 text-gray-800 mt-2 sm:mt-0">
        <li>
          <Link href={'/Account'}>
          <FaRegUser className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
        <li>
          <Link href={'/Checkout'}>
          <FiSearch className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
        <li>
          <Link href={'/SingleProduct'}>
          <AiOutlineHeart className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
        <li><Link href={'/Cart'}>
          <AiOutlineShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};


