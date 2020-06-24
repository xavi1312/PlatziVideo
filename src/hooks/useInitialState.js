const { useState, useEffect } = require("react");

const useInitialState = API => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setVideos(data);
      })
      .catch(err => console.log("Error fetching videos: " + err));
  }, []);

  return videos;
};

export default useInitialState;
