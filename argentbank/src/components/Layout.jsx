import { Header, Footer } from '.';

const Layout = function({ Component }) {

  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
};

export default Layout;
