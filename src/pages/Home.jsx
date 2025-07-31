import React, { useEffect, useState } from 'react';

const Home = () => {
  const [listing, setListing] = useState([]);

  const getallListing = async () => {
    try {
      const response = await fetch(`https://gemweb-backend-git-main-sabir-alis-projects.vercel.app/api/product/get`);
      if (response.ok) {
        const data = await response.json();
        console.log("welcome",data);
        setListing(data);
      }
    } catch (error) {
      console.log("Error from get all listing");
    }
  };

  useEffect(() => {
    getallListing();
  }, []);

  return (
    <div className="p-4 space-y-6 mt-20">
      {listing.map((item, index) => (
        <div
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
          key={index}
        >
          <div className="md:w-1/3">
            <img
              src={item.img}
              alt="Product"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="md:w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-1"><strong>City:</strong> {item.city}</p>
              <p className="text-gray-700 mb-1">{item.description}</p>
              <p className="text-green-700 font-medium mb-1">₹{item.price}</p>
              <p className={`font-semibold w-16 text-center ${item.sale === "Sold"?"bg-red-500":"bg-green-500"} text-white border`}>{item.sale}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
