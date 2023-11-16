"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { dailyData } from "../../models/chartData/totalGarbage";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react"
export function TotalGarbageData() {
    const dates = dailyData.map((data) => data.date);
    const values = dailyData.map((data) => data.value);

    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Total Sampah per Hari',
                data: values,
            },
        ],
        options: {
            chart: {
                type: 'area',
                id: "apexchart-example",
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
            },
            legend: {
                show: false,
            },
            xaxis: {
                type: 'category',
                categories: dates,
                labels: {
                    formatter: (val) => new Date(val).toLocaleDateString('en-US', { day: 'numeric' }),
                },
            },
            yaxis: {
                min: 0,
                max: Math.max(...values) + 10,
                labels: {
                    formatter: (value) => value.toFixed(0),
                },
            },
        },
    });

    return (
        <>
            <Card className="py-2 flex justify-center align-middle">
                <CardHeader>
                    <span className="text-sm">Total Sampah</span>
                </CardHeader>
                <CardBody className="flex justify-center align-middle">
                    <Chart
                        type="area"
                        options={chartData.options}
                        series={chartData.series}
                        height={200}
                        width={320}
                    />
                </CardBody>
                <CardFooter>
                    Total : {values.reduce((acc, value) => acc + value, 0)} kg (Hari Ini)
                </CardFooter>
            </Card>
        </>
    );
}
