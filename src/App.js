import { Route, Routes } from "react-router-dom";
import CertificateDisplay from "./components/CertificateDisplay";
import PageNotFound from "./components/PageNotFound";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CertificateDisplay />} />
      <Route path="/error" element={<ErrorComponent />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
