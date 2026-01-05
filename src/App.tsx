import Header from "./header/Header";
import { Button, MantineProvider } from "@mantine/core";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <MantineProvider>
      <Homepage />
    </MantineProvider>
  );
}

export default App;
