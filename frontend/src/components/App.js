import Banner from "./Banner"
import logo from "../assets/logo.png"
import Footer from "./Footer"
import Main from "./Main"


export default function App() {
  const title = "Gestion de Stock"
  return (
    <div>
      <Banner>
				<img src={logo} alt="logo de la steg" className="eqg-image"/>
				<h1>{title}</h1>
			</Banner>
      <Main/>
      <Footer/>
    </div>
  );
}

