//to get data from api

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://get-promo-codes.p.rapidapi.com/data/get-coupons/',
        params: {
          page: '1',
          sort: 'update_time_desc'
        },
        headers: {
          'X-RapidAPI-Key': 'fcfe875766mshd70f6a8bf297f40p113e4fjsnd2638a323d85',
          'X-RapidAPI-Host': 'get-promo-codes.p.rapidapi.com'
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
              alert('error')
          } finally {
            setIsLoading(false);
          }
      }

      useEffect(() => {
            FetchData();
        }, []);

        const refetch = () => {
            setIsLoading(true);
            FetchData();
        }

        return { data, isLoading, isError, refetch };

}

export default useFetch;