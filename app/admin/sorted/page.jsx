"use client"
import React from "react";

import PieWasteType from "../../../components/chart/waste-type";
import { ExampleChart } from '../../../components/chart/bar-chart'
import { TotalGarbageData } from "../../../components/chart/total-garbage";

const sordetPlace = () => {
    return (
        <div className=" h-full">
            <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-2 max-w-[90rem] mx-auto w-full">
                <div className="mt-6 gap-6 flex flex-col w-full text-center md:text-left sm:text-center">
                    {/* TOP SECTION */}
                    <div className="flex flex-col gap-2 text-center md:text-left sm:text-center">
                        <h3 className="text-xl font-semibold">Stast Layanan</h3>
                        <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-2 gap-5 justify-center w-full">
                            {/* <CardStats /> */}
                            <TotalGarbageData className="flex justify-center" />
                            <ExampleChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default sordetPlace;