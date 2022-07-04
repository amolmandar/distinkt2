import React from 'react'
import '/Users/apple/distinkt/distinkt-website/src/components/HorizontalCard.css'
import '../App.css'

function HorizontalCard(props) {
    return (
        <div className="card mb-3 abc" >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.src} className="card-img xyz" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{props.title}</h1>
                        {/*  eslint-disable-next-line no-useless-concat */}
                        <p className={ "card-text" + " " + ( props.styleName1 ? props.styleName1 : "") }>{props.text1}</p>
                        {/*  eslint-disable-next-line no-useless-concat */}
                        <p className={ "card-text" + " " + ( props.styleName2 ? props.styleName2 : "") }>{props.text2}</p>
                        {/*  eslint-disable-next-line no-useless-concat */}
                        <p className={ "card-text" + " " + ( props.styleName3 ? props.styleName3 : "") }>{props.text3}</p>
                        <p className="card-text"><small className="text-muted">Contact us for more.</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard