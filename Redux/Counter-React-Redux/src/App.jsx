import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Countainer from "./components/Countainer";
import Controls from "./components/Controls";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Countainer>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </Countainer>
    </center>
  );
}

export default App;
