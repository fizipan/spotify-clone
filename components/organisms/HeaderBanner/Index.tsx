import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import classNames from 'classnames';

// Components
import UserAccount from '@/components/atoms/UserAccount';

const colorsBanner: string[] = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
];

export default function HeaderBanner() {
  const [colorBanner, setColorBanner] = useState<string | null>();

  const cx = classNames({
    'flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white p-8':
      true,
    [`${colorBanner}`]: true,
  });

  useEffect(() => {
    setColorBanner(shuffle(colorsBanner).pop());
  }, []);

  return (
    <div className="flex-grow">
      {/* User Account */}
      <UserAccount />

      {/* Banner */}
      <section className={cx}>
        <h1>Coding And Fun</h1>
      </section>
    </div>
  );
}
