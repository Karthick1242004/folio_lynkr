import { useState } from 'react';
import { Clock } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { HoverImage } from './components/HoverImage';
import Darklogo from "./assets/33.png"
import Dark from "./assets/3.png"
import Lightlogo from './assets/44.png'
import Light from './assets/4.png'
import { RiMenu2Line } from 'react-icons/ri'

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-[#121212]' : 'bg-[#F0F0F0]'}`}>
      <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
        <header className="flex justify-between items-center mb-10 sm:mb-header-spacing">
          <button className="p-1 sm:p-2" onClick={() => setIsNavOpen(true)}>
            <RiMenu2Line className="w-6 h-6 sm:w-9 sm:h-9 dark:text-gray-400 text-gray-400" />
          </button>
          <img 
            src={isDark ? Darklogo : Lightlogo} 
            alt="Folio Lynkr" 
            className='w-logo-sm h-logo-sm sm:w-logo-lg sm:h-logo-lg ml-4 sm:ml-8'
          />
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>
        </header>
        <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
        <main className="flex flex-col items-center mt-[30%] sm:mt-[6%] justify-center text-center max420:mt-[40%] ">
          <p className="text-gray-500 text-body-sm font-normal dark:text-gray-400 p-2 fontcss tracking-widest flex items-center gap-2">
            <Clock className="w-4 h-4" />
            COMING SOON IN 2025
          </p> 
          
          <div className="relative mb-0 sm:mb-0">
            <h1 className={`name-text text-heading-md md:text-heading-lg lg:text-heading-lg leading-none font-black ${
              isDark ? 'text-[#E0F01F]' : 'text-[#1F67F0]'
            }`}>
              FOLIO
              <br />
              LYNKR
            </h1>
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <HoverImage
                src={isDark ? Dark : Light}
                alt="Portrait"
                className="w-24 h-40  md:w-36 md:h-60 rounded-t-[80px] rounded-b-[80px]  object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto px-4 sm:px-0">
            <div className={`description-text text-body-base font-light leading-relaxed ${
              isDark ? 'text-white/80' : 'text-black/80'
            }`}>
              Folio Lynkr is a dynamic website builder,
              <br className="hidden sm:block" />
              choose a template , fill out the details
              <br className="hidden sm:block" />
              and the site ready and hosted 
            </div>
          </div>
          <div className='absolute bottom-0'>
           <p className="text-gray-500 text-[10px] font-normal dark:text-gray-400 p-2 fontcss tracking-widest flex items-center gap-2">
            Powered by <a href='https://calibertech.vercel.app/'><span className='font-medium text-black dark:text-gray-100 '>@CaliberTech</span></a>
           </p> 
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;