import React from "react";
import { useEffect } from "react";

function FetchApi({ url, setData }) {
  const fetcher = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.data);
  };
  useEffect(() => {
    fetcher();
  }, []);
  return <></>;
}

export default FetchApi;
