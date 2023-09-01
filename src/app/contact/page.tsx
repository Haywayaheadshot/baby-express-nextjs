import React from "react";
import NavWrapper from "../navWrapper";
import Map from "../map/map";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baby Express | Contact Page',
  description: 'Locate Baby Express!',
}

const Contact = () => {
  return (
    <NavWrapper>
      <div className="bg-black py-20">
          <h1>CONTACT!</h1>
          <p>
            You can reach us on 0547743021
          </p>
          <Map />
      </div>
    </NavWrapper>
  )
}

export default Contact;