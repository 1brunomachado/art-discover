const discover = document.querySelector(".discover");

function createGallery(
  nameArt,
  nationalityArt,
  imageArt,
  titleArt,
  dimensionsArt,
  dateArt,
  repositoryArt
) {
  let gallery = document.createElement("div");
  gallery.classList = `gallery`;
  discover.appendChild(gallery);

  let image = document.createElement("img");
  image.classList = "gallery__image";
  image.setAttribute("src", imageArt);
  gallery.appendChild(image);

  let name = document.createElement("h2");
  name.classList = "gallery__name";
  name.textContent = nameArt;
  gallery.appendChild(name);

  let title = document.createElement("h1");
  title.classList = "gallery__title";
  title.textContent = titleArt;
  gallery.appendChild(title);

  let date = document.createElement("p");
  date.classList = "gallery__date";
  date.textContent = dateArt;
  gallery.appendChild(date);

  let nationality = document.createElement("p");
  nationality.classList = "gallery__nationality";
  nationality.textContent = nationalityArt;
  gallery.appendChild(nationality);

  let dimensions = document.createElement("p");
  dimensions.classList = "gallery__dimensions";
  dimensions.textContent = dimensionsArt;
  gallery.appendChild(dimensions);

  let repository = document.createElement("p");
  repository.classList = "gallery__repository";
  repository.textContent = repositoryArt;
  gallery.appendChild(repository);
}

let RANDOM_ID = Math.floor(Math.random() * 50000);

// https://metmuseum.github.io/

axios
  .get(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${RANDOM_ID}`
  )
  .then((response) => {
    // manipula o sucesso da requisição
    console.log(response.data);

    const {
      artistDisplayName,
      artistNationality,
      primaryImageSmall,
      title,
      dimensions,
      objectDate,
      repository,
    } = response.data;

    const data = {
      name: artistDisplayName,
      nationality: artistNationality,
      image: primaryImageSmall,
      title: title,
      dimensions: dimensions,
      date: objectDate,
      repository: repository,
    };

    createGallery(
      data.name,
      data.nationality,
      data.image,
      data.title,
      data.dimensions,
      data.date,
      data.repository
    );
  })
  .catch((error) => {
    // manipula erros da requisição
    console.error(error);
  })
  .then(() => {
    // sempre será executado
  });
