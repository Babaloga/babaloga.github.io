class BlogPost extends HTMLElement {

    constructor(blogData) {
        const obj = JSON.parse(blogData);
        this.title = obj.title;
        this.date = obj.date;
        this.content = obj.content;
    }
  }
  
class BlogFeed extends HTMLElement {
    constructor() {
        super();
      }

    async connectedCallback() {
        var directory = await fetch("blog/DIRECTORY.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        });

        console.log(directory);

        var directoryElements = directory.array;
/*
        for (let i = 0; i < directoryElements.length; i++) {
            var promise = await directoryElements[i];
            console.log(promise);
            if (!promise.ok) {
                throw new Error
                    (`HTTP error! Status: ${promise.status}`);
            }

        } */

        var fileContents = directoryElements.map(async(file) => 
            {
                var promise = await fetch(file);

                console.log(promise);
/*
                if (!promise.ok) {
                    throw new Error
                        (`HTTP error! Status: ${promise.status}`);
                }
*/
                var content = await promise.json;

                console.log(content);

                return content;
            });

        fileContents.forEach((file) => this.innerHTML += this.renderBlogPost((file)));
      }

    renderBlogPost(object) {
        console.log("Render Blog Post:");
        console.log(object)

        let blogTitle = object.title;
        let blogDate = object.date;
        let blogContent = object.content;
        let blogDateFormatted = new Date(Date.parse(blogDate)).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

        return `
            <div class="blogpost" id="${blogDate}">
                <h2>${blogTitle}</h2>
                <h4>${blogDate}</h4>
                ${blogContent}    
            </div>
        `;
    }
}

  customElements.define('blog-post', BlogPost);
  customElements.define('blog-feed', BlogFeed)
  
