import { useEffect, lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import PageStore from "@src/store/PageStore";
import Content from "./components/Content";
import Loader from "./components/ui/Loader/Loader";

function App() {
  const getStorage = PageStore((state) => state.getStorage);
  const spinnerIsVisible = PageStore((state) => state.spinnerIsVisible);

  useEffect(() => {
    const urlHiddenParams = window.location.origin;
    history.replaceState({}, document.title, urlHiddenParams);
    getStorage();
  }, [])
  

  return (
    <ChakraProvider>
      {spinnerIsVisible && <Loader />}  
      <Content />
    </ChakraProvider>
  )
}

export default App
