import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { darkTheme, lightTheme } from "./components/Themes";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return (
    <div>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route exact path="/about" Component={AboutPage} />
          <Route exact path="/blog" Component={BlogPage} />
          <Route exact path="/work" Component={WorkPage} />
          <Route exact path="/skills" Component={MySkillsPage} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
