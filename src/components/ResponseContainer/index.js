function ResponseContainer({ apiResponse }) {
	return (
		<div className="response-container">
			{apiResponse.result && apiResponse.result.map((item, index) => {
				return (
					<h1 key={index}>Test</h1>
				);
			})}
		</div>
	);
}

export default ResponseContainer;