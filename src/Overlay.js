import React, { forwardRef } from "react";
import clubLogo from "./Group 1 copy 2.png";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll"
  >
    <div style={{ height: "400vh" }}>
      <div className="dot bg">
        <h1>lockdown</h1>
        Starting in Jan. of 2020. <br /> Did you feel it? <br />
        Countless businesses took to the web not knowing how to fly, and were
        left drifting aimlessly.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot bg">
        <h1>home shopping</h1>
        The e-commerce industry lept an incredible 32.4% in 2020 alone. <br />
        38.3% of all business was Amazon. But what about the drifters?
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot bg">
        <h1>clinging on</h1>Countless businesses sought the explosive growth
        patters only acheivable online, but were met with confusion, and
        aimlessness...
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot bg">
        <h1>lacking</h1>
        <h2>
          The secret sauce the lacked...
          <br />
          was analytics.
        </h2>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot bg">
        <h1>the hammer</h1>By the time most of them scraped enough data to find
        their true north, Apple launched IOS14 smashing the hopes and dreams of
        business owners across the globe as their acquisition costs skyrocketed
        and attribution plummetted.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot bg">
        <h1>About Us</h1>We formed a new machine to meet the privacy lockdowns
        head on, and <em>stablize </em>every client we take on.
        <br /> <br />
        Bringing the big data to the hands of mid-size companies such as: Wear
        It To Heart, Dolorem Ipsum and Lauren James. They have scince grown an
        astounding 244%.
      </div>
    </div>
    <div style={{ height: "200vh" }} className="logo-container">
      <div className="dot">
        <h1>Introducing</h1>
        <img className="logo" height="250px" src={clubLogo} />
        <h2 className="bg" style={{ textalign: "center" }}></h2>
        Stablizing Business Since Janurary of 2020.
      </div>
    </div>
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
));

export default Overlay;
