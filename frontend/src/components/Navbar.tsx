
import {Search} from "lucide-react"
export default function Navbar(){

    return(
        <nav className="w-full h-[74px] bg-white border-b border-[#e9e5f5] px-[5%] flex items-center justify-between">

     
      <div className="flex items-center gap-3">
        <img
          src="/icons/booktunes-logo.svg"
          alt="BookTunes logo"
          className="w-10 h-10 object-contain"
        />

        <h1 className="text-[26px] font-bold text-[#6546ee]">
          Book tunes
        </h1>
      </div>

      
      <div className="hidden md:flex items-center gap-8 h-full ml-12">
        <a
          href="/"
          className="h-full px-[18px] flex items-center text-[#5428c7] font-semibold border-b-2 border-[#5428c7]"
        >
          Home
        </a>

        <a
          href="/browse"
          className="h-full px-[18px] flex items-center text-[#17142b] font-medium hover:text-[#5428c7] transition"
        >
          Browse
        </a>

        <a
          href="/my-books"
          className="h-full px-[18px] flex items-center text-[#17142b] font-medium hover:text-[#5428c7] transition"
        >
          My Books
        </a>
      </div>

      
      <div className="flex items-center gap-4 ml-auto">

        {/* Search Icon */}
        <Search
  size={24}
  strokeWidth={1.8}
  className="text-purple-700 hover:text-purple-900"
/>

       
        <button className="px-6 py-[10px] rounded-lg border border-[#c8b8f5] text-[#5428c7] font-semibold text-[15px] hover:bg-purple-50 transition">
          Log in
        </button>

        
        <button className="px-6 py-[10px] rounded-lg bg-[#5428c7] border border-[#5428c7] text-white font-semibold text-[15px] hover:bg-[#4220a5] transition">
          Sign up
        </button>

      </div>

    </nav>
  );
};

    
