import { useState } from "react";

const OverviewStatistics = () => {  
    const [selectedTime, setSelectedTime] = useState('Today');
    const [selectedPlatform, setSelectedPlatform] = useState('Facebook');

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handlePlatformChange = (e) => {
        setSelectedPlatform(e.target.value);
    };
  return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{fontSize: "22px"}}>Social Media Stats</span>
                <span style={{fontSize: "13px", color: "#bdbdbd"}}>Facebook engaged audiences and page impressions</span>
            </div>
            <div style={{display: "flex", alignItems: "start", gap: "0.5rem"}}>
                <img src="/assets/icons/calender.svg" alt="" height={20} width={20}/>
                <select value={selectedTime} onChange={handleTimeChange} style={{background: "none", border: "none", outline: "none", color: "#fff", fontSize: "15px", width: "120px", height: "22px"}}>
                    <option style={{background: "black"}} value="Today">Today</option>
                    <option style={{background: "black"}} value="Last-Week">Last Week</option>
                    <option style={{background: "black"}} value="1-Month">1 Month</option>
                    <option style={{background: "black"}} value="6-Months">6 Months</option>
                    <option style={{background: "black"}} value="1-Year">1 Year</option>
                    <option style={{background: "black"}} value="All-Time">All Time</option>
                </select>
                <img src={`/assets/social-icons/${selectedPlatform}.svg`} alt="" style={{marginLeft: "30px"}} height={20} width={20}/>
                <select value={selectedPlatform} onChange={handlePlatformChange} style={{background: "none", border: "none", outline: "none", color: "#fff", fontSize: "15px", width: "120px", height: "22px"}}>
                    <option style={{background: "black"}} value="facebook">Facebook</option>
                    <option style={{background: "black"}} value="x">X</option>
                    <option style={{background: "black"}} value="instagram">Instagram</option>
                    <option style={{background: "black"}} value="youtube">YouTube</option>
                </select>

            </div>
        </div>
  )
}

export default OverviewStatistics