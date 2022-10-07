import Main from '../components/Main/Main'; //imports Main from components
import Row from '../components/Row/Row'; //imports Row from components
import requests from '../Requests'; //imports requests from components
//Home is the bulk of the app. Here I have displayed the Main (Hero component)
//as well as the various Rows . In Rows there is the fetchURL property been used
// and this uses the fetches the requests from Requests that allow us to display the
//the different genres or categories of movies form our API

//In the rowID property we list our components as it is good practice
const Home = () => {
	return (
		<div>
			<Main />
			<Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
			<Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
			<Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
			<Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
			<Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
		</div>
	);
};

export default Home;
