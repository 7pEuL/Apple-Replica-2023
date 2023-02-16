import React from 'react'
import { Link } from 'react-router-dom'

import './Store.css'

import mac from '../../Resources/images/Store/store-card-14-16-mac-nav-202301.png'
import iPhone from '../../Resources/images/Store/store-card-13-iphone-nav-202209_GEO_US.png'
import iPad from '../../Resources/images/Store/store-card-13-ipad-nav-202210.png'
import watch from '../../Resources/images/Store/store-card-13-watch-nav-202209.png'
import airPod from '../../Resources/images/Store/store-card-13-airpods-nav-202209.png'
import airTags from '../../Resources/images/Store/store-card-13-airtags-nav-202108.png'
import appleTv from '../../Resources/images/Store/store-card-13-appletv-nav-202210.png'
import HomePod from '../../Resources/images/Store/store-card-13-homepod-nav-202301.png'
import AppleGiftCard from '../../Resources/images/Store/store-card-13-holiday-giftcards-asit-agc-nav-202111.png'
import accessories from '../../Resources/images/Store/store-card-13-accessories-nav-202209.png'

const Store = () => {
  return (
    <>
      <div className="container longWidth">
        <div className="row">
          <div className="storeSMS text-center">
            <h1>Store.</h1> <p>The best way to buy the products you love.</p>
          </div>

          <div className="store">
            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/Mac">
                <img src={mac} alt="" />
                Mac
              </Link>
            </div>

            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/iPhone">
                <img src={iPhone} alt="" />
                iPhone
              </Link>
            </div>

            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/iPad">
                <img src={iPad} alt="" />
                iPad
              </Link>
            </div>

            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/Watch">
                <img src={watch} alt="" />
                Apple Watch
              </Link>
            </div>

            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/AirPods">
                <img src={airPod} alt="" />
                AirPods
              </Link>
            </div>

            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/AirTag">
                <img src={airTags} alt="" />
                AirTag
              </Link>
            </div>

            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/TV & Home">
                <img src={appleTv} alt="" />
                Apple TV 4K
              </Link>
            </div>

            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/HomePod">
                <img src={HomePod} alt="" />
                HomePod
              </Link>
            </div>
            
            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/Apple Gift Card">
                <img src={AppleGiftCard} alt="" />
                Apple Gift Card
              </Link>
            </div>
            
            <div className="col-sm-12 col-md-2 watch text-center">
              <Link to="/Accessories">
                <img src={accessories} alt="" />
                Accessories
              </Link>
            </div>
          </div>

          <div className="storeSMS text-center">
            <h1>The latest. </h1> <p className='la'> Take a look at what’s new, right now.</p>
          </div>

          <section className="container text-dark">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black text-light p-2 iPadPro bg-store ">
                  <h1 className='mt-5'>iPad Pro</h1>
                  <h1 className='my-3'>Supercharged by M2.</h1>
                  <p className='mt-3'>From $799 or $66.58/mo.per month for 12 mo.monthsFootnote†</p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5 text-dark">
                <div className="storeBox bg-white p-2 watchUltra bg-store ">
                  <h5 className='mt-5'>APPLE WATCH ULTRA</h5>
                  <h1 className='my-3'>Adventure awaits.</h1>
                  <p className='mt-3'>From $799 or $33.29/mo.per month for 24 mo.monthsFootnote†</p>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-dark">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-white p-2 iPhone14 bg-store ">
                  <h1 className='mt-5'>iPhone 14</h1>
                  <h1 className='my-3'>Big and bigger.</h1>
                  <p className='mt-4'> From $799.00 or $33.29/mo.per month for 24 mo.months before trade‑inFootnote*</p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5 text-light">
                <div className="storeBox bg-black p-2 HOMEPOD bg-store">
                  <h1 className='mt-5'>HOME Pod</h1>
                  <h1 className='my-1'>Profound sound.</h1>
                  <p className='mt-3'>From $299 </p>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-light">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 iPhone14Pro bg-store ">
                  <h2 className='mt-5'>iPhone 14 Pro</h2>
                  <h1 className='my-3'>Pro. Beyond.</h1>
                  <p className='mt-3'>From $999 or $41.62/mo.per mo. before trade‑in*</p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 watchGreen bg-store ">
                  <h1 className='mt-5'>
                    BLACK UNITY BAND</h1>
                  <h5 className='my-3'>Creativity and community.<br /> Woven together.
                  </h5>
                  <h5 className='mt-3'>$49</h5>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-dark">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-white p-2 iPad bg-store ">
                  <h1 className='mt-5'>iPad</h1>
                  <h1 className='my-3'>
                    Lovable. Drawable. Magical.</h1>
                  <p className='mt-3'>From $449 or $37.41/mo.per month for 12 mo.monthsFootnote†</p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5 text-light">
                <div className="storeBox bg-black p-2 watchBlue bg-store ">
                  <h3 className='mt-5'>Apple Watch Series 8</h3>
                  <h1 className='my-3'>A healthy leap ahead.</h1>
                  <p className='mt-3'>From $399 or $16.62/mo.per month for 24 mo.monthsFootnote†</p>
                </div>
              </div>
            </section>
          </section>

          <section className="container text-light">
            <section className="row text-center">
              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 macBookStore bg-store ">
                  <h1 className='mt-5'>MacBook Pro</h1>
                  <h4 className='my-3'>Mover. Maker. Boundary breaker.</h4>
                  <p className='mt-3'>From $1999 or $166.58/mo.per month for 12 mo.monthsFootnote†</p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 my-5">
                <div className="storeBox bg-black p-2 macMiniStore bg-store ">
                  <h1 className='mt-5'>MAC MINI</h1>
                  <h3 className='my-3'>More muscle. More hustle.</h3>
                  <p className='mt-3'>From $599 or $49.91/mo.per month for 12 mo.monthsFootnote†</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  )
}

export default Store

