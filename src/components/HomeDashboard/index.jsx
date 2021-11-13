import "./home-dashboard.scss";
import Navigation from "./Navigation";

export default function HomeDashboard() {
  return (
    <div className="home-dashboard">
      <div className="navigation h-full w-full">
        <Navigation />
      </div>
      <div className="banner relative">
        <p className="text-7xl leading-none uppercase font-creep text-white absolute pb-10 left-0 w-full text-center top-1/4 transform -translate-y-1/2">
          WElcome to the <br /> haunted house
        </p>
        <img className="" src="assets/welcome-to.png" alt="welcome to haunted hamsters" />
      </div>
    </div>
  );
}
