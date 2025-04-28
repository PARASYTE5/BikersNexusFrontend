import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    Product_Name: '',
    Brand: '',
    Model: '',
    Size: '',
    Color: '',
    Material: '',
    Price: '',
    Description: '',
    Manufacture_Year: '',
    Warranty_Period: '',
    Is_Available: true,
    Quantity: '',
    Category_ID: 1002,
    ImageFile: null,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('https://localhost:44384/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('[fetchProducts] Error:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const updatedValue =
      type === 'checkbox' ? checked :
        type === 'file' ? files[0] : value;
    setFormData(prev => ({ ...prev, [name]: updatedValue }));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`https://localhost:44384/api/products/${id}`);
      alert('Product deleted successfully');
      fetchProducts(); // Refresh list
    } catch (error) {
      console.error('[handleDelete] Error:', error);
      alert('Error deleting the product.');
    }
  };

  const resetForm = () => {
    setFormData({
      Product_Name: '',
      Brand: '',
      Model: '',
      Size: '',
      Color: '',
      Material: '',
      Price: '',
      Description: '',
      Manufacture_Year: '',
      Warranty_Period: '',
      Is_Available: true,
      Quantity: '',
      Category_ID: 1002,
      ImageFile: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('Product_Name', formData.Product_Name);
    form.append('Brand', formData.Brand);
    form.append('Model', formData.Model);
    form.append('Size', formData.Size);
    form.append('Color', formData.Color);
    form.append('Material', formData.Material);
    form.append('Price', formData.Price);
    form.append('Description', formData.Description);
    form.append('Manufacture_Year', `${formData.Manufacture_Year}T00:00:00`);
    form.append('Warranty_Period', formData.Warranty_Period);
    form.append('Is_Available', formData.Is_Available);
    form.append('Quantity', formData.Quantity);
    form.append('Category_ID', formData.Category_ID);

    if (formData.ImageFile) {
      form.append('ImageFile', formData.ImageFile);
    }

    try {
      await axios.post('https://localhost:44384/api/products', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Product added successfully');
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error('[handleSubmit] Error:', error);
      alert('An error occurred while saving the product.');
    }
  };

  return (
    <div style={{ marginTop: '70px', paddingTop: '30px' }}>
      <AdminNavbar />
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '15px 20px',
        margin: '20px',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <h4 style={{ marginBottom: '10px' }}>📌 Category Notes</h4>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>1002 - Helmet:</strong> A helmet is protective headgear designed to absorb impact and reduce injury.</li>
          <li><strong>1003 - Gloves:</strong> Gloves are protective hand coverings that enhance grip and provide safety.</li>
          <li><strong>1004 - Gear:</strong> A jacket and pants provide protection, comfort, and durability for various activities.</li>
          <li><strong>1005 - Shoes:</strong> Shoes provide foot protection, support, and comfort for different terrains and activities.</li>
          <li><strong>1006 - Other Accessories:</strong> Biking accessories enhance safety, comfort, and convenience for a better riding experience.</li>
        </ul>
      </div>

      <div style={{ padding: '20px' }}>
        <h2 className='text-center'>Add New Product</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <div className="table-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px', padding: '20px', borderRadius: '8px' }}>
            <div>
              <label htmlFor="Product_Name" style={{ display: 'block', marginBottom: '5px' }}>Product Name</label>
              <input id="Product_Name" name="Product_Name" value={formData.Product_Name} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Brand" style={{ display: 'block', marginBottom: '5px' }}>Brand</label>
              <input id="Brand" name="Brand" value={formData.Brand} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Model" style={{ display: 'block', marginBottom: '5px' }}>Model</label>
              <input id="Model" name="Model" value={formData.Model} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Size" style={{ display: 'block', marginBottom: '5px' }}>Size</label>
              <input id="Size" name="Size" value={formData.Size} onChange={handleInputChange} style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Color" style={{ display: 'block', marginBottom: '5px' }}>Color</label>
              <input id="Color" name="Color" value={formData.Color} onChange={handleInputChange} style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Material" style={{ display: 'block', marginBottom: '5px' }}>Material</label>
              <input id="Material" name="Material" value={formData.Material} onChange={handleInputChange} style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Price" style={{ display: 'block', marginBottom: '5px' }}>Price (₹)</label>
              <input id="Price" name="Price" value={formData.Price} onChange={handleInputChange} type="number" required style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="ImageFile" style={{ display: 'block', marginBottom: '5px' }}>Product Image</label>
              <input id="ImageFile" name="ImageFile" type="file" accept="image/*" onChange={handleInputChange} style={{ width: '100%' }} />
            </div>
            <div>
              <label htmlFor="Manufacture_Year" style={{ display: 'block', marginBottom: '5px' }}>Manufacture Year</label>
              <input id="Manufacture_Year" name="Manufacture_Year" value={formData.Manufacture_Year} onChange={handleInputChange} type="date" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Warranty_Period" style={{ display: 'block', marginBottom: '5px' }}>Warranty Period (months)</label>
              <input id="Warranty_Period" name="Warranty_Period" value={formData.Warranty_Period} onChange={handleInputChange} type="number" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Quantity" style={{ display: 'block', marginBottom: '5px' }}>Quantity</label>
              <input id="Quantity" name="Quantity" value={formData.Quantity} onChange={handleInputChange} type="number" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div>
              <label htmlFor="Category_ID" style={{ display: 'block', marginBottom: '5px' }}>Category ID</label>
              <input id="Category_ID" name="Category_ID" value={formData.Category_ID} onChange={handleInputChange} type="number" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label htmlFor="Description" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
              <textarea id="Description" name="Description" value={formData.Description} onChange={handleInputChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', height: '100px' }} />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label htmlFor="Is_Available" style={{ display: 'block', marginBottom: '5px' }}>
                <input id="Is_Available" type="checkbox" name="Is_Available" checked={formData.Is_Available} onChange={handleInputChange} />
                Available
              </label>
            </div>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}>
              Save
            </button>
            <button type="button" onClick={resetForm} style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#6c757d', color: 'white', border: 'none' }}>
              Clear
            </button>
          </div>
        </form>
        <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2 class="text-center">Existing Products</h2>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price (₹)</th>
                <th className='text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.Product_ID}>
                  <td>{product.Product_Name}</td>
                  <td>{product.Brand}</td>
                  <td>{product.Model}</td>
                  <td>{product.Price}</td>
                  <td>
                    <button onClick={() => handleDelete(product.Product_ID)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
