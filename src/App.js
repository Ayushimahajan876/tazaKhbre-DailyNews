// class based component
import React, { useState } from "react";
// import Scrollbar from 'smooth-scrollbar';
import News from "./News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let [progress, setProgress] = useState(0);

  const [mode, setMode] = useState("light");
  const setProgressUtil = (progress) => {
    setProgress(progress);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#223756";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      {/* Scrollbar.init(document.querySelector('#my-scrollbar')); */}
      <LoadingBar color="#f11946" progress={progress} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              key="general"
              setProgress={setProgressUtil}
              country="in"
              mode={mode}
              toggleMode={toggleMode}
              category="general"
              heading="Trending"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              key="business"
              setProgress={setProgressUtil}
              country="in"
              mode={mode}
              toggleMode={toggleMode}
              category="business"
              heading="Business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              key="entertainment"
              setProgress={setProgressUtil}
              country="in"
              mode={mode}
              toggleMode={toggleMode}
              category="entertainment"
              heading="Entertainment"
            />
          }
        />
        {/* <Route exact path="/tourism" element={<News key="tourism"setProgress={setProgressUtil} country="in" mode={mode} toggleMode={toggleMode} category="tourism" heading="Tourism"  />} /> */}
        <Route
          exact
          path="/health"
          element={
            <News
              key="health"
              setProgress={setProgressUtil}
              country="in"
              mode={mode}
              toggleMode={toggleMode}
              category="health"
              heading="Health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              key="science"
              setProgress={setProgressUtil}
              country="in"
              mode={mode}
              toggleMode={toggleMode}
              category="science"
              heading="Science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              key="sports"
              setProgress={setProgressUtil}
              country="in"
              mode={mode}
              toggleMode={toggleMode}
              category="sports"
              heading="Sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              key="technology"
              setProgress={setProgressUtil}
              country="in"
              mode={mode}
              toggleMode={toggleMode}
              category="technology"
              heading="Technology"
            />
          }
        />
        {/* <Route exact path="/world" element={<News key="world"setProgress={setProgressUtil} country="in" mode={mode} toggleMode={toggleMode} category="world" heading="World"  />} />
       <Route exact path="/politics" element={<News key="politics"setProgress={setProgressUtil} country="in" mode={mode} toggleMode={toggleMode} category="politics" heading="Politics"  />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
