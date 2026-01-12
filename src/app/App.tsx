import { createTheme, MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import FindJobs from "../pages/FindJobs";
import FindTalent from "../pages/FindTalent";
import PostJob from "../pages/PostJob";
import About from "../pages/About";

function App() {
  const theme = createTheme({
    colors: {
      "mine-shaft": [
        "#2c2c2c",
        "#262626",
        "#202020",
        "#1a1a1a",
        "#141414",
        "#0e0e0e",
        "#080808",
        "#020202",
        "#000000",
        "#000000",
      ],
      "bright-sun": [
        "#fff9e6",
        "#fff3cc",
        "#ffecb3",
        "#ffe699",
        "#ffdf80",
        "#ffd766",
        "#ffce4d",
        "#ffc633",
        "#ffbd1a",
        "#ffb300",
      ],
    },
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
