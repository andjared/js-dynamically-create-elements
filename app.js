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
      -----CARD CONTENT-----
      */
      const cardContent = document.createElement("div");
      cardContent.className = "card-content";
      // card info
      const cardTitle = document.createElement("h2");
      cardTitle.className = "card-title";
      cardTitle.innerText = title;

      const cardReview = document.createElement("span");
      cardReview.className = "card-review";
      const cardReviewContent = document.createElement("span");
      cardReviewContent.innerText = review;
      const starIcon = document.createElement("i");
      starIcon.className = "fa fa-star";
      cardReview.append(starIcon, cardReviewContent);

      const cardDescription = document.createElement("p");
      cardDescription.className = "card-description";
      cardDescription.innerText = description;

      const cardBeds = document.createElement("p");
      cardBeds.className = "card-beds";
      cardBeds.innerText = beds;

      const cardDate = document.createElement("p");
      cardDate.className = "card-date";
      cardDate.innerText = dates;
      // card price with nested elements
      const cardPrice = document.createElement("div");
      cardPrice.className = "card-price";

      const nightPrice = document.createElement("span");
      nightPrice.className = "price-night";
      const nightPriceValue = document.createElement("span");
      nightPriceValue.className = "price-value";
      nightPriceValue.innerText = price_night;
      nightPrice.append(nightPriceValue, "night");

      const priceDivider = document.createElement("span");
      priceDivider.innerText = "·";

      const totalPrice = document.createElement("span");
      totalPrice.className = "price-total";
      const totalPriceValue = document.createElement("span");
      totalPriceValue.className = "price-value";
      totalPriceValue.innerText = price_total;
      totalPrice.append(totalPriceValue, "total");
      //append nested elements to card price div
      cardPrice.append(nightPrice, priceDivider, totalPrice);
      //append nested elements to card content
      cardContent.append(
        cardTitle,
        cardReview,
        cardDescription,
        cardBeds,
        cardDate,
        cardPrice
      );
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
