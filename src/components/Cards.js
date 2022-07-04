/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import Navbar from './Navbar';

function Cards() {
  return (
    
    <div className='cards'>
        {/* <h1> Checkout these epic destinations </h1> */}
         <div className="cards__container">
         {/* <Navbar /> */}
             <div className="cards__wrapper">
                 <ul className="cards__items">
                     <CardItem
                    src="/HomePageIMG/szabolcs-toth-ZHOIR8oLvh0-unsplash.jpg"
                    text="Distinkt Is Fully IATA Accredited! Yes! We have a GDS to ourselves which is manned 24/7 by our Travel Consultants!"
                    label="Travel Management"
                    path="/travel-management" /> 
                    <CardItem
                    src="/HomePageIMG/Screenshot 2022-06-16 at 4.53.40 PM.png"
                    text="Distinkt offers its clients a BeSpoke personalised 1 To 1 experience 24 Hours & 7 Days A Week!"
                    label="Luxory Concierge"
                    path="/luxory-concierge" /> 
                    <CardItem
                    src="/HomePageIMG/Screenshot 2022-06-16 at 5.01.33 PM.png"
                    text="Cannes , F1 races , Fashion Weeks ! NO problem . We have got you covered!"
                    label="Access to VIP Events "
                    path="/vip-events" />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src="/HomePageIMG/Luxury Goods /engin-akyurt-RFIpITqnaZw-unsplash.jpg"
                    text="Being A BeSpoke Luxury Concierge, we are one of best sourcing companies for Luxury goods!"
                    label="Luxory goods"
                    path="/luxory-goods" /> 
                    <CardItem
                    src="/HomePageIMG/Sports events /antonia-n7zrogKTgic-unsplash.jpg"
                    text="Distinkt's wide network always supports & helps acquire the best seats which get sold out first & at times are also Invitation Only!"
                    label="Sporting Event Access"
                    path="/sporting-events" /> 
                    <CardItem
                    src="/HomePageIMG/Private Jet /kofi-okyere-I4qwB6HhQu4-unsplash.jpg"
                    text="Jet Charter travel provides a safer way to fly by minimising UHNWI's exposure to health & security risks!"
                    label="Jet Charters "
                    path="/jet-charters" />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src="/HomePageIMG/events Management /bruno-emmanuelle-ZpNBwBR38fA-unsplash.jpg"
                    text="Our event management team liases with clients understanding every smallest request connected to their emotions and delivers"
                    label="Event Management"
                    path="/event-management" /> 
                    <CardItem
                    src="/HomePageIMG/events Management /handshake-2009183.png"
                    text="Partnerships, Private Events and Luxury Management ...etc is also on our esteemed service palette."
                    label="General Management and other services"
                    path="/general-management" /> 
                    
                </ul>
            </div>
        </div>
    </div>
)
}

export default Cards