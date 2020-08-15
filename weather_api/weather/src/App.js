import React from "react";
const api = {
  key: "b8cbd50abebda3fa15d582740de1afcb",
  base: "http://api.openweathermap.org/data/2.5/",
};
function App() {
  const dateBuilder=(d)=>{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[d.getDay();
    let date=d.getDate();
    let month=months[d.getMonth()]
    let year = d.getFullYear();
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">New York City ,US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}
export default App;
