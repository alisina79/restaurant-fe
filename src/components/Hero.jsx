import React from "react";
import "../css/Hero.css";
import "../../src/Pattern.png";
import { redirect } from "react-router-dom";
function Hero() {
  function redirectToPage() {
    window.location.href = "/menu";
  }
  return (
    <section className="Hero">
      <div class="container">
        <h1 className="title">Welcome to Bamyan-Restaurant</h1>
        <p className="subtitle">Savor the Taste of Deliciousness</p>
        <button className="button" onClick={redirectToPage}>
          View Menu
        </button>
      </div>
    </section>
  );
}

export default Hero;
