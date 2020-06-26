const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      action.payload.isInMyList = true;
      changeIsInMyList(state, action.payload.id);
      return { ...state, myList: [...state.myList, action.payload] };

    case "DELETE_FAVORITE":
      changeIsInMyList(state, action.payload);
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload),
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const includeVideo = (list, id) => {
  return list.some(video => video.id === id);
};
const changeIsInMyList = (state, id) => {
  const trends = includeVideo(state.trends, id);
  const originals = includeVideo(state.originals, id);

  if (trends) {
    state.trends.map(video => {
      if (video.id === id) video.isInMyList = !video.isInMyList;
      return video;
    });
  }

  if (originals) {
    state.originals.map(video => {
      if (video.id === id) video.isInMyList = !video.isInMyList;
      return video;
    });
  }
};

export default reducer;
