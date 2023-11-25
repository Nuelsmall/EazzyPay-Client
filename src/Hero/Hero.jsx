import "./Hero.css";
import "../App.css";
import React from "react";
import heroImage from "../Assets/hero-image.png";
import  laptopImage  from "../Assets/working laptop.png";
import saving from "../Assets/savings.png";
import credit from "../Assets/credit_card.png";


export const Hero = () => {
  return (
    <div>
      <div className="heroMain">
        <div className="hero-right">
          <h4 className="payment-t">
            Payment Made Easy <br></br> on{" "}
            <span className="eazy-t">Eazzy Pay</span>
          </h4>
          <h6 className="platform-t">
            A platform for accepting payment, making payment and paying bills
          </h6>
          <div className="heroBtn-layout">
            <button className="btn getBtn ">Get Started</button>
            <button className="btn joinBtn ">Join Our Community</button>
          </div>
        </div>
        <div className="hero-left">
          <img className="heroImg" src={heroImage} alt="" />
        </div>
      </div>

      {/* sign up fund payment section  */}
      <div className="signFund">
        <div className="sign">
          <div className="sf-inside">
            <span><img className="laptopImg" src={laptopImage} alt="" /></span>
            <span>Sign Up</span>
            <span><p>Create a profile and confirm your identity. It's that simple to begin your crypto journey. Let's go!!</p></span>
          </div>
        </div>
        <div className="fund">
          <div className="fundInside">
            <span><img src={ saving } alt="" /></span>
            <span>Funds</span>
            <span><p>Create a profile and confirm your identity. It's that simple to begin your crypto journey. Let's go!!</p></span>
          </div>
        </div>
        <div className="pay">
          <div className="payInside">
            <span><img src={ credit } alt="" /></span>
            <span>Make Payment</span>
            <span><p>Create a profile and confirm your identity. It's that simple to begin your crypto journey. Let's go!!</p></span>
          </div>
        </div>
      </div>

      {/* Refer and Earn section */}
      <div className="referralSection">
        <div className="refer" ></div>
        <div className="referText" ></div>
        <div className="referCards" ></div>
      </div>
    </div>
  );
};
