'use client';
import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import { Button } from '@/components/Button';
import { useState } from 'react';
import CloseIcon from '@/assets/icon-close.svg'


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return <header  className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 shadow-none">
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
        <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
          <div className="">
            <LogoIcon className="h-8 w-8 cursor-pointer hover:scale-125 ease-in-out duration-300"/>
          </div>
        </div>
        <div className="hidden md:block">
          <nav className='flex gap-8 text-sm '>
            <a href="#" className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Features</a>
            <a href="#" className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Developers</a>
            <a href="#" className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Pricing</a>
            <a href="#" className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Changelog</a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <div onClick={handleClick} className="md:hidden cursor-pointer">
              <MenuIcon className={`${isOpen ? 'hidden' : 'block'}`}/>
              <CloseIcon className={`${isOpen ? 'block' : 'hidden'}`}/>
            </div>
        </div>
      </div>
    </div>

    {/* mobile menu */}
    <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 mt-[70px] w-full backdrop-blur p-4 md:hidden transition-all duration-500 border-b border-white/15 border-t ease-in-out overflow-hidden -z-10 `}>
        <nav className="flex flex-col gap-4 text-sm  items-center">
          <a href="#" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Features</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Developers</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Pricing</a>
          <a href="#" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition ease-in-out duration-300 hover:scale-110">Changelog</a>
        </nav>
      </div>
  </header>;
};
