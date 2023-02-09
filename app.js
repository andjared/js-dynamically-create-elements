const container = document.querySelector(".container");
const dataUrl = "data.json";

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
