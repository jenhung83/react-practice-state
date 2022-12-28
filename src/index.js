import React, { useState } from 'react';
console.log('test');
function App() {
	const [fname, setFname] = useState('');
	const getName = (e) => {
		console.log(e.target.value);
	};
	const setName = () => {
		setFname(fname);
	};

	return (
		<div className="container">
			<h1>Hello {fname}</h1>
			<form>
				<input
					onChange={getName}
					name="fName"
					placeholder="First Name"
					value={fname}
				/>
				<input name="lName" placeholder="Last Name" />
				<button onClick={setName}>Submit</button>
			</form>
		</div>
	);
}

export default App;
