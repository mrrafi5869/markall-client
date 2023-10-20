import Automation from "./components/Automation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TargetAudience from "./components/TargetAudience";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
    <div className="w-9/12 mx-auto">
      <Navbar></Navbar>
      <Header></Header>
      <TargetAudience></TargetAudience>
      <Automation></Automation>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}

