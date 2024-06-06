import './helppage.css';
import img from "../../images/help.png";
import { Play, User, Book, Shield } from "react-feather";

const Helppage = () => {
  return (
    <div class="md:m-20 m-10">
      <div class="flex">
        <div class="md:w-3/4 md:h-72 w-1/2 h-48 bg-amber-500 rounded-ss-3xl rounded-es-3xl flex flex-col items-center md:items-start justify-center">
          <p class="lg:text-5xl md:text-4xl md:ml-20 text-2xl m-5 font-bold text-white drop-shadow-xl text-center">Help Center</p>
          <input
              type="search"
              class="md:w-1/3 w-1/2 md:h-10 h-6 md:p-5 md:ml-20 text-xs md:text-base rounded-full bg-slate-300 opacity-75 border-2 shadow-2xl"
              placeholder="  Search.."
          ></input>
        </div>
        <div>
          <img src={img} alt="img" class="h-48 lg:h-72 md:h-72" />
        </div>
      </div>

      <div class="flex lg:flex-row md:flex-col flex-col gap-10 mt-20 items-center text-center">
        <div className="help-box2 hover:scale-105 flex items-center flex-col transform transition duration-300 ease-in-out">
          <Play className="help-icon" />
          <h3>Getting Started</h3>
          <p style={{ fontSize: "14px", width: "240px" }}>
            Learn how <span style={{ fontWeight: "800" }}>HDL Gen Hub</span>{" "}
            works and how to start learing
          </p>
        </div>

        <div className="help-box2 hover:scale-105 flex items-center flex-col transform transition duration-300 ease-in-out">
          <User className="help-icon" />
          <h3>Account/Profile</h3>
          <p style={{ fontSize: "14px", width: "240px", marginLeft: "26px" }}>
            Manage your account settings
          </p>
        </div>

        <div className="help-box2 hover:scale-105 flex items-center flex-col transform transition duration-300 ease-in-out">
          <Book className="help-icon" />
          <h3>Learning Experience</h3>
          <p style={{ fontSize: "14px", width: "240px", marginLeft: "26px" }}>
            Everything about the{" "}
            <span style={{ fontWeight: "800" }}>HDL Gen Hub</span> learning
            experience
          </p>
        </div>
        <div className="help-box2 hover:scale-105 flex items-center flex-col transform transition duration-300 ease-in-out">
          <Shield className="help-icon" />
          <h3>Trust & Safe</h3>
          <p style={{ fontSize: "14px", width: "240px", marginLeft: "26px" }}>
            Trust and safty informations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Helppage;