const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra Ghana",
      dedicated: "2004, November, 11",
      area: "17500",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
      templeName: "Atlanta Georgia",
      location: "Atlanta Georgia",
      dedicated: "2011, May, 1",
      area: "34500",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/800x500/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
    },
    {
      templeName: "Belém Brazil",
      location: "Belém Brazil",
      dedicated: "2022, November, 20",
      area: "28675",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/800x500/belem_brazil_temple_exterior2.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome Italy",
      dedicated: "2019, March, 10-20",
      area: "41010",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/5-Rome-Temple-2160345.jpg"
    }
  ];

const container = document.getElementById("temple-container");

function displayTemples(filter) {
  container.innerHTML = "";

  let filteredTemples = temples;
  if (filter === "old") {
      filteredTemples = temples.filter(t => t.year < 1900);
  } else if (filter === "new") {
      filteredTemples = temples.filter(t => t.year > 2000);
  } else if (filter === "large") {
      filteredTemples = temples.filter(t => t.area > 90000);
  } else if (filter === "small") {
      filteredTemples = temples.filter(t => t.area < 10000);
  }

  filteredTemples.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
      card.innerHTML = `
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${filter === "old" || filter === "new" ? temple.dedicated : temple.year}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
      `;
      container.appendChild(card);
  });
}

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = event.target.dataset.filter;
      displayTemples(filter);
  });
});

displayTemples("all");

displayTemples("all");

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.classList.toggle("show");
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;