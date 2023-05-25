function SearchBox({ mediaInput, setMediaInput, setApiResponse, setIsLoading }) {

	const handleInputChange = event => setMediaInput(event.target.value);

	const handleFormSubmit = async event => {
		event.preventDefault();

		const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${mediaInput}&country=us&show_type=all&output_language=en`;
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/octet-stream',
				'X-RapidAPI-Key': '8c972cdc73msh827743dddabc3e4p18d853jsn8fa1a17c5fbb',
				'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
			}
		};

		try {
			setIsLoading(true);
			const response = await fetch(url, options);
			const result = await response.json();
			console.log(result);
			setApiResponse(result);
			setMediaInput('');
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<h2>Developed by Sherwin A.</h2>

			<label htmlFor="media-input">What are you trying to watch?</label><br />
			<input
				onChange={handleInputChange}
				id="media-input"
				placeholder="Film or TV series..."
				type="text"
				value={mediaInput} />

			<button type="submit">Search</button>
		</form>
	);
}

export default SearchBox;
