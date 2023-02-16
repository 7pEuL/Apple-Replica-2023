import React from 'react'
import PagesNav from '../PagesNav/PagesNav'

import './AirPods.css'

const AirPods = () => {
  return (
    <>
      <section className="top-50">

        <div className="bg-light">
          <PagesNav
            name="AirPods Max"
            list1="Overview"
            list2="Tech Specs"
            list3="Compare"
          />
        </div>

        <section className="text-center">
          <div className="col">
            <div className="container-fluid airPodsProMax bg-imgs">
              <h1 className="fw-bold">AirPods Max</h1>
              <h5 className="">Perfect balance of exhilarating.</h5>
              <div className="links">
                <div className="d-flex justify-content-center align-items-center gap-1 pb-2">
                  <a href="/">Learn more</a>
                  <i className="fa-solid fa-chevron-right pe-4"></i>
                  <a href="/">Buy</a>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <h6 className='disMax'>Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</h6>
            </div>
          </div>

          <div className="col">
            <div className="container-fluid airpods-pro bg-imgs white">
              <h1 className="fw-bold">AirPods Pro</h1>
              <h5 className="">Rebuilt from the sound up.</h5>
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


        </section>
      </section>
    </>
  )
}

export default AirPods