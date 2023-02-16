import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import IPhone14 from "../../Components/IPhone14/IPhone14";
// import IPhone14Pro from "../../Components/IPhone14Pro/IPhone14Pro";

// import "./IPhones.css";

const IPhones = () => {
    const [iPhones, setIPhoneProducts] = useState([]);

    useEffect(() => {
        const fetchIPhoneProducts = async () => {
            try {
                // const response = await fetch("http://localhost:2023/iPhone");
                const response = await fetch("/Data.json");
                const jsonIPhone = await response.json();

                setIPhoneProducts(jsonIPhone.iPhoneProducts);
                // console.log(jsonIPhone.iPhoneProducts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchIPhoneProducts();
    }, []);

    // console.log(iPhones)

    return (
        <>
            <div className="word text-light bg-light container-fluid">
                <h1>
                    <p className="container-fluid grey m-3">
                        Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*
                        <i className="fa-solid fa-chevron-right ms-2"></i>
                    </p>
                </h1>
            </div>

            {iPhones?.map((product) => {
                let id = product.Product_url;
                let title = product.Product_name;
                // let img = product.Product_img;
                let Brief = product.Product_description;
                // let StartPrice = product.Starting_price;
                // let PriceRange = product.Price_range;
                // let productPage = "/iPhone/" + id;
                // console.log(productPage);


                //  className={ product.img===ipad ? black : white}

                //  useParam() object


                return (
                    <>
                        <section className="fullHide" key={id}>
                            <section className="text-center">
                                <div className="container-fluid iphone-14 bg-imgs iphone-14 ">
                                    <div className="text-danger">New</div>
                                    <h1 className="fw-bold">{title}</h1>
                                    <h5 className="">{Brief}</h5>
                                    <div className="links">
                                        <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                                            <a href="/">Learn more</a>
                                            <i className="fa-solid fa-chevron-right pe-4"></i>
                                            <a href="/">Buy</a>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section className="fullHide" key={id}>
                            <section className="text-center">
                                <div className="container-fluid iphone-14 bg-imgs">
                                    <div className="text-danger">New</div>
                                    <h1 className="fw-bold">{title}</h1>
                                    <h5 className="">{Brief}</h5>
                                    <div className="links">
                                        <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                                            <a href="/">Learn more</a>
                                            <i className="fa-solid fa-chevron-right pe-4"></i>
                                            <a href="/">Buy</a>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </>
                )
            })}
        </>
    );
};

export default IPhones;