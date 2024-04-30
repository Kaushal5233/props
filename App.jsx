import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

const App = () => {

  //let foodItems = []
  let foodItems = ['sabzi', 'Poteto', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']


//! 1> fisrst way if and else
  //if (foodItems.length === 0) {
    //return <h3>I am still hungry</h3>
  //}

  //! 2> second way tarnary oprater
  //let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null

  //!3> third way logical oprator

  return (
    <>
    <h1>Healthy Food</h1>
    {/* {emptyMessage} */}
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
      
    </>
  )
}

export default App; 
