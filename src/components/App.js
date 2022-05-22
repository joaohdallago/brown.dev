import GlobalStyle from '../theme/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Articles from './articles';
import AboutMe from './about-me';

export default function App() {
	return (
		<>
			<GlobalStyle />
			
			<BrowserRouter>
				<Routes>
					<Route  path='/' element={<Articles />}/>
					<Route path='/about-me' element={<AboutMe />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
