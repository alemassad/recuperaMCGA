import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './screens/Recurso';
import Welcome from './screens/Welcome';
import CreateProduct from './screens/CreateProduct';
import EditProduct from './screens/EditProduct';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />        
        <Route path="/products" element={<Products/>} />
        <Route path="/add" element={<CreateProduct/>}></Route>        
        <Route path="/edit/:id" element={<EditProduct/>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;

