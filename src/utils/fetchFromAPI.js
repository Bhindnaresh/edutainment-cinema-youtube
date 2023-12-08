import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
//const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    // method: 'GET',
    //url: 'https://youtube-v31.p.rapidapi.com/captions',
    //url: BASE_URL,
    params: {

      //suggested videos API from RAPID API
      // relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet', // not use by js mastery
      //type: 'video',
      maxResults: '50'

      //caption list API from RAPID API
      // part: 'snippet',
      // videoId: 'M7FIvfx5J10'
      
      // search API from RAPID API
      //q: 'music',
      //part: 'snippet, id',
      //regionCode: 'US',
      //maxResults: '50',
      //order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async(url) => {const {data} = await axios.get(`${BASE_URL}/${url}`, options);
return data;
}
