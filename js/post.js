fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then(function (data) {
    //first page render first 5 products
    let first_page_products = ""
    for (let i = 0; i < 5; i++) {
      first_page_products += `<div class="col-lg-5 col-sm-12 col-md-12 post_details mt-5 mb-5">
      <div><span class="extra-image">More Images</span></div>
                            <img src="${data.products[i].thumbnail}" class="rounded blog-image shimmer-effect">
                          </div>
                                  <div class="col-lg-7 col-md-12 col-sm-12 sea-content">
                                    <h2 class="heading-text-info">
                                    ${data.products[i].title}
                                    </h2>
                                    <p class="writer-text">
                                    Category <a href="/">${data.products[i].category}</a>
                                    </p>
                                    <p style="margin-left: -50px; text-align: justify">
                                      ${data.products[i].description}
                                    </p>
                                    <p style="margin-left: -50px; text-align: justify">
                                      Price : ${data.products[i].price}
                                    </p>
                                    <p style="margin-left: -50px; text-align: justify">
                                    discountPercentage : ${data.products[i].discountPercentage}
                                    </p>
                                    <p style="margin-left: -50px; text-align: justify">
                                    Rating : ${data.products[i].rating}
                                    </p>
                                  </div>`;
    }
    document.getElementById("post-details").innerHTML = first_page_products;

    //pagination operation
    let len = data.total;
    let page_number = Math.ceil(len / 5);
    let page_html_code = "";
    for (let p = 0; p < page_number; p++) {
      page_html_code += `<li class="page-item">
                              <a class="page-link" onclick="pagination_function('https://dummyjson.com/products?limit=${5}&skip=${p * 5}')" >${p + 1}</a>
                          </li>`
    }
    document.getElementById("paginations").innerHTML = page_html_code;
  });
function pagination_function(val) {
  fetch(val)
    .then((response) => response.json())
    .then(function (data) {
      let result = "";
      for (let j = 0; j < 5; j++) { 
        result += `     <div class="col-lg-5 col-sm-12 col-md-12 post_details mt-5">
                          <div><span class="extra-image">More Images</span></div>
                            <img src="${data.products[j].thumbnail}" class="rounded blog-image shimmer-effect">
                          </div>
                          <div class="col-lg-7 col-md-12 col-sm-12 sea-content">
                            <h2 class="heading-text-info">
                            ${data.products[j].title}
                          </h2>
                          <p class="writer-text">
                            Category <a href="/">${data.products[j].category}</a>
                          </p>
                          <p style="margin-left: -50px; text-align: justify">
                            ${data.products[j].description}
                          </p>
                          <p style="margin-left: -50px; text-align: justify">
                            Price : ${data.products[j].price}
                          </p>
                          <p style="margin-left: -50px; text-align: justify">
                            discountPercentage : ${data.products[j].discountPercentage}
                          </p>
                          <p style="margin-left: -50px; text-align: justify">
                            Rating : ${data.products[j].rating}
                          </p>
                        </div> <hr>`;
      }
      document.getElementById("post-details").innerHTML = result;
    }
    )
}
