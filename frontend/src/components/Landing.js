import React from 'react'


export default function Landing() {
    return (
        
        <div className='conatiner p-20'>



        
            <section className="relative bg-blueGray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-sky-300"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className=" font-semibold text-5xl">
                                        Your story starts with us.
                                    </h1>
                                    <p className="mt-4 text-lg text-fuchsia-600">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in unde ipsa maxime excepturi blanditiis numquam sed possimus, quibusdam, recusandae ratione velit, iure animi similique corrupti exercitationem eius itaque quos!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <section className="pb-10 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Awarded Agency</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur sint mollitia consectetur asperiores totam ipsum soluta nisi odit. Dolorum, dolores beatae. Repellendus accusantium nisi officiis corrupti soluta, eaque numquam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Free Revisions</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nam. Blanditiis minima ab repellendus earum, temporibus suscipit tempore possimus fugiat doloremque, provident hic rem quas ratione nulla labore ex excepturi!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Verified Company</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium possimus cupiditate veniam expedita perferendis soluta maxime tenetur. Quisquam id vel, animi iste itaque fuga numquam dolorem incidunt. Possimus, distinctio doloremque!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                </section>
            </section>

        </div>
        
    )
}
