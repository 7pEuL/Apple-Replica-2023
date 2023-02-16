import React from 'react'

import IPhone14 from "../../Components/IPhone14/IPhone14";
import IPhone14Pro from "../../Components/IPhone14Pro/IPhone14Pro";
import PagesNav from '../PagesNav/PagesNav';

import "./iPhone.css";

const IPhone = () => {
    return (
        <>
            <div className="top-30 bg-light">
                <PagesNav
                    name="iPhone"
                    list1="Overview"
                    list2="Why iPhone"
                    list3="Tech Specs"
                />
            </div>

            <div className="wordD text-light bg-light container-fluid">
                <h1>
                    <p className="container-fluid textP m-3">
                        Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.* <i className="fa-solid fa-chevron-right ms-2"></i>
                    </p>
                </h1>
            </div>

            <IPhone14Pro NewClass="text-danger" New="New" />

            <IPhone14 NewClass="text-danger" New="New" />
        </>
    )
}

export default IPhone