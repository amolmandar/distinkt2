import React from 'react'
import HorizontalCard from '../HorizontalCard'
import '../../App.css'

const EventManagement = () => {
  return (
    <div className="event-mgmt">
    <HorizontalCard 
      src='/distinkt2/HomePageIMG/events Management /chuttersnap-aEnH4hJ_Mrs-unsplash.jpg'
      title='Event Management'
      text1="Being a Luxury Concierge company, our associations with businesses of all types & sizes also gives us an extra edge to organise & manage private events! We've managed Luxury Weddings in Turkey to Birthday Parties in Budapest! All our clients had to do is pick choose & approve! Thats It!"
      text2="Our event management team liases with clients understanding every smallest request connected to their emotions and delivers what's expected in the most cost effective ways!"
      styleName1="xtra-class1"
      styleName2="xtra-class2"   
    />
    </div>
  )
}

export default EventManagement