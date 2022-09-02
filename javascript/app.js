const loadCatagory = async () => {
  try {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const datas = await res.json();
    console.log(datas);
    catagoty(datas.data.news_category);
  } catch (err) {
    console.log(err);
  }
};

const catagoty = (data) => {
  console.log(data);

  const navUl = document.getElementById("navbar-menu");

  data.forEach((sData) => {
    const creatElemet = document.createElement("li");
    creatElemet.classList.add("nav-item");
    creatElemet.innerHTML = sData.category_name;
    navUl.appendChild(creatElemet);
  });
};

loadCatagory();
