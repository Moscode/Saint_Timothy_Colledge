import Courses from "./component/Courses";
import Features from "./component/Features";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Offer from "./component/Offer";
import Review from "./component/Review";
import Testimony from "./component/Testimony";

export default function App() {
  return (
    <div>
      <div className="bg-hero min-h-[100%] bg-cover bg-no-repeat w-[100%] bg-center bg-fixed  bg-blend-overlay">
        <div className="bg-primary-600 z-[999] opacity-90">
          <NavBar />
          <Hero />
        </div>
        <Courses />
        <Offer />
        <Features />
        <Testimony />
        <Review />
    </div>
    </div>
  )
}