import React from "react";
import '../../App.css'
// import CardItem from "../CardItem";
import '../../components/Cards.css';



function AboutUs() {
  return (
    // <div className='cards'>
    // <div className="cards__container">
    //         <div className="cards__wrapper">
    //             <ul className="cards__items">
    //             <CardItem
    //                 src="/HomePageIMG/About Us/avatar-3127928.jpg"
    //                 text="Distinkt is a BeSpoke Luxury Concierge Service with a focus to provide & deliver quality service with customer dedication! We believe in a 1 to 1 relationship, understanding & delivering exactly what has been requested! Distinkt was formed when most competitors went commercial in the name of BeSpoke & Dedicated, operating more like a contact centre! \n Considering the situation Distinkt was created with a Vision to deliver Quality & Personalised BeSpoke Concierge Services To The Well Deserved! Distinkt’s Operating values are not driven by its profit’s & is majorly driven by the satisfaction of its clients!"
    //                 label="Luxury is our motto !"
    //                 path="/distinkt/distinkt-website/src/components/pages/AboutUs.js"
    //                /> 
    //             </ul>
    //             </div>
    //             </div>
    //             </div>
    <>
  <div className="card about-card"> {/* style={`width: 18rem;`} */}
  <img src="/distinkt2/HomePageIMG/About Us/avatar-3127928.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h1 className="card-title text-center h1-about">About Us</h1>
    <p className="card-text about-xtra">Distinkt is a BeSpoke Luxury Concierge Service with a focus to provide & deliver quality service with customer dedication! We believe in a 1 to 1 relationship, understanding & delivering exactly what has been requested! Distinkt was formed when most competitors went commercial in the name of BeSpoke & Dedicated, operating more like a contact centre!</p>
    <p className="card-text about-xtra2"> Considering the situation Distinkt was created with a Vision to deliver Quality & Personalised BeSpoke Concierge Services To The Well Deserved! Distinkt’s Operating values are not driven by its profit’s & is majorly driven by the satisfaction of its clients!</p>
  </div>
  {/* <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul> */}
  {/* <div className="card-body">
    <a href="/" className="card-link">Contact Us</a>
    <a href="/services" className="card-link">Our Services</a>
  </div> */}
</div>
</>
                  
                   
  )
}

export default AboutUs