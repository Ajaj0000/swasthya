import React from "react";
import { Headersec } from "../../Common/Header-sec";
import { Footer } from "../../Common/Footer";
import { ContectBanner } from "../ContectUs-Banner";
import { Testimonial } from "../../Home/Testimonia";
import { PhysicianNearMe } from "../Physician-Near-Me";
import { GeneralPhysician } from "../General-Physician-Do";
import { SearchBestGeneral } from "../Search-best-General";
import { Map } from "../Map";

function ContectUs(){
    return(
        <>
        <Headersec/>
        <ContectBanner/>
        <GeneralPhysician/>
        <SearchBestGeneral/>
        {/* <PhysicianNearMe/> */}
        <Testimonial/>
        <Map/>
        <Footer/>
        
        </>
    )
}
export {ContectUs}