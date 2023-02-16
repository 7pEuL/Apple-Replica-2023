import React from 'react'
import PagesNav from '../PagesNav/PagesNav'

const TVAndHome = () => {
  return (
    <div>
      <div className="top-50 bg-light">
        <PagesNav
          name="Apple TV App"
          list1="Overview"
          list2="Tech Specs"
          list3="Visit"
        />
      </div>
    </div>
  )
}

export default TVAndHome