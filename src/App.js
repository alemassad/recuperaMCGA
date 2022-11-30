import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './screens/Products';
import Welcome from './screens/Welcome';
import CreateProduct from './screens/CreateProduct';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />        
        <Route path="/products" element={<Products/>} />
        <Route path="/add" element={<CreateProduct/>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;

