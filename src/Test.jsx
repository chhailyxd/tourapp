import React, { useEffect, useState } from 'react'
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);

  const TestData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/device");
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    TestData();
  }, [TestData]);

  return (
      <div>
        {data ? (
            <div>
            <p>{data.name}</p>
            <p>{data.os}</p>
            </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Test