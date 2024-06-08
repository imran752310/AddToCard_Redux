"use client"
import React from 'react'
import { useSelector } from 'react-redux'
export default function CartCount() {
    const cartItems = useSelector((store)=> store.cart)
  return (
    <div>{cartItems.length}</div>
  )
}
