document.addEventListener('DOMContentLoaded', async function() {
    let data = [];
    let datac = [];
    let p;
    const articleId = new URLSearchParams(window.location.search);
     for (p of articleId.values()) {
         await loadArticle(p);
         datac = await getComments(p);
     }
    async function loadArticle(paramId) {
        let response =await fetch('https://gorest.co.in/public/v2/posts/'+paramId);
        data = await response.json();
    }

    let main = document.createElement('a');
    main.textContent = 'На главную';
    main.href = 'index.html';
    document.body.append(main);

    let h1 = document.createElement('h1');
    h1.textContent=data.title;
    document.body.append(h1);
    let pBody = document.createElement('p');
    pBody.textContent=data.body;
    document.body.append(pBody);

let h2 = document.createElement('h2');
h2.textContent='Комментарии:';
document.body.append(h2);
for (let com of datac.data) {
    let h3_com = document.createElement('h3');
    h3_com.textContent=com.name;
    document.body.append(h3_com);
    let p_com = document.createElement('p');
    p_com.textContent=com.body;
    document.body.append(p_com);
}

async function getComments(articleID) {
    let responsec = await fetch('https://gorest.co.in/public-api/comments?post_id=1151');
    return await responsec.json();
    //console.log(dataс);
    //console.log(responsec);
    //GET https://gorest.co.in/public-api/comments?post_id=4
}
})


