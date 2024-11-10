import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../stores/product';
import { addToCart } from '../stores/cartSlice';
import { Icon } from '@iconify/react/dist/iconify.js';

const Chinese = () => { 
  const dispatch = useDispatch();
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);
  const items = useSelector((state) => state.product.products);

  const filteredProducts = Array.isArray(items) ? items.filter((item) => item.category === "Chinese") : [];

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading, please wait...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div id='Chinese' className='overflow-x-hidden'>
      <h1 className=' bg-orange-500 font-bold text-transparent bg-clip-text text-2xl ml-[10%]'>
        Chinese
      </h1>
      <div className="flex flex-nowrap sm:flex-wrap justify-start gap-4 p-4 overflow-x-auto hide-scrollbar">
      {filteredProducts?.map((p) => (
  <div
    key={p._id}
    className="flex items-center space-y-6 bg-white  p-4   transition ease-in-out duration-200"
  >
    <img
      src={`http://localhost:5000${p.picture}`}
      alt={p.title}
      className="w-16 h-16 object-cover object-center rounded-full"
    />
    <div className="ml-4 flex-grow">
      <h2 className="text-lg font-semibold border-b p-2 border-gray-200 text-gray-800">{p.name}</h2>
      <p className="text-gray-600 p-2">Lorem ipsum clita erat amet dolor justo diam</p>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-orange-600 text-xl font-semibold">${p.price}</span>
      <button
        onClick={() => dispatch(addToCart(p))}
        className=" text-orange-500 p-2 rounded-lg  transition duration-200 ease-in-out flex items-center"
      >
      <Icon icon="mdi-light:cart" className=' h-8 w-8'   />
      </button>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default Chinese;
