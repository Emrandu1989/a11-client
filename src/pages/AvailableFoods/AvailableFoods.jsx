import { useLoaderData } from "react-router-dom";
import FeaturedFoodCard from "../../components/FeaturedFood/FeaturedFoodCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const allFoods = useLoaderData();
  const [availableFoods, setAvailableFoods] = useState(allFoods);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    const filteredFoods = allFoods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredFoods.length === 0) {
      setError("No matching foods found.");
    } else {
      setError("");
      setAvailableFoods(filteredFoods);
    }
  };

  const handleReset = () => {
    setSearchQuery("");
    setAvailableFoods(allFoods);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Epicurean Arena | Available Foods</title>
      </Helmet>

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center my-9">Available Foods</h2>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search by food name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-l px-4 py-2"
          />
          <button onClick={handleSearch} className="btn btn-primary rounded-r">
            Search
          </button>
          <button onClick={handleReset} className="btn btn-secondary ml-2">
            Reset
          </button>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {availableFoods.length > 0 ? (
            availableFoods.map((food) => (
              <FeaturedFoodCard
                key={food._id}
                food={food}
                setAvailableFoods={setAvailableFoods}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No Food available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableFoods;
