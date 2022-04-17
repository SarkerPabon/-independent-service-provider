import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Header from "./Pages/Shared/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
