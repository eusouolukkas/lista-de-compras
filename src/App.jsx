import { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleAddProduct = () => {
    if (productName && productQuantity) {
      setProducts([...products, { name: productName, quantity: productQuantity }]);
      setProductName('');
      setProductQuantity('');
    }
  };

  const handleDeleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const handleCompletePurchase = () => {
    setProducts([]);
  };

  return (
    <div className="App">
      <Typography variant="h1" component="h2" sx={{"textAlign": 'center'}}>
        LISTA DE COMPRAS
      </Typography>
      <form>
        <TextField id="outlined-basic" htmlFor="productName" label="Produto" variant="outlined" value={productName} onChange={(event) => setProductName(event.target.value)} />

        <TextField id="outlined-basic" htmlFor="productQuantity" label="Quantidade" variant="outlined" value={productQuantity} onChange={(event) => setProductQuantity(event.target.value)} />

        <Button id="btn-adicionar" variant="contained" onClick={handleAddProduct}>Adicionar</Button>
      </form>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - qt.{product.quantity}
            <Button id="btn-excluir" variant="contained" onClick={() => handleDeleteProduct(index)}>Excluir</Button>
          </li>
        ))}
      </ul>

      {products.length > 0 && (
        <Button id="btn-concluir" variant="contained" onClick={handleCompletePurchase} className='btn-concluir'>Concluir</Button>
      )}
    </div>
  );
}