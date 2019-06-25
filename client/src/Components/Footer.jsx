import React from "react";
import "../Styles/splash.scss";
import { Container } from "react-bootstrap";

const Footer = props => {
  return (
    <>
      <div className="footer">
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>
                  Baby dog doo doo doo doo doo baby dog doo doo doo doo doo baby
                  dog baby shark doo doo doo doo doo baby shark
                </p>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="test-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Homepage</a>
                  </li>
                  <li>
                    <a href="#!">Lost</a>
                  </li>
                  <li>
                    <a href="#!">Found</a>
                  </li>
                  <li>
                    <a href="#!">About</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Homepage</a>
                  </li>
                  <li>
                    <a href="#!">Lost</a>
                  </li>
                  <li>
                    <a href="#!">Found</a>
                  </li>
                  <li>
                    <a href="#!">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2019 Paw-Pi-right:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              &nbsp;Lost and Hound
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
