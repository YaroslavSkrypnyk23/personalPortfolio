import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Intro from './components/Intro';
import ProfilePic from "./components/ProfilePic";
import About from "./components/About";
import Services from "./components/Services";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="w-screen">
      <Header />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 p-5">
          <Intro />
          <About/>
          <Services/>
        </div>
        <div className="hidden lg:block">
          <ProgressBar/>
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}

export default App;
