import { Sora } from "next/font/google";
import { SiTwitter } from "react-icons/si";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer className="ml-14 mt-20">
          <div className="grid lg:grid-cols-4 lg:gap-20">
            <div>
              <img src="./logo.webp" width={180} height={30}></img>
              <p className="mt-10 font-normal text-slate-600">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
              <div>
                <div className="flex mt-10 gap-10">
                  <div className="p-2 rounded-lg bg-slate-100">
                    <SiTwitter />
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100">
                    {" "}
                    <TiSocialFacebook />
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100">
                    {" "}
                    <RiLinkedinFill />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="footer li">
                <li>
                  <h3 className="text-lg font-bold">Company</h3>
                </li>
                <li>About</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>How it Works</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <ul className="footer li">
                <li>
                  <h3 className="text-lg font-bold">Support</h3>
                </li>
                <li>Support Career</li>
                <li>24h Service</li>
                <li>Quick Chat</li>
              </ul>
            </div>
            <div>
              <ul className="footer li">
                <li>
                  <h3 className="text-lg font-bold">Contact</h3>
                </li>
                <li>WhatsApp</li>
                <li>Support 24h</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
