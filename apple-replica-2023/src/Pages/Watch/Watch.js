import React from 'react'

import watchSE from "../../Resources/icons/22promo_logo_apple_watch_se__b85vr9ri02gi_large.png";
import watchSeries8 from "../../Resources/icons/22promo_logo_apple_watch_series_8_ee6riplsucuq_large.png";

import "./Watch.css";
import PagesNav from '../PagesNav/PagesNav';

const Watch = () => {
    return (
        <>
            <div className="top-30 bg-light">
                <PagesNav
                    name="Apple Watch"
                    list1="Overview"
                    list2="Why Apple Watch"
                    list3="Tech Specs"
                />
            </div>

            <div className="gift text-light bg-danger container-fluid">
                <h1>
                    <p className="container-fluid text-bg-danger grey m-3">
                        Find gifts to jumpStart their Lunar New Year. Shop the gift guide
                        <i className="fa-solid fa-chevron-right ms-2 fs-6 hi"></i>
                    </p>
                </h1>
            </div>

            <section className="fullHide">
                <section className="text-center">
                    <div className="container-fluid">
                        <div className="row">
                            {/* watch-se */}
                            <div className="col text-center">
                                <div className="container-fluid watch-se bg-imgs">
                                    <img src={watchSE} alt="" />
                                    <h5 className="pt-1">A great deal to love.</h5>
                                    <div className="links">
                                        <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                                            <a href="/">Learn more</a>
                                            <i className="fa-solid fa-chevron-right pe-4"></i>
                                            <a href="/">Buy</a>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="fullHide">
                <section className="text-center">
                    {/* watch-series-8 and */}
                    <div className="container-fluid">
                        <div className="row">
                            {/* watch-series-8 */}
                            <div className="col">
                                <div className="container-fluid watch-series-8 bg-imgs white">
                                    <img src={watchSeries8} alt="" />
                                    <h5 className="pt-1">A healthy leap ahead.</h5>
                                    <div className="links">
                                        <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                                            <a href="/">Learn more</a>
                                            <i className="fa-solid fa-chevron-right pe-4"></i>
                                            <a href="/">Buy</a>
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Watch