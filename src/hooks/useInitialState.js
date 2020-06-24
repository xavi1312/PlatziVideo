const { useState, useEffect } = require("react");

const useInitialState = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then(res => res.json())
      .then(data => {
        setVideos(data);
      })
      .catch(err => console.log("Error fetching videos: " + err));
  }, []);

  return videos;
};

export default useInitialState;
