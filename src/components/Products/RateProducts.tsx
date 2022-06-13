import { useState } from "react"
import { AiFillStar } from "react-icons/ai";

export default function RateProducts(props: any) {
    const {rate} = props
    const stars = [];
    for (let index = 0; index < rate; index++) {
        stars.push("star")
    }
  
    return(
        <ul className="flex">
        {
            stars.map((star) => {
                return(
                <li  className="text-yellow-400 text-2xl"><AiFillStar /></li>
                )
            })
        }
        </ul>
    )
}