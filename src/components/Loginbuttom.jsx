import React from 'react';
import { Link } from 'react-router-dom';

export default function Loginbuttom() {
  return (
    <>
      <Link to="/login">
        <button
          type="button"
          style={{
            backgroundColor: '#fff',
            border: 'none',
            color: '#000',
            borderRadius: '20px ',
            padding: '8px 12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#39ff14')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
        >
          Login
        </button>
        <button
          type="button"
          style={{
            backgroundColor: '#fff',
            marginLeft: '5px',
            border: 'none',
            color: '#000',
            borderRadius: '20px ',
            padding: '8px 12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#39ff14')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
        >
          Register
        </button>



      </Link>
    </>
  );
}
