const featuredItems = [
  {
    image: "img/Encouraging and Discouraging-thumbnail.jpg",
    title:
      "Encouraging and Discouraging Factors in the Decision to Become an Israeli Leader in Religious Schools",
    pdf: "article/EncouragingArticle.pdf",
  },
  {
    image:
      "img/a supervisor or manager observing employees from a distance.jpg",
    title: "Shedding Light on the Phenomenon of Supervision Traveling Incogni",
    pdf: "article/Shedding Light on the Phenomenon of Supervision Traveling Incogni.pdf",
  },
  {
    image: "img/a supervisor or mentor working with a teacher or student.jpg",
    title:
      "John Dewey’s Critique of Scientific Dogmatism in Education and Implications for Supervision",
    pdf: "article/John Dewey_s Critique of Scientific Dogmatism in Education and Im.pdf",
  },
  {
    image: "img/group of teachers engaged in professional development .jpg",
    title: "Personal Reflections on Supervision as Instructional Leadership",
    pdf: "article/Personal Reflections on Supervision as Instructional Leadership_.pdf",
  },
  {
    image: "img/male and female principal standing side by side.jpg",
    title:
      "Gender Differences in Instructional Leadership: How Male and Female  Principals perform their instructional leadership role",
    pdf: "article/GENDER differences in instructional leadership how male and female principals perform their instructional leadership role.pdf",
  },
  {
    image: "img/Israeli and US flag side by side (Medium).png",
    title:
      "Instructional leadership practices among principals in Israeli and US Jewish school",
    pdf: "article/InstrlLdrspIJEF.pdf",
  },
  {
    image: "img/planet Venus and the planet Mars.png",
    title:
      "Between Venus and Mars: Sources of gender differences in instructional leadership",
    pdf: "article/VENUSfulltext.pdf",
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
