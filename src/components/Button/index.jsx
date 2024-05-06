import './index.css';

function Button({ children, onClick }) {
  return (
    <button className='btn btn-sm btn-info' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

