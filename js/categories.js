var category_list = "";
fetch("https://dummyjson.com/products/categories")
    .then((response) => response.json())
    .then(function (data) {
        let category_item = data.length
        for (let i = 0; i < category_item; i++) {
            category_list += `<p class="category-list">
                                ${data[i]}
                                <span style="float: right"><i class="fa fa-check-circle-o" style="font-size:18px"></i></span>
                            </p>` 
        }
        document.getElementById("category_lists").innerHTML = category_list
    })