import Footer from "./components/Footer";
import Header from "./components/Header";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Neroutput from "./pages/Neroutput";
import SignIn from "./pages/SignIn";
import Successrate from "./pages/Successrate";
import Upload from "./pages/Upload";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Gawareness from "./pages/Gawareness"
export default function App() {
  return (
    <>
    
      <div className="flex h-screen justify-between flex-col">
        <Header />
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/upload" element={<Upload/>} />
        <Route exact path="/gawareness" element={<Gawareness/>} />
        {/* <Home/> */}
        {/* <Upload /> */}
        {/* <Neroutput/> */}
        {/* <Successrate/> */}
        <Route exact path="/chat/:userId" element={<Chat/>} />
        {/* <Login/> */}
        <Route exact path="/login" element={<SignIn/>}/>
        {/* <SignIn/> */}
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
     
    </>
  );
}
