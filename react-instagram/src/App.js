import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavScrollExample from './components/Navbar';
import ColorSchemesExample from './components/postheading';
import ImageGallery from './components/posts';
import Basic from './components/profile';



function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <Basic/>
      <ColorSchemesExample/>
      <ImageGallery/>

    </div>
    
  );
}

export default App;
