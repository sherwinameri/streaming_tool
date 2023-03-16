
function SearchBox(props) {
	const mediaInput = props.mediaInput;
	const setMediaInput = props.setMediaInput;

	const handleInputChange = (e) => {
		const mediaInput = e.target.value;
		setMediaInput(e.target.value);
	};

	return (
				<form>
					<h2>SearchBox</h2>
					
					<label htmlFor="media-input">What are you trying to watch?</label><br />
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

