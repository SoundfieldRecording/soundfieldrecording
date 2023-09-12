import '../App.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import logo from "../media/SoundfieldLong.png";
import { Outlet } from "react-router-dom";

const Layout = () => {
  window.addEventListener('scroll', () => {
    const position = window.pageYOffset

    if (position > 150) {
      document.querySelector('.header').classList.add('pinned')
    } else if (position <= 100) {
      document.querySelector('.header').classList.remove('pinned')
    }
  })

  return (
    <>
      <div class="app-wrapper bg-neutral-900">
        <div class="header bg-neutral-800">
          <div class="big-logo mt-6 bg-neutral-800">
            <img src={logo} alt="Soundfield Logo" />
          </div>
          <div class="my-nav">
            <Nav />
          </div>
        </div>
        <div class="main-region">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
};

export default Layout;