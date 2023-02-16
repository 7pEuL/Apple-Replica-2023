import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';

import './PagesNav.css'

const PagesNav = ({ name, list1, list2, list3 }) => {
    return (
        <>
            <div className="allPagesNav my-4 mx-3">
                <div className="allPagesNav__Name">
                    {name}
                </div>

                <div className="allPagesNav__button">
                    <div className="allPagesNav__menu hide">
                        <Button>
                            <KeyboardArrowDownIcon />
                        </Button>
                    </div>

                    <div className="allPagesNav__menu show mt-3 me-3">
                        <p className='mx-2'>{list1}</p>
                        <p className='mx-2'>{list2}</p>
                        <p className='mx-2'>{list3}</p>
                    </div>

                    <Button variant="contained" color="success">
                        Buy
                    </Button>
                </div>
            </div>
        </>
    )
}

export default PagesNav