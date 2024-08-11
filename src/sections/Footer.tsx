import Logo from '@/assets/logo.svg'
import Twitter from '@/assets/social-x.svg'
import Instagram from '@/assets/social-instagram.svg'
import Yt from '@/assets/social-youtube.svg'

export const Footer = () => {
  return <footer className='py-5 border-t border-white/15'>
    <div className="container">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center ">
        <div className="flex gap-2 items-center lg:flex-1">
          <Logo className="h-6 w-6"/>
          <div className="font-medium ">AI Startup Landing Page</div>
        </div>
          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7  lg:justify-center">
            <a href="#" className="text-white/70 hover:text-white text-xs  md:text-md">Features</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-md">Developers</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-md">Company</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-md">Blog</a>
            <a href="#" className="text-white/70 hover:text-white text-xs md:text-md">Change log</a>
          </nav>
        <div className="flex gap-5 lg:flex-1 lg:justify-end">
          <Twitter className="text-white/40 hover:text-white text-xs transition" />
          <Instagram className="text-white/40 hover:text-white text-xs transition" />
          <Yt className="text-white/40 hover:text-white text-xs transition" />
        </div>
      </div>
    </div>
  </footer>;
};
