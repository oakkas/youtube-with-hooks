import axios from "axios";

const KEY = "AIzaSyCkrV-E6htqLr3Eu9M5HEPaM3tsOIg0DpE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
