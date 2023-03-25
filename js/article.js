const featuredItems = [
  {
    image: "img/tichi.jpg",
    title:
      "Encouraging and Discouraging Factors in the Decision to Become an Israeli Leader in Religious Schools",
    pdf: "article/EncouragingArticle.pdf",
  },
  {
    image: "articles.png",
    title: "Shedding Light on the Phenomenon of Supervision Traveling Incogni",
    pdf: "article/Shedding Light on the Phenomenon of Supervision Traveling Incogni.pdf",
  },
  {
    image: "articles.png",
    title:
      "John Dewey’s Critique of Scientific Dogmatism in Education and Implications for Supervision",
    pdf: "article/John Dewey_s Critique of Scientific Dogmatism in Education and Im.pdf",
  },
  {
    image: "articles.png",
    title: "Personal Reflections on Supervision as Instructional Leadership",
    pdf: "article/Personal Reflections on Supervision as Instructional Leadership_.pdf",
  },
  {
    image: "articles.png",
    title:
      "Gender Differences in Instructional Leadership: How Male and Female  Principals perform their instructional leadership role",
    pdf: "article/GENDER differences in instructional leadership how male and female principals perform their instructional leadership role.pdf",
  },
  {
    image: "articles.png",
    title:
      "Instructional leadership practices among principals in Israeli and US Jewish school",
    pdf: "article/VENUSfulltext.pdf",
  },
  {
    image: "cvPage.png",
    title: "Between Venus and Mars: ",
    description: "VENUSfulltext",
  },
];

const featuredCarousel = document.querySelector(".featured-carousel");

featuredItems.forEach((item) => {
  const featuredItem = document.createElement("div");
  featuredItem.classList.add("featured-item");
  featuredItem.innerHTML = `
    <a href="${item.pdf}" target="_blank">
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      </a>
      `;
  featuredCarousel.appendChild(featuredItem);
});

// <p>${item.description}</p>
