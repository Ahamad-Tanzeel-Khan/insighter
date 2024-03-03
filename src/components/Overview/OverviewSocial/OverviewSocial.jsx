import "./overview-social.css"

const OverviewSocial = () => {
  return (
    <>
        <div style={{display: "flex", justifyContent: "space-between", padding: "4% 10%"}}>
            <div>
                <div className='overview-social'>
                    <img src="/assets/social-icons/facebook.svg" alt="" width={20} height={20}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">Facebook</span>
                    </span>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span className="overview-followers-count">192.8K</span>
                    <span className="overview-followers-text">FOLLOWERS</span>
                </div>
            </div>



            <div>
                <div className='overview-social'>
                    <img src="/assets/social-icons/x.svg" alt="" width={20} height={20}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">X</span>
                    </span>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span className="overview-followers-count">240.6K</span>
                    <span className="overview-followers-text">FOLLOWERS</span>
                </div>
            </div>



            <div>
                <div className='overview-social'>
                    <img src="/assets/social-icons/instagram.svg" alt="" width={24} height={24}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">Instagram</span>
                    </span>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span className="overview-followers-count">586.4K</span>
                    <span className="overview-followers-text">FOLLOWERS</span>
                </div>
            </div>



            <div>
                <div className='overview-social'>
                    <img src="/assets/social-icons/youtube.svg" alt="" width={20} height={20}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">YouTube</span>
                    </span>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span className="overview-followers-count">928.3K</span>
                    <span className="overview-followers-text">SUBSCRIBERS</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default OverviewSocial