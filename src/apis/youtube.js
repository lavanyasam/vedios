
import axios from 'axios';

const KEY = 'AIzaSyCKsmg4gQCSOYDFIFH8zOGHLIWDbCS7NRg';


export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
        
    }

});


