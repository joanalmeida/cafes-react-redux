import React from 'react'
import Login from './Login'

const promoImgStyle = {
    borderRadius: '10px',
    border: '10px solid #FFF'
}

const Home = ( {onLogin} ) => (
    <div>
        <div className="columns is-vcentered">
            <div className="column is-5">
                <figure className="image is-4by3">
                    <img alt="Imagen promocional" style={promoImgStyle} className="promo-img" src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/P1019458374MPC1030099918/views/1,width=300,height=300,appearanceId=2,backgroundColor=E8E8E8,version=1497260021/i-turn-coffee-into-code-t-shirts-men-s-premium-t-shirt.jpg" />
                </figure>
            </div>
            <div className="column is-5 is-offset-1">
                <Login onSubmit={onLogin} />
            </div>
        </div>
    </div>
)

export default Home