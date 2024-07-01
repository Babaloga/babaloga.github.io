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
        var fs = require('fs');
        var files = fs.readdirSync('/blog-posts/');

        var fileContents = files.forEach(fs.readFile)

        files.forEach(filecontents);
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
  
