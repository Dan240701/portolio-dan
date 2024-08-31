import { useEffect, lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PageStore from "@src/store/PageStore";

function App() {
  const getStorage = PageStore((state) => state.getStorage);

  useEffect(() => {
    const urlHiddenParams = window.location.origin;
    history.replaceState({}, document.title, urlHiddenParams);
    getStorage();
  }, [])
  

  return (
    <ChakraProvider>
      
    </ChakraProvider>
  )
}

export default App
