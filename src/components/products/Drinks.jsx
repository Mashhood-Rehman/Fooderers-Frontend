


import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../stores/product';
import { addToCart } from '../stores/cartSlice';
import {Icon} from "@iconify/react"
const Drinks = () => { 
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);
  const filteredProducts =Array.isArray(items) ? items.filter((item) => item.category == "Drinks") : []

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts("Drinks"));
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading, please wait...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <div id='drink'> 
     <h1 className='bg-gradient-to-r from-blue-700 to-blue-950 font-bold text-transparent bg-clip-text  text-2xl ml-[10%]'>

      Drinks
     </h1>
      <div className="flex flex-wrap justify-start gap-4 p-4">
      {filteredProducts?.map((p) => (
  <div
    key={p._id}
    className="relative max-w-xs bg-white rounded-lg border-4 border-transparent hover:border-blue-700 transition ease-in-out duration-200 shadow-md overflow-hidden mb-6"
  >
    <img
      src={p.picture}
      alt={p.title}
      className="w-full h-40 object-cover object-center"
    />
    <button
      onClick={() => dispatch(addToCart(p))}
      className="absolute top-[55%] right-1  text-green-500 flex items-center justify-center "
      style={{ zIndex: 10 }}
    >
<Icon icon="solar:add-circle-outline" className='w-10 h-10        rounded-full text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out ' />    </button>
    <div className="p-4">
      <h2 className="text-md font-semibold text-gray-800 truncate">
        {p.name}
      </h2>
      <p className="text-gray-600 text-sm">${p.price}</p>
      <p className="text-gray-600 text-sm truncate">{p.description}</p>
    </div>
  </div>
))}


  </div></div>
  )
}

export default Drinks