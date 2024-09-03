import { useEffect, lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PageStore from "@src/store/PageStore";
import Content from "./components/Content";

function App() {
  const getStorage = PageStore((state) => state.getStorage);

  useEffect(() => {
    const urlHiddenParams = window.location.origin;
    history.replaceState({}, document.title, urlHiddenParams);
    getStorage();
  }, [])
  

  return (
    <ChakraProvider>
      <Content />
    </ChakraProvider>
  )
}

export default App
