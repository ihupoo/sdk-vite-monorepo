import { core } from '@sdk/core'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		core(1)
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<p>Hello Vite + React!</p>
			</header>
		</div>
	)
}

export default App
