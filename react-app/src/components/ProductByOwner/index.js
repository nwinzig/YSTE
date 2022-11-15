import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useParams } from 'react-router-dom'

function OwnerProducts() {
    const dispatch = useDispatch()

    return (
        <h1>My Products!</h1>
    )
}

export default OwnerProducts
