// generate an ID
let RANDOM_ID = Math.floor(Math.random() * 50000);

// makes a request to a user with a specific ID
function requestApi() {
  axios
    .get(`https://api.artic.edu/api/v1/artworks/${RANDOM_ID}`)
    .then((response) => {
      // handle request success
      const {
        image_id,
        title,
        date_display,
        artist_title,
        artist_id,
        place_of_origin,
        date_end,
        dimensions,
        credit_line,
      } = response.data.data;

      const data = {
        image: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
        title: title,
        date: date_display,
        artist: artist_title,
        link: `https://www.artic.edu/artists/${artist_id}`,
        place: place_of_origin,
        published: date_end,
        dimensions: dimensions,
        credit: credit_line,
      };

      createGallery(
        data.image,
        data.title,
        data.date,
        data.artist,
        data.link,
        data.place,
        data.published,
        data.dimensions,
        data.credit
      );
    })
    .catch(() => {
      //handle request errors

      location.reload();
    })
    .then(() => {
      // will always run
    });
}

requestApi();

// select HTML elements
const imageGallery = document.querySelector(".gallery__image");
const titleGallery = document.querySelector(".gallery__title");
const dateGallery = document.querySelector(".gallery__date");
const artistGallery = document.querySelector(".gallery__artist");
const placeGallery = document.querySelector(".gallery__place");
const publishedGallery = document.querySelector(".gallery__published");
const dimensionsGallery = document.querySelector(".gallery__dimensions");
const creditGallery = document.querySelector(".gallery__credit");

//function to insert information into HTML
function createGallery(
  image,
  title,
  date,
  artist,
  link,
  place,
  published,
  dimensions,
  credit
) {
  imageGallery.setAttribute("src", image);
  titleGallery.textContent = title;
  dateGallery.textContent = date;
  artistGallery.textContent = artist;
  artistGallery.setAttribute("href", link);
  placeGallery.textContent = place;
  publishedGallery.textContent = published;
  dimensionsGallery.textContent = dimensions;
  creditGallery.textContent = credit;
}
