import React, { useEffect, useState } from 'react'

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.sampleapis.com/avatar/info')
        .then((response) => response.json())
        .then((data) => {
            setData(JSON.stringify(data));
            setLoading(false);
        })
    },[])

    if(loading) return <p>Loading.....</p>
  return (
    <div>
        <h1>Data:</h1>
        <pre>{data}</pre>
    </div>
  )
}

export default DataFetcher