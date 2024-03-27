import logo from "./logo.svg";
import "./App.css";
import FormPage from "./component/FormPage";
import Dashboard from "./component/Dashboard";
function App() {
  return (
    <div className="main">
      <div className="page1">
        <div className="navbar">
          <div className="head1">
            <p>Inaara by ALYF at Alibaug</p>
            <p className="price">10.80L per share</p>
          </div>
          <div className="head2">
            <div className="button1">Invest Now</div>
            <div className="button2">Schedule an E-meet</div>
          </div>
        </div>
        <div className="footer">
          <p className="photo">Photos</p>
          <p className="video">Video</p>
        </div>
        <div className="bg-image">
          <img
            className="img1"
            src="https://i.pinimg.com/originals/9b/f3/fd/9bf3fd27fbcf89b8b77543b7b501e5f2.jpg"
          ></img>
        </div>
      </div>
      <Dashboard />
      {/* <FormPage /> */}
    </div>
  );
}

export default App;
