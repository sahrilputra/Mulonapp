"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, CardBody } from "@nextui-org/react"
export function ExampleChart() {
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <>
      <Card className="py-2" >
        <Chart
          type="area"
          options={option}
          series={series}
          height={200}
          width={350}
        />
      </Card>
    </>
  );
}
