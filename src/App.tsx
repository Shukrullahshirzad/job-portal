import Header from "./header/Header";
import { Button, MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Header />
    </MantineProvider>
  );
}

export default App;
