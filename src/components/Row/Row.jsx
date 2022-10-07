import axios from 'axios'; //Imports axios from our installed axios package
import React, { useEffect, useState } from 'react'; //Imports hooks from react
import Movie from '../Movie/Movie'; //imports Movie
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; //Imports icons from our react-icons package

const Row = ({ title, fetchURL, rowID }) => {
	//Very similar to main we populate our array from data from our API
	//we get from our API
	const [movies, setMovies] = useState([]);
	//useEffect hook runs when the Row component is called
	useEffect(() => {
		//used axios to make an api call with a promise
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);
	//in our dependency we Add fetchURl so whenever our component changes our component is loaded again
	//This sliderLeft function allows to scroll left of our row in our row component
	const slideLeft = () => {
		const slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	//This sliderLeft function allows to scroll right of our row in our row component
	const slideRight = () => {
		const slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
				<div
					id={'slider' + rowID}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movies.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
			</div>
		</>
	);
};

export default Row;
