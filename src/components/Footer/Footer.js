import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>কৃষিই সমৃদ্ধি</h4>
            <p>
              কৃষিকে ঘিরেই মানুষের সভ্যতার জাগরণ শুরু। কৃষি পৃথিবীর সবচেয়ে
              গুরুত্বপূর্ণ বিষয়। মানুষের জন্ম থেকে মৃত্যু পর্যন্ত প্রতি ক্ষেত্রে
              কৃষির কোনো বিকল্প নেই। কৃষি পৃথিবীর মূল চালিকা শক্তি।
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>আমাদের সম্পর্কে জানুন</h4>
            <ui className="list-unstyled">
              <li>আমরা কারা</li>
              <li>আমাদের উদ্দেশ্য</li>
              <li>আমাদের প্রজেক্ট</li>
              <li>সামাজিক যোগাযোগ</li>
              <li>ইমেইল করুন</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>আমাদেরকে সাহায্য করুন</h4>
            <ui className="list-unstyled">
              <li>পরামর্শ দিন</li>
              <li>ব্লগ লিখুন</li>
              <li>ফসলের ছবি পাঠান</li>
              <li>ফসলের রোগ চিহ্নিত করুন</li>
            </ui>
          </div>
        </div>
        <p className="text-1">
          <span className="roboto-normal-dune-16px">
            © 2021. All rights reserved by{" "}
          </span>
          <span className="span1roboto-normal-dune-16px">Three Comrades</span>
          <span className="roboto-normal-dune-16px">.</span>
        </p>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
