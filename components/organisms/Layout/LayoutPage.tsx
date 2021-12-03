// Components
import { ReactChild } from 'react';

// Components
import Sidebar from '@/components/organisms/Sidebar/Index';

interface LayoutPageProps {
  children: ReactChild;
}

export default function LayoutPage(props: LayoutPageProps) {
  const { children } = props;

  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        {children}
      </main>
    </div>
  );
}
