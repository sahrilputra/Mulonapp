"use client";

import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const PieWasteType = () => {
    const options = {
        chart: {
            id: "apexchart-example",
            type: "donut", // Set the chart type to 'donut'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            show: false,
            position: "right",
            fontSize: 14,
            offsetY: 0,
            itemMargin: {
                vertical: 0,
            },
        },
    };

    const series = [70, 10, 6, 20];
    const labels = ["Plastic", "Paper", "Metal", "Others"];

    const chartData = {
        labels: labels,
        series: series,
    };
    return (
        <>
            <Card className="flex justify-center align-middle">
                <CardHeader>
                    <p>Sampah Yang dipilah</p>
                </CardHeader>
                <CardBody className="flex justify-center">
                    <div className="flex justify-center">
                        <Chart
                            options={options}
                            series={chartData.series}
                            height={200}
                            width={300}
                            type="donut"
                        />
                    </div>
                </CardBody>
                <CardFooter>
                    <p>Total : 123</p>
                </CardFooter>
            </Card>
        </>
    );
};

export default PieWasteType;