"use client";

import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import { Card } from '@nextui-org/react';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function StatsTimeSeries() {
    const option = {

        series: [{
            name: "STOCK ABC",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },

            title: {
                text: 'Fundamental Analysis of Stocks',
                align: 'left'
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left'
            },
            labels: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        },


    };

    // const series = [
    //     {
    //         name: "series-1",
    //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    //     },
    // ];

    return (
        <>
            <Card className="py-2" >
                <Chart
                    type="area"
                    options={option.options}
                    series={option.series}
                    height={200}
                    width={500}
                />
            </Card>
        </>
    );
};
