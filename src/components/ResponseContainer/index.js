// import { useState } from "react";
import "./styles.css";

function ResponseContainer({ apiResponse, isLoading, showMore, setShowMore, showButton, setShowButton }) {
	
	const handleClick = () => {
		setShowMore("");
		setShowButton(false);
	};

	return (
		<div className="response-container">

			{isLoading ? "Loading..." : ""}

			{apiResponse.result && apiResponse.result.map((media, index) => {
				return (
					<section key={index} className={index === 0 ? '' : showMore}>
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

			{apiResponse.result && showButton && <button onClick={handleClick}>Show More</button>}
		</div>
	);
}

export default ResponseContainer;