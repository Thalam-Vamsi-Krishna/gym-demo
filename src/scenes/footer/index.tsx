import Logo from "@/assets/Logo.png";
import {
  UilInstagram,
  UilFacebook,
  UilYoutube,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Where Trend meets Tradition in Fitness Excellence !
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Follow Us</h4>
          <p className="my-5">
            <a href="www.instagram.com">
              <UilInstagram />
              <p>instagram/evogym</p>
            </a>
          </p>
          <p className="my-5">
            <a href="www.facebook.com">
              <UilFacebook />
              <p>facebook/evogym</p>
            </a>
          </p>
          <p className="my-5">
            <a href="www.youtube.com">
              <UilYoutube />
              <p>youtube/evogym</p>
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Neeladri Nagar, Electronic city, Bangalore - 560100.
          </p>
          <p>+91 7093670347</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
