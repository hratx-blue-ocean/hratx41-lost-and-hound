import React from "react";
import "../Styles/footer.scss";

const Footer = props => {
  return (
    <div className="footer">
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">
          © 2019 Paw-Pi-right:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            &nbsp;Lost and Hound
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
