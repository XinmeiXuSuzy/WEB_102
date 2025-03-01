import './App.css';
import Restaurant from './components/Restaurant';

const App = () => {
  return (
    <div>
      <h1>Irvine's Restaurants Selection</h1>
      <h3>Updated on Feb 28th, 2025</h3>
      <div className="board">
        <Restaurant 
          name="Brandywine" 
          cuisine="miscellaneous" 
          photo="../public/images/brandywine.jpg" 
          link="https://uci.campusdish.com/LocationsAndMenus/Brandywine"
        />
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
        <Restaurant name="" cuisine="" photo="" link=""/>
      </div>
    </div>
  )
}

export default App
