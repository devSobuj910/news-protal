const loadCatagory = async () => {
  try {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const datas = await res.json();
    catagoty(datas.data.news_category);
  } catch (err) {
    console.log(err);
  }
};

const catagoty = (data) => {
  const navUl = document.getElementById("navbar-menu");
  console.log(data);

  data.forEach((sData) => {
    const creatElemet = document.createElement("li");
    creatElemet.classList.add("nav-item");
    creatElemet.innerHTML = `
    

     <a href="#" onclick="loadNews('${sData.category_id}')">${sData.category_name}</a>
    
    
    `;
    navUl.appendChild(creatElemet);
  });
};

loadCatagory();

const loadNews = (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showNews(data));
};

const showNews = (data) => {
  console.log(data);
};
