"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react"
export function ExampleChart() {
  const option = {
    chart: {
      type: 'area',
      id: "apexchart-example",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth'
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49],
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34],
    },
  ];

  return (
    <>
      <Card className="py-2" >
        <CardHeader>
          <span className="text-sm">Total Pengguna</span>
        </CardHeader>
        <CardBody>
          <Chart
            type="area"
            options={option}
            series={series}
            height={200}
            width={320}
          />
        </CardBody>

        <CardFooter>
          Total : 120 Pengguna
        </CardFooter>
      </Card>
    </>
  );
}
