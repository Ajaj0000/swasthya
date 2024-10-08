import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Footer } from "../../Common/Footer";
import { FaqBanner } from "../Faq-Banner";
import { Faq } from "../Faq";

function FaqComponent() {
  return (
    <>
      <Headersec />
      <FaqBanner />
      <Faq />
      <Footer />
    </>
  );
}
export { FaqComponent };
