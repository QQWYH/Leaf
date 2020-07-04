$(() => {
    var url = location.search.split('=')[1];
    $.ajax({
        type: "get",
        data: { url },
        url: "./../server/productshow.php",
        dataType: "json",
        success: function (data) {
            let html = data.map(item => {
                return `
                <div class="p-con">
                <div class="p-left"><img src="${item.img}"></div>
                <div class="p-right">
                    <div class="title">${item.title}</div>
                    <div class="titleA">${item.titleA}</div>
                    <div class="prive">${item.prive}</div>
                    <div class="cout">
                        <div class="yds">
                            <select name="num" id="select">
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="count">
                            <input type="text" id="num">
                        </div>
                       
                    </div>
                </div>
            </div>
                `
            }).join("");
            $(".p-conter-con").html(html);
        }
    });



})