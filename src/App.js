import React,{Component} from 'react';
import CompOne from './CompOne';
import CompTwo from './CompTwo';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CompOne />
        <CompTwo/>
			</div>
		);
	}
}

export default App;