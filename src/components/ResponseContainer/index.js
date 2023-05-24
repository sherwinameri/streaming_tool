function ResponseContainer({ apiResponse, isLoading }) {
	return (
		<div className="response-container">

			{isLoading ? "Loading..." : ""}

			{apiResponse.result && apiResponse.result.map((media, index) => {
				return (
					<section key={index}>
						<h1> {media.title} ({media.countries.join(", ")}) [{media.type}] <br /> IMDB: {(media.imdbRating/10).toFixed(1)}/10 </h1>
						{media.streamingInfo.us ? (
							<ul>
								{Object.keys(media.streamingInfo.us).map((streamingService, index) => {
									return (
										<li key={index}>{streamingService}</li>
									)
								})}
							</ul>
						): "No Streaming Information Found"}
					</section>
				);
			})}
		</div>
	);
}

export default ResponseContainer;