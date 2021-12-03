import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  const { title, Icon, url } = props;

  return (
    <li className="py-2 pl-4 group hover:bg-gray-900 rounded">
      <Link href={url}>
        <a className="text-white text-opacity-70 group-hover:text-opacity-100 text-base font-bold flex">
          <Icon className="w-6 h-6 mr-4" /> {title}
        </a>
      </Link>
    </li>
  );
}
