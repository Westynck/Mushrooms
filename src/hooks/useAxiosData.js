import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxiosData(url, page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        const response = await axios.get(url,{
          params: {
            skip: (page - 1) * 5,
            limit: 5,
            sort: 'createdAt:-1',
          }
        });
        if (response) {
          const { data: responseData } = response;
          setData([...data, ...responseData]);
        }
      } catch (error) {
        setError('error');
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url, page]);

  return [[data, setData], loading, error];
}