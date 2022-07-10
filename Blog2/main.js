document.addEventListener('DOMContentLoaded', async function() {
    console.log("2");
    let data;
    let countPage;
    let numberPage=1;
    const pageId = new URLSearchParams(window.location.search);
    let ul = document.querySelector('#list-articles');
    document.body.append(ul);
    ul.innerHTML = '';
   // await loadArticles(pageId);
   console.log(pageId);
  /* if (pageId.values.length == 0) {
        await loadArticles();
        console.log("1");
   } else {
        for (let y of pageId.values()) {
            await loadArticles(y);
            console.log("2");
        }
   }*/
   
   for (let y of pageId.values()) {
        numberPage = y;
    }
    await loadArticles(numberPage);
    console.log(numberPage);
    data.forEach(element => {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = element.title;
        link.href = 'article.html?id='+element.id;
        ul.append(li);
        li.append(link);
    });

    /*let items_nav = document.querySelectorAll('#navigate li');
    for (let item of items_nav) {
        item.addEventListener('click', function() {
            ul.innerHTML = '';
            loadArticles(item.textContent);
            data.forEach(element => {
                let li = document.createElement('li');
                let link = document.createElement('a');
                link.textContent = element.title;
                link.href = 'article.html?id='+element.id;
                ul.append(li);
                li.append(link);
            });
        });
    }*/
    let nav_title = document.querySelector('#nav_title');
    document.body.append(nav_title);
    let ul_nav = document.querySelector('#navigate');
    document.body.append(ul_nav);
    for (let i = 1; i <= countPage; i++) {
        let item = document.createElement('li');
        item.classList.add("list-group-item");
        let item_link = document.createElement('a');
        item_link.textContent = i;
        item_link.href = 'index.html?page='+i;
        ul_nav.append(item);
        item.append(item_link);
    }
   

    async function loadArticles(page) {
        console.log('1');
        let response =await fetch('https://gorest.co.in/public/v2/posts?page='+page);
        data = await response.json();
        countPage = await response.headers.get("X-Pagination-Pages");
    }
})