$(() => {
    $.ajax({
        type: "get",
        url: "../server/goodslist.php",
        dataType: "json",
        success: function (data) {
            let html = data.map(item => {
                return `
                <a href="../productshow.html?id=${item.id}">
                <div class="list-show">
                <div class="img"><img src="${item.img}"></div>
                <div class="goods-info">
                    <span>${item.title}</span>
                </div>
                <div class="goods-box">
                    <div class="goods-title">
                        <span>${item.titleA}</span>
                    </div>
                    <div class="goods-bottom">
                        <span>${item.prive}</span>
                    </div>
                </div>
            </div>  
            </a>             
                `
            }).join("");
            $(".show-list").html(html);
        }
    });




})