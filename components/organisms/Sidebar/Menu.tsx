import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/react/outline';

// Components
import MenuItem from '@/components/organisms/Sidebar/MenuItem';

export default function Menu() {
  return (
    <div className="pt-6 px-2">
      <ul className="space-y-2">
        <MenuItem title="Home" Icon={HomeIcon} url="/home" />
        <MenuItem title="Search" Icon={SearchIcon} url="/search" />
        <MenuItem title="Your Library" Icon={LibraryIcon} url="/library" />
      </ul>
    </div>
  );
}
