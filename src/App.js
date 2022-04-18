import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
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
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</DataContextProvider>
	);
}

export default App;
