import axios from 'axios'; //Imports axios from our installed axios package
import { useEffect, useState } from 'react'; //Imports hooks from react
import requests from '../../Requests'; //imports requests from requests

const Main = () => {
	//This functionality allows us to randomly display a backdrop in our main component.
	//There are 2 states movie and SetMovies. both are used in State in an empty array
	//used an empty array in useState , thats where our Api is going to return data
	const [movies, setMovies] = useState([]);
	//this is to help us call a random movie from the api
	const movie = movies[Math.floor(Math.random() * movies.length)];
	//made use of the useEffect to make an api call when ever the component is in use
	//(whenever Main is used the api gets data and returns it)
	useEffect(() => {
		//used axios to make an api call with a promise
		axios.get(requests.requestPopular).then((res) => {
			setMovies(res.data.results);
		});
	}, []);
	console.log(movies);
	//this function cuts back on the amount of movies we see in main
	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + '...';
		} else {
			return str;
		}
	};
	return (
		<div className="w-full h-[600px] text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
				<img
					className="w-full h-full object-cover"
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className="absolute w-full top-[20%] p-4 md:p-8">
					<h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
					<div className="my-4">
						<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
							Play
						</button>
						<button className="border text-white border-gray-300 py-2 px-5 ml-4">
							Watch Later
						</button>
					</div>
					<p className="text-gray-400 text-sm">
						Released: {movie?.release_date}
					</p>
					<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
						{truncateString(movie?.overview, 150)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
