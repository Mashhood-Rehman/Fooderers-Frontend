import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../stores/product';
import { addToCart } from '../stores/cartSlice';

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
      <h1 className='bg-gradient-to-r from-blue-700 to-blue-950 font-bold text-transparent bg-clip-text text-2xl ml-[10%]'>
        Chinese
      </h1>
      <div className="flex flex-nowrap sm:flex-wrap justify-start gap-4 p-4 overflow-x-auto hide-scrollbar">
        {filteredProducts?.map((p) => (
          <div
            key={p._id}
            className="max-w-xs bg-white rounded-lg border-4 border-transparent hover:border-blue-700 transition ease-in-out duration-200 shadow-md overflow-hidden mb-6"
          >
            <img
               src={require(``)} 
              alt={p.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {p.name}
              </h2>
              <p className="text-gray-600">${p.price}</p>
              <button
                onClick={() => dispatch(addToCart(p))}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chinese;
