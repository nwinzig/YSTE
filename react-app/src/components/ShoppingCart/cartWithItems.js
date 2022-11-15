import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function FilledCartComponent(){
    return(
        <div>
            <div>
                Your cart is empty
            </div>
            <div>
                Link to home page
            </div>
        </div>
    )
}

export default FilledCartComponent
