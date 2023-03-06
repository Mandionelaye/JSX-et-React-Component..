//import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Profile from './Component/Profile/ProfilePhoto';
import Name from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Photo from './Component/photo';

function App() {
  return (
    <>
    <div className="body">
    <div className="container">
                <div className="row">
                <div className="col col-md-12 m">
                  <span className='profile'><Profile/></span>
                  <div className='id'> 
                    <Name/>
                    <Address/>
                 </div>
                 </div>
                 <div className='col-md-12 mi'>
                  <p>Developpeur Full Stack et aussi etudiant en informatique de developpement d'application web mobile a l'Universite Virtuelle du Senegal et a Gomycode.</p>
                  <Photo/>
                  </div>  
            </div>
    </div>
    </div>
    </>
  );
}

export default App;
