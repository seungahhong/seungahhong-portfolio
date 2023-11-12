import { FunctionComponent, ReactNode } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-[100vh] my-0 mx-auto">
      <Navbar />
      <main className="flex justify-center flex-grow pl-0 lg:pl-[25%]">
        {children}
      </main>
      <section className="pl-0 lg:pl-[25%]">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
