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

      const card = document.createElement("div");
      card.className = "card";
      /*
      -----IMAGE WRAPPER------
      */
      const imageWrapper = document.createElement("div");
      imageWrapper.classList = "card-img stacked";
      const cardImage = document.createElement("img");
      cardImage.src = img_url;
      //append nested elements to image wrapper
      imageWrapper.append(cardImage);
      /*
      -----CARD CONTENT 
      */
      const cardContent = document.createElement("div");
      cardContent.className = "card-content";
      //append nested divs to card
      card.append(imageWrapper, cardContent);
      //append each card to grid container
      container.append(card);
    });
  } catch (error) {
    console.log(error);
  }
};

displayData();
