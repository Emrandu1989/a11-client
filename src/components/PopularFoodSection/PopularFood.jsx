import popular1 from "../../assets/popular1.avif";
import popular2 from "../../assets/popular2.avif";
import popular3 from "../../assets/popular3.jpg";
import popular4 from "../../assets/popular4.jpg";
import popular5 from "../../assets/popular5.jpg";
import popular6 from "../../assets/popular6.jpg";
import popular7 from "../../assets/popular7.jpg";
import popular8 from "../../assets/popular8.jpg";
import { Typewriter } from "react-simple-typewriter";

const PopularFood = () => {
  const handleDone = () => {
    console.log("Typewriter effect finished");
  };

  const handleType = (text) => {
    console.log(`Typing: ${text}`);
  };

  return (
    <>
      <div className="text-center uppercase space-y-5">
        <p className="text-orange-400 font-semibold">
          --- Have a look our popular food ---
        </p>
        <h3 className="font-bold text-4xl text-gray-400">
          You should try to taste our <br />
          <span>
            <Typewriter
              words={[
                "most popular items.",
                "Delicious Food",
                "Tempting Food",
                "Satisfying Food",
                "Mouth-watering Food",
                "Irresistible Food",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h3>
      </div>
      <div className="flex justify-between flex-col md:flex-row lg:px-36">
        <div className="card px-2  bg-base-100 ">
          <figure className="px-10 relative pt-10">
            <img src={popular1} alt="Shoes" className="rounded-xl mr-16" />
            <img
              src={popular2}
              alt="Shoes"
              className="rounded-xl absolute w-42 h-36  lg:w-48 lg:h-48  -right-8 -bottom-12 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Special Chicken Briyani</h2>
            <p>Most of oru Customers likes This special chicken briyani</p>
            <div className="card-actions">
              <button className="btn btn-primary">OrderNow</button>
            </div>
          </div>
        </div>
        <div className="card  px-2 lg:ml-20 bg-base-100 ">
          <figure className="px-10 relative pt-10">
            <img src={popular3} alt="Shoes" className="rounded-xl mr-3" />
            <img
              src={popular4}
              alt="Shoes"
              className="rounded-xl absolute w-36 h-36  lg:w-48 lg:h-48  -right-8 -bottom-12 "
            />
            <img
              src={popular5}
              alt="Shoes"
              className="rounded-xl absolute w-36 h-36  lg:w-48 lg:h-48  -left-12 -bottom-12 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Special Hilsha</h2>
            <p>
              Most of oru Customers likes This special Hilsha Fish fry and
              curry.{" "}
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">OrderNow</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="card px-2 w-96  bg-base-100 ">
          <figure className="px-10 relative pt-10">
            <img src={popular6} alt="Shoes" className="rounded-xl mr-3" />
            <img
              src={popular7}
              alt="Shoes"
              className="rounded-xl absolute w-36 h-36 lg:w-48 lg:h-48 -right-8 -bottom-12 "
            />
            <img
              src={popular8}
              alt="Shoes"
              className="rounded-xl absolute w-36 h-36  lg:w-48 lg:h-48 -left-12 -bottom-12 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Special BeefCurry with Rice</h2>
            <p>
              Most of oru Customers likes This special BeefCurry with Rice.{" "}
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">OrderNow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularFood;
