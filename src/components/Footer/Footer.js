import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  কৃষিই সমৃদ্ধি
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  আমাদের সম্পর্কে জানুন
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  আমাদেরকে সাহায্য করুন
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="">থ্রি কমরেডস</a>
              , কৃষক হাসলে হাসে দেশ
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
