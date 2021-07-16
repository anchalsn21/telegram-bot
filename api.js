require("dotenv").config();
const axios = require("axios");
const lyricFinder = require("lyrics-finder");

const getLyric = async (query) => {
  try {
    const { data } = await axios.get(
      `https://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&f_has_lyrics=true&page_size=10&page=1&apikey=${process.env.MX}`
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

const getWeather = async (location) => {
  try {
    const { data } = await axios.get(
      `https://goweather.herokuapp.com/weather/${location}`
    );
    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Something went wrong");
  }
};

const getRandomJoke = async (cat) => {
  try {
    const { data } = await axios.get(
      `https://v2.jokeapi.dev/joke/${cat}?blacklistFlags=nsfw,sexist&format=txt`
    );
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const getStateCovidData = async (state) => {
  try {
    const { data } = await axios.get(
      `https://api.covid19india.org/v4/min/data.min.json`
    );
    return data[state];
  } catch (error) {
    console.log("error", error);
    throw new Error(error);
  }
};

const createShortUrl = async (url) => {
  try {
    const { data } = await axios.post(
      `https://ushrtly.herokuapp.com/create-short-url`,
      { url }
    );
    return data;
  } catch (error) {
    console.log("error++++++++=", error);
    throw new Error(error);
  }
};
module.exports = {
  getLyric,
  getWeather,
  getStateCovidData,
  getRandomJoke,
  createShortUrl,
};
