import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequiredAuth from "./Pages/Authentication/RequiredAuth";
import Blog from "./Pages/Blog";
import Checkout from "./Pages/Checkout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import DataContextProvider from "./Provider/DataContextProvider";

function App() {
	return (
		<DataContextProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/services/:serviceId' element={<ServiceDetails />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />} />
					<Route
						path='/checkout'
						element={
							<RequiredAuth>
								<Checkout />
							</RequiredAuth>
						}
					/>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</DataContextProvider>
	);
}

export default App;
