import { useState, useEffect } from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ApiService from '../service/apiService';

export default function Welcome() {
  const [suppliers, setSuppliers] = useState([]);

  const [newItemText, setNewItemText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiService.get('/v1/suppliers');
      setSuppliers(response);
    } catch (error) {
      console.error('Error al obtener los datos:', error.message);
    }
  };

  const handleCreateItem = async () => {
    try {
      const newItemData = {
        text: newItemText,
        // Otras propiedades del nuevo item si es necesario
      };
      const response = await ApiService.post('/v1/supplier', newItemData);
      setSuppliers([...suppliers, response]);
      setNewItemText('');
    } catch (error) {
      console.error('Error al crear un nuevo item:', error.message);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await ApiService.delete(`/v1/supplier/${id}`);
      setSuppliers(suppliers.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error al eliminar el item:', error.message);
    }
  };

  return (
    <Box
      id="hero"
      sx={{ width: '100vw' }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box
          id="table"
          sx={{
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor: alpha('#BFCCD9', 0.5),
            boxShadow: `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
          }}>

          <div>
          <h2>Lista de Items</h2>
          <ul>
            {suppliers.map(item => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => handleDeleteItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              placeholder="Nuevo proveedor"
            />
            <button onClick={handleCreateItem}>Agregar</button>
          </div>
        </div>
          
        </Box>
    </Container>
    </Box > 
  ); 
}