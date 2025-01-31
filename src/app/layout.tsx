import { HeaderSVG } from '@/components/header-svg';
import { MainHeader } from '@/components/main-header';

import './globals.css';

interface IProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout(props: IProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <div className="header-background">
          <HeaderSVG />
        </div>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}
