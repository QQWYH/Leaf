$(() => {
    var url = location.search.split('=')[1];
    console.log(url)
    $.ajax({
        type: "get",
        data: url,
        url: "../server/goodsdetails.php",
        dataType: "json",
        success: function (data) {
            console.log(data)
            let html = data.map(item => {
                return `
            <a href="./productshowa.html?id=${item.id}">
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
            </a>                             `
            }).join("");
            $(".show-list").html(html);
        }
    });

})