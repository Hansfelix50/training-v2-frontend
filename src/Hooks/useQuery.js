import React, { useState, useEffect } from 'react'

import axios from 'axios'

const useQuery = (URL) => {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setData(data);
      });
  }, [URL])

  return {  loading: !data ? true : false, data  }
}

export default useQuery
