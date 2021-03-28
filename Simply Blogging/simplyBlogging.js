var postLocation = 0; //used to determine which box to post the blog to
var postObj = [];
var postString;
function addBlog(){
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var image = document.getElementById("image").files[0].name;
    // console.log(title);
    // console.log(article);
    // console.log(imageInfo);
    var obj = {};
    obj.title = document.getElementById("titleInfo"+String(postLocation)).innerHTML=title;
    obj.article = document.getElementById("articleInfo"+String(postLocation)).innerHTML=article;
    obj.image = document.getElementById("imageInfo"+String(postLocation)).src=image;
    postLocation = (postLocation + 1)%3
    postObj.push(obj);
    postString = JSON.stringify(postObj);
    storeInSession()
    resetFields();
}
function storeInSession() {
    sessionStorage.setItem("postInfo",postString);
}

function resetFields(){
    document.getElementById("title").value="";
    document.getElementById("article").value="";
    document.getElementById("image").value="";
}
