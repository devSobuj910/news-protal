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
  console.log(data);
  const cardParent = document.getElementById("card-parent");

  data.forEach((news) => {
    const cretcardDiv = document.createElement("div");
    cretcardDiv.classList.add("card");
    cretcardDiv.innerHTML = `
    
      <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">


                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div class="card-footer d-flex">
                    <div  class="author d-flex">
                      <img id="author" src="/images/user.png" alt="" />
                      <h4>name: sakila</h4>
                      <p>date:1.2.2.3</p>
                    </div>
                    <div class="viw d-flex"><i class="fa-solid fa-eye"></i></span>1.6M</div>
                    <div class="ratting d-flex">
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star-half-stroke"></i></li>
                      <div class="arow">
                        <li><i class="fa-solid fa-arrow-right"></i></li>
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
