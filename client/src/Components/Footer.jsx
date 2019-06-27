import React from "react";
import "../Styles/footer.scss";

const Footer = props => {
  return (
    <>
      <footer className="page-footer font-small blue">
        <div id="footer-text" className="footer-copyright text-center">
          © 2019 pawpyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            &nbsp;lost and hound
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
