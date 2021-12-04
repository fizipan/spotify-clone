import { ChevronDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function UserAccount() {
  return (
    <header className="absolute top-5 right-2">
      <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
        <Image
          src="/assets/images/user-account.png"
          className="rounded-full"
          width={40}
          height={40}
          alt="user image"
        />
        <h2 className="text-white">Sayhna Manga</h2>
        <ChevronDownIcon className="w-5 h-5 text-white" />
      </div>
    </header>
  );
}
