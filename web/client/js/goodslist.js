$(() => {
    $.ajax({
        type: "get",
        url: "../server/goodslist.php",
        dataType: "json",
        success: function (data) {
            console.log(data)
            let html = data.map(item => {
                return `
                <div class="list-show">
                <div class="img">${data.img}</div>
                <div class="goods-info">
                    <span>${data.title}</span>
                </div>
                <div class="goods-box">
                    <div class="goods-title">
                        <span>${data.titleA}</span>
                    </div>
                    <div class="goods-bottom">
                        <span>${data.prive}</span>
                    </div>
                </div>
            </div>               
                `
            }).join("");
            $(".show-list").html(html);
        }
    });




})