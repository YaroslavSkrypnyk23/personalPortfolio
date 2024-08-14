import {
  IoLogoGithub,
} from "react-icons/io5";
import { FaTelegram, FaFacebook, FaInstagramSquare } from "react-icons/fa";


function SideBar() {
  return (
    <div className="w-[90px] h-screen border-r-[1px] dark:bg-slate-800 fixed flex flex-col justify-around items-center mt-[90px]">
      <h2 className="-rotate-90 tracking-widest font-bold text-[20px] uppercase">Homepage</h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <a className="text-black transition-all ease-in-out" href="https://github.com/YaroslavSkrypnyk23">
          <IoLogoGithub className="hover:scale-110 text-black w-10 h-10" />
        </a>
        <a className="text-black transition-all ease-in-out" href="https://t.me/Yar4ick">
        <FaTelegram className="hover:scale-110 text-black w-10 h-10" />
        </a>
        <a className="text-black transition-all ease-in-out" href="https://www.facebook.com/profile.php?id=100087320528858">
        <FaFacebook className="hover:scale-110 text-black w-10 h-10" />
        </a>
        <a className="text-black transition-all ease-in-out" href="https://www.instagram.com/yarchik280/">
          <FaInstagramSquare className="hover:scale-110 text-black w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
