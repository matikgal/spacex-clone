import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import FalconHeavy from './Pages/FalconHeavy'

function App() {
	return (
		<Router>
			<Routes>
				
				<Route path="/" element={<MainPage />} />

				
				<Route path="/falcon-heavy" element={<FalconHeavy />} />
			</Routes>
		</Router>
	)
}

export default App
