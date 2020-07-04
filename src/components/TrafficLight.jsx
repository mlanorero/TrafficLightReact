import React from 'react'

export default class TrafficLight extends React.Component {
    render(){
        return( 
        <div className="container">
            <div className="sostiene" />
            <div className="soporte">
                    <div className="rojo luz"></div>
                    <div className="amarillo luz"></div>
                    <div className="verde luz"></div>
            </div>
        </div>
      )
    }
}