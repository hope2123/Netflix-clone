const API_KEY = import.meta.env.VITE_API_KEY;
//const apiKey = "41cb5e90a6898896bb98e944ce37a541";
//console.log(API_KEY);
const requests = {
    fetchNetflixOriginals: `/movie/top_rated?api_key=${API_KEY }&with_networks=213`,
};

export default requests;