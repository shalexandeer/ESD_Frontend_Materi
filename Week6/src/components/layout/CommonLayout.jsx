import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

function CommonLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className='p-6'>{children}</main>
      <Footer />
    </div>
  );
}

export default CommonLayout;
