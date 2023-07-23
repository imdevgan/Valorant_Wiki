import React from "react";
import { useEffect, useState } from "react";

import ContentSelector from "./ContentSelector";

function Content() {
  const [contentType, setContent] = useState("agents");
  const [result,setResult]=useState([]);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setResult(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const url = `https://valorant-api.com/v1/${contentType}`;
    fetchData(url);
  }, [contentType]);
  return <div>
    <ContentSelector setContent={setContent}/>
  </div>;
}
export default Content;
