import './App.css';
import Restaurant from './components/Restaurant';

const App = () => {
  return (
    <div>
      <div className='title'>
        <h1>
          <span style={{ fontSize: "7rem" , fontFamily: "Times"}}>I</span>
          <span style={{ fontSize: "5rem" , fontFamily: "Times"}}>RVINE's</span> Restaurant 
          <span style={{ color: "brown", fontStyle: "italic" }}> Selection</span>
        </h1>
        <h3>Updated on Mar 1st, 2025</h3>
      </div>
      <div className="board">
        <Restaurant 
          name="Brandywine" 
          location="University of California, Irvine" 
          photo="../public/images/brandywine.jpg" 
          link="https://uci.campusdish.com/LocationsAndMenus/Brandywine"
        />
        <Restaurant 
          name="Din Tai Fung" 
          location="Irvine Spectrum" 
          photo="../public/images/dintaifung.png" 
          link="https://dtf.com/en/locations/irvine"
        />
        <Restaurant 
          name="J.Zhou Oriental Cuisine" 
          location="Tustin Legacy" 
          photo="../public/images/jzhou.jpg" 
          link="https://jzhouorientalcuisine.shop/"
        />
        <Restaurant 
          name="Frank's bbq & noodles" 
          location="Dupont Drive" 
          photo="../public/images/franksbbq.jpg" 
          link="https://www.frankschinesebbq.com/"
        />
        <Restaurant name="" location="" photo="" link=""/>
        <Restaurant name="" location="" photo="" link=""/>
        <Restaurant name="" location="" photo="" link=""/>
        <Restaurant name="" location="" photo="" link=""/>
        <Restaurant name="" location="" photo="" link=""/>
        <Restaurant name="" location="" photo="" link=""/>
      </div>
    </div>
  )
}

export default App
