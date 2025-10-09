import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import iconDownload from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import iconReview from "../assets/icon-review.png";
import Barchart from "../Components/Barchart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const product = products.find((p) => String(p.id) === id);

  if (loading) return <p>loading...</p>;

  const {
    image,
    downloads,
    title,
    companyName,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = product;
  // console.log(product)
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start  gap-5  bg-base-100 p-5">
        <div className="flex-shrink-0 w-52 h-52 flex items-center justify-center">
          <img
            className="w-50 h-50 rounded-lg object-cover"
            src={image}
            alt="image"
          />
        </div>
        {/* right side */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>
            Developed by :<span className="text-blue-700">{companyName}</span>
          </p>
          <hr className="my-5 border-gray-300" />
          {/* rating,download,review */}
          <div className="flex flex-wrap items-center gap-7 mb-4">
            <div className="">
              <img className="" src={iconDownload} alt="" />
              <p>Downloads</p>
              <p className="text-green-400 font-semibold text-2xl">
                {downloads}
              </p>
            </div>
            <div>
              <img className="" src={iconRating} alt="" />
              <p>Avarage RAtings</p>
              <p className="text-purple-400 font-semibold text-2xl">
                {ratingAvg}
              </p>
            </div>
            <div>
              <img src={iconReview} alt="" />
              <p>Avarage RAtings</p>
              <p className="text-purple-400 font-semibold text-2xl ">
                {reviews}
              </p>
            </div>
          </div>
          <div>
            <button className="btn bg-[#00D390] text-white">
              Install Now ({size}MB)
            </button>
          </div>
          <hr className="border-gray-300 my-5" />
        </div>
      </div>
      {/* graphs */}
      <div className=" ">
        <h2 className="text-xl py-6 font-semibold">Ratings</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={product.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* description */}
      <div className="bg-base-100 p-6">
        <h2 className="text-xl py-4 font-semibold">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
