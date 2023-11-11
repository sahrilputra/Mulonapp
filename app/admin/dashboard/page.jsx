import React from 'react'
import DashboardPage from '../../../ui/DashboardLayout'

export default function dashboard() {
  return (
    <div>dashboard</div>
  )
}


dashboard.getLayout = (page) => <DashboardPage>{page}</DashboardPage>

