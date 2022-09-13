document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#searchbtn").addEventListener("click", async function (e) {
        e.preventDefault();
        console.log(e);
        let termToSearch = document.querySelector("#search").value;
        let paramToPass = {
            params: {
                q: termToSearch,
                api_key: "GWtfzhKouT6QhD96FNN3HpGhgtnSXQ9O"
            }
        }
        let res = await axios.get("http://api.giphy.com/v1/gifs/search", paramToPass);
        appendGif(res);
    });

    function appendGif(res) {
        console.log(res.data.length);

        let randGifNum = Math.round(Math.random() * res.data.data.length);
        let url = res.data.data[randGifNum].images.original.url
        let gifarea = document.querySelector("#gifarea");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", url);
        newImg.setAttribute("class", "img-fluid");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "col-4 p-3");
        newDiv.append(newImg);
        gifarea.append(newDiv);
    }

    document.querySelector("#removebtn").addEventListener("click", function () {
        let gifarea = $("#gifarea");
        gifarea.empty();
    });

});