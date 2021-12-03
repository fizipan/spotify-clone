import React from 'react';
import Link from 'next/link';

interface PlaylistItemProps {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { title, Icon, url } = props;
  return (
    <li className="py-2 group">
      <Link href={url}>
        <a className="text-white text-opacity-70 group-hover:text-opacity-100 text-base font-bold flex space-x-4 items-center">
          <Icon className="w-8 h-8" />
          <div>{title}</div>
        </a>
      </Link>
    </li>
  );
}
