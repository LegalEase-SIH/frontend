import Footer from "./components/Footer";
import Header from "./components/Header";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Neroutput from "./pages/Neroutput";
import SignIn from "./pages/SignIn";
import Successrate from "./pages/Successrate";
import Upload from "./pages/Upload";

export default function App() {
  return (
    <>
      <div className="flex h-screen justify-between flex-col">
        <Header />
        {/* <Home/> */}
        {/* <Upload /> */}
        {/* <Neroutput/> */}
        {/* <Successrate/> */}
        {/* <Chat/> */}
        {/* <Login/> */}
        <SignIn/>
        <Footer />
      </div>
    </>
  );
}
