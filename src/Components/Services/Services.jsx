import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern1.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <div id='services' className="services">                    {/*Portfolio Section*/}
        <div className="services-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">                    {/*Portfolio Contents*/}
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services