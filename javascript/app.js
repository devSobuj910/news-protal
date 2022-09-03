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
    .then((data) => showNews(data.data));
};

const showNews = (data) => {
  const totlaNews = document.getElementById("total-news-item");
  const lent = data.length;
  if (lent === 0) {
    totlaNews.innerText = "news not found";
  } else {
    totlaNews.innerText = `${lent} news find this catagory`;
  }
  const cardParent = document.getElementById("card-parent");

  data.forEach((news) => {
    const cretcardDiv = document.createElement("div");
    cretcardDiv.classList.add("card");
    cretcardDiv.innerHTML = `

      <div class="card mb-3 " data-bs-toggle="modal" data-bs-target="#card-ditails-modal"  onclick="cardDitails('${
        news._id
      }')">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${
                    news.thumbnail_url
                  }" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">

                  <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">
                      ${news.details}
                    </p>
                  </div>
                  <div class="card-footer d-flex">
                    <div  class="author d-flex">
                      <img id="author" src="${news.author.img} alt="" />
                      <h4>name: ${
                        news.author.name ? news.author.name : "no  name found"
                      }</h4>
                      <p>date${news.author.published_date}</p>
                    </div>
                    <div class="viw d-flex">
                    <i class="fa-solid fa-eye"></i></span>${
                      news.total_view
                    }</div>
                    <div class="ratting d-flex">
                    <li> rating:${news.rating.number}</li>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    `;

    cardParent.appendChild(cretcardDiv);
  });
};

const cardDitails = (news_id) => {
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => showDitails(data.data[0]));
};

const showDitails = (data) => {
  console.log(data);

  const mdalparent = document.getElementById("modal-dilog");
  mdalparent.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
    ${data.title}
          </h5>

       
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
         <p>${data.details}</p>
         <span>Total-view: <i class="fa-solid fa-eye"> </i> ${data.total_view}</span>
        
        </div>
        
        <div class="modal-footer">

        
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>

  `;
};
