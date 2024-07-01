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

    connectedCallback() {
        var directory = fetch("blog/DIRECTORY.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        });

        var directoryElements = directory.array;

        var fileContents = directoryElements.map((file). fetch(file).then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        }));

        fileContents.forEach(this.renderBlogPost);
      }

    renderBlogPost(object) {
        let blogTitle = object.title;
        let blogDate = object.date;
        let blogContent = object.content;
        let blogDateFormatted = Date.parse(blogDate).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

        this.innerHTML += `
            <div class="blogpost" id="${blogDate}">
                <h2>${blogTitle}</h2>
                <h4>${blogdateFormatted}</h4>
                ${blogContent}    
            </div>
        `;
    }
}

  customElements.define('blog-post', BlogPost);
  customElements.define('blog-feed', BlogFeed)
  
