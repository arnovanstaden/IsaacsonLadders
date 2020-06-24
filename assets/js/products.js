// LADDERS

// Get ladder data
if (window.location.pathname.includes("/products/ladders")) {
    axios({
        method: "get",
        url: "../../assets/js/product-info/ladders.json"
    }).then(result => {
        const ladders = result.data;

        if (window.location.pathname === ("/products/ladders/index.html")) {
            loadLadderData(ladders);
        } else if (window.location.pathname === ("/products/ladders.html")) {
            loadLadderProductGrid(ladders)
        }
    });
}


// load ladder product page grid data
const loadLadderProductGrid = (ladders) => {
    const ladderKeys = Object.keys(ladders);
    ladderKeys.forEach(key => {
        let ladder = ladders[key]
        $("#ladder-products-grid").append(
            `
            <a class="product" href="./ladders/index.html#${key}" data-product-type="ladder-single-sided">
                <div class="product-img">
                    <img src="../assets/images/products/ladders/${ladder.product_image}"
                        alt="${ladder.product_grid_name}">
                </div>
                <div class="product-description">
                    <h4>${ladder.product_grid_name}</h4>
                </div>
            </a>
        `
        )
    })

}


// load product specific page ladder data
const loadLadderData = (ladders) => {
    if (window.location.hash === "") {
        return window.location.replace("../ladders.html")
    }
    let ladderName = window.location.hash.replace("#", "");
    let ladder = ladders[ladderName];
    console.log(ladder)
    // 

    // Insert HTML
    document.title = ladder.product_grid_name;
    $(".ladder-product-name h1").html(ladder.name);
    $(".ladder-product-image img").attr("src", `../../assets/images/products/ladders/${ladder.product_image}`);

    ladder.specifications.forEach(spec => {
        $(".ladder-product-specs").append(
            `<li> <i class="fas fa-square"></i> ${spec} </li>`
        );
    });

    // Product Ranges
    ladder.product_range.forEach(range => {
        $(".ladder-product-range").append(
            `
            <div class="product-range-item">
                <p class="item-code">${range.product_code}</p>
                <p class="item-description">${range.description}</p>
                <p class="item-height">${range.height ? range.height + " m" : "-"} </p>
                <p class="item-weight">${range.weight ? range.weight + " kg" : "-"} </p>
                <p class="item-steps">${range.steps ? range.steps : "-"}</p>
            </div>
          `
        );

        $(".ladder-product-range-mobile").append(
            `
            <div class="product-range-item">
            <h6>Product Code</h6>
            <p class="item-code">${range.product_code}</p>
            <h6>Description</h6>
            <p class="item-description">${range.description}</p>
            <h6>Height</h6>
            <p class="item-height">${range.height ? range.height + " m" : "-"} </p>
            <h6>Weight</h6>
            <p class="item-weight">${range.weight ? range.weight + " kg" : "-"} </p>
            <h6>Steps</h6>
            <p class="item-steps">${range.steps ? range.steps : "-"}</p>
        </div>
          `
        );


    });

    let columnLength = 5 - ladder.remove_columns.length;
    $(".ladder-product-range > div").addClass(`column-${columnLength}`);

    if (columnLength === 4) {
        $(".ladder-product-range .product-range-headings p:last-child, .ladder-product-range .product-range-item p:last-child").remove()
    } else if (columnLength === 3) {
        $(".ladder-product-range .product-range-headings p:last-child, .ladder-product-range .product-range-item p:last-child").remove()
        $(".ladder-product-range .product-range-headings p:last-child, .ladder-product-range .product-range-item p:last-child").remove()
    }
}

// Get Ladder Name