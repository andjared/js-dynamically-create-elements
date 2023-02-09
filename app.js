const container = document.querySelector(".container");
const dataUrl = "data.json";

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayData = async () => {
  try {
    const data = await getData(dataUrl);
    data.map((item) => {
      const {
        title,
        description,
        review,
        beds,
        dates,
        price_night,
        price_total,
        img_url,
        flag,
      } = item;
      console.log(item);
    });
  } catch (error) {
    console.log(error);
  }
};

displayData();
