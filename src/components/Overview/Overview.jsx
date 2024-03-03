import { UserButton } from '@clerk/clerk-react'
import OverviewSocial from './OverviewSocial/OverviewSocial'
import "./overview.css";
import OverviewStatistics from './OverviewStatistics/OverviewStatistics';

const Overview = () => {
  return (
    <section className='overview-container'>
      <header className='overview-header'>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{display: "flex", alignItems: "center", gap: "3rem"}}>
            <h1 style={{fontSize: "30px" ,margin: "0"}}>Overview</h1>
            <span style={{fontSize: "14px", color: "aliceblue"}}>All Accounts</span>
          </div>
          <span style={{color: "#BDBDBD", fontSize: "14px"}}>Take a closer look at how your social media accounts are performing</span>
        </div>
        <div>
          <UserButton afterSignOutUrl='/' />
        </div>
      </header>
      <section className='overview-social-handles'>
        <OverviewSocial />
      </section>
      <section className='overview-statistics-container'>
        <OverviewStatistics />
      </section>
    </section>
  )
}

export default Overview
// #4a4d4d