// -------------------------------------------------
// Packages
// -------------------------------------------------
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = <T = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setTimeout(() => {
      axios.get(url).then((response) => setData(response.data));
    }, 2000);
  }, [url]);
  return { data };
};
