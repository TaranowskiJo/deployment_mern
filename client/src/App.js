import { Link, Navigate, Route, Routes} from 'react-router-dom';

import Pets from './views/AllPets';
import  EditPet  from './views/EditPet';
import Pet from './views/OnePet';
import { NewPet } from './views/NewPet';
import { NotFound } from './views/NotFound';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Favorite Pets</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/pets"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Pets
          </Link>
          <Link
            to="/pets/new"
            className="btn btn-sm btn-outline-info mx-1"
          >
            New Pet
          </Link>
          

        </div>
      </nav>

  {/* FRONT END ROUTES to display VIEWS */}
  {/* SEPERATTE FROM SERVER ROUTES */}
  <Routes>
        {/* Redirect example */}
        <Route path="/" element={<Navigate to="/pets" />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<Pet />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
        <Route path="/pets/new" element={<NewPet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
