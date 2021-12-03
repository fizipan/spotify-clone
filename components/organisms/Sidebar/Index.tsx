// Components
import LogoSpotify from '@/components/atoms/Icons/LogoSpotify';
import Menu from '@/components/organisms/Sidebar/Menu';
import Playlist from '@/components/organisms/Sidebar/Playlist';

export default function Sidebar() {
  return (
    <div className="border-r border-gray-900 h-screen w-[230px] bg-black">
      {/* Logo */}
      <div className="pt-5 pl-6">
        <LogoSpotify />
      </div>

      {/* Menu Navigation */}
      <Menu />

      {/* Menu Playlist */}
      <Playlist />

      {/* Divide */}
      <hr className="border border-gray-900 mt-2 mx-6" />
    </div>
  );
}
