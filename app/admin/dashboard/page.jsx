"use client"
import React from 'react'
import CardTeams from '../../../components/dashboard/cards/Card-Teams'
import CardItems from '../../../components/dashboard/cards/Card-Items'
import PieWasteType from '../../../components/chart/waste-type'
import { UserTable } from '../../../components/dashboard/Table/UserTable'
import { ExampleChart } from '../../../components/chart/bar-chart'
import { StatsTimeSeries } from '../../../components/chart/stats-timeSeries'
import { useSidebarContext } from '../../../ui/dashboard-contex'
export default function dashboard() {

  const { collapsed, setCollapsed } = useSidebarContext();
  return (
    <>
      <div className=" h-full">
        <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-2 max-w-[90rem] mx-auto w-full">
          <div className="mt-6  gap-6 flex flex-col w-full">
            {/* TOP SECTION */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Stast Layanan</h3>
              <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-2 gap-5  justify-center w-full">
                {/* <CardStats /> */}
                <PieWasteType />
                <ExampleChart />
              </div>
            </div>

            {/* Chart */}
            <div className="h-full flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Statistics</h3>
              <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
                <StatsTimeSeries />
              </div>
            </div>
          </div>

          {/* TEAMS */}
          <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
            <h3 className="text-xl font-semibold">Teams</h3>
            <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
              <CardTeams />
              {/* <CardItems /> */}
            </div>
          </div>
        </div>

        {/* USERS TABLE */}
        <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
          <div className="flex  flex-wrap justify-between">
            <h3 className="text-center text-xl font-semibold">Pengguna Terbaru</h3>
          </div>
        </div>
        <UserTable />
      </div>
    </>
  )
}


// dashboard.getLayout = (page) => <DashboardPage>{page}</DashboardPage>

