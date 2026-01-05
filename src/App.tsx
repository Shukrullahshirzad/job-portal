import { createTheme, MantineProvider } from "@mantine/core";
import Homepage from "./pages/Homepage";

  
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
    <MantineProvider>
      <Homepage />
    </MantineProvider>
  );
}

export default App;
