import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { DemoProvider } from "@/context/DemoContext";
import DemoModal from "@/components/site/DemoModal";
import TourModal from "@/components/site/TourModal";
import Landing from "@/pages/Landing";

function App() {
  return (
    <div className="App">
      <DemoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
        <DemoModal />
        <TourModal />
        <Toaster position="top-right" theme="dark" />
      </DemoProvider>
    </div>
  );
}

export default App;
