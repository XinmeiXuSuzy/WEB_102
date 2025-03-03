import './App.css';
import Restaurant from './components/Restaurant';

const App = () => {
  return (
    <div>
      <div className='title'>
        <h1>
          IRVINE RESTAURANTS
        </h1>
        <h3>Last updated on Mar 3th, 2025</h3>
      </div>
      <div className="board">
        <Restaurant 
          name="鼎泰丰 Din Tai Fung" 
          location="Irvine Spectrum" 
          photo="../public/images/dintaifung.png" 
          link="https://dtf.com/en/locations/irvine"
          cuisine="Chinese Cuisine"
          map="https://maps.app.goo.gl/KnbwPSduBAEH4ftK6"
        />
        <Restaurant 
          name=" J.Zhou Oriental Cuisine" 
          location="Tustin Legacy" 
          photo="../public/images/jzhou.jpg" 
          link="https://jzhouorientalcuisine.shop/"
          cuisine="Chinese Cuisine"
        />
        <Restaurant 
          name="Frank's BBQ & Noodles" 
          location="Dupont Drive" 
          photo="../public/images/franksbbq.jpg" 
          link="https://www.frankschinesebbq.com/"
          cuisine="Chinese Cuisine"
        />
        <Restaurant 
          name="Marufuku Ramen" 
          location="Irvine Spectrum" 
          photo="../public/images/ramen.jpg" 
          link="https://www.marufukuramen.com/irvine"
          cuisine="Japanese Cuisine"
        />
        <Restaurant 
          name="Belacan Grill" 
          location="Tustin Enderle Center" 
          photo="../public/images/belacangrill.jpg" 
          link="https://belacangrillmalaysianbistro.com/"
          cuisine="Malaysian Cuisine"
        />
        <Restaurant 
          name="Phoholic" 
          location="Westminister" 
          photo="../public/images/phoholic.jpg" 
          link="https://phoholic.res-menu.com/#google_vignette"
          cuisine="Vietnamese Cuisine"
        />
        <Restaurant 
          name="滋味小麺 MIÀN" 
          location="Costa Mesa" 
          photo="../public/images/mian.jpg" 
          link="https://miantaste.com/"
          cuisine="Chinese Cuisine"
        />
        <Restaurant 
          name="Tasty Garden" 
          location="Culver Plaza" 
          photo="../public/images/tastygarden.jpg" 
          link="https://tastygardencatogo.com/"
          cuisine="Chinese Cuisine"
        />
        <Restaurant 
          name="Oc & Lau Restaurant" 
          location="Garden Grove" 
          photo="../public/images/oc&lau.jpg" 
          link="https://oclaurestaurant.com"
          cuisine="Vietnamese Cuisine"
        />
        <Restaurant 
          name="Tofu King" 
          location="Walnut Ave." 
          photo="../public/images/tofuking.jpg" 
          link="https://tofukingcatogo.com/"
          cuisine="Taiwan Cuisine"
        />
      </div>
    </div>
  )
}

export default App
