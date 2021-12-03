import type { NextPage } from 'next';

// Components
import LayoutPage from '@/components/organisms/Layout/LayoutPage';
import CustomMeta from '@/components/atoms/Meta/CustomMeta';
import HeaderBanner from '@/components/organisms/HeaderBanner/Index';

const Home: NextPage = function () {
  return (
    <>
      {/* Meta */}
      <CustomMeta
        title="Spotify Clone"
        description="Build spotify with next js and tailwind CSS"
        url="https://spotify-clone-nextjs.vercel.app/"
      />

      {/* Layout */}
      <LayoutPage>
        {/* Header Banner */}
        <HeaderBanner />
      </LayoutPage>
    </>
  );
};

export default Home;
