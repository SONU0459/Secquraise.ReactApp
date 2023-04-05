import "./app.scss";
import Navbar from "./components/Navbar"
import Slidebar from "./components/Slidebar"
import Event from "./components/Event"
import Details from "./components/Details"


function App() {
  return (
   <>
   <Navbar />
   <div className="main">
   <Slidebar />
   <Details />
   <Event />
   </div>
   </>
  );
}

export default App;
