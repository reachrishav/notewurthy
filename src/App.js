import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Blogs from './components/Blogs'

function App() {
  return (
    <div>
      <Header />
      <Blogs className="flex flex-direction-col align-items-center "/>
      <Footer />
    </div>
  );
}

export default App;
