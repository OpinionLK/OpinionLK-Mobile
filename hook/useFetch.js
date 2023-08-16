//to get data from api

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/${endpoint}',
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '5d33d93e1amsh015f6f1d7168316p18de66jsnd220b7632745',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const FetchData = async () => {
          setIsLoading(true);

          try {
              const response = await axios.request(options);
              setData(response.data.data);
              setIsLoading(false);
          } catch (error) {
              setIsError(error);
            //   alert('error')
          } finally {
            setIsLoading(false);
          }
      }

      useEffect(() => {
            FetchData();
        }, []);

        const refetch = () => {
            idLoading(true);
            FetchData();
        }

        return { data, isLoading, isError, refetch };

}

export default useFetch;