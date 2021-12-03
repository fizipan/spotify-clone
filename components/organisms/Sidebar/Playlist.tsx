// Components
import PlaylistItem from '@/components/organisms/Sidebar/PlaylistItem';
import CreateIcon from '@/components/atoms/Icons/CreateIcon';
import LikeIcon from '@/components/atoms/Icons/LikeIcon';

export default function Playlist() {
  return (
    <div className="pt-6 px-6">
      <h5 className="text-gray-400 text-xs font-bold tracking-[1.2px]">
        PLAYLISTS
      </h5>

      <div className="pt-2">
        <ul>
          <PlaylistItem
            title="Create Playlist"
            Icon={CreateIcon}
            url="/create-playlist"
          />
          <PlaylistItem
            title="Liked Songs"
            Icon={LikeIcon}
            url="/liked-songs"
          />
        </ul>
      </div>
    </div>
  );
}
