import React from "react";
const api = {
  key: "b8cbd50abebda3fa15d582740de1afcb",
  base: "http://api.openweathermap.org/data/2.5/",
};
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}
export default App;
