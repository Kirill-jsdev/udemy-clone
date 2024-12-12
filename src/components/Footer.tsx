import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 BATMAN. All rights reserved.</p>
      <div className="footer__links">
        {["About", "Privacy Policy", "Licencing", "Contact"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="footer__link">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
