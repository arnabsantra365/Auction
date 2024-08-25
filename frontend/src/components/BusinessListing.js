import React from 'react'
import Items from './Items'

export default function BusinessListing() {
    return (
        <div>
            <h1 className='text-center text-3xl my-10 '>
                Your product,Our Responsibility...
            </h1>
            <div className="grid grid-rows-2 grid-flow-col gap-4 ml-10">
                
                    <Items />
                    <Items />
                    <Items />
               
                    <Items />
                    <Items />
                    <Items />
                

            </div>
        </div>
    )
}
