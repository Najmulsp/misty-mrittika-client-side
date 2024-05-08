import { GiPaintedPottery } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-rose-50 text-base-content mt-10">
  <aside>
  
  <GiPaintedPottery className="text-5xl text-rose-400"/>
    <p className="text-3xl text-rose-400">Misty Mrittika <span className="text-xl">Arts And Crafting</span>
    <br/>
    <span className="text-2xl">©2021 Misty Mrittika. ALL RIGHTS RESERVED.</span>
    </p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Shipping</a>
    <a className="link link-hover">Wishlist</a>
    <a className="link link-hover">My Cart</a>
    <a className="link link-hover">Returns</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;