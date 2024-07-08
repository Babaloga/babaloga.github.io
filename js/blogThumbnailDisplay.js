class BlogThumbFeed extends HTMLElement {
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

        var directoryElements = directory.array;

        for (let i = 0; i < directoryElements.length; i++) {
            var promise = await fetch(directoryElements[i]).then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.text();
            });
            

            this.innerHTML += this.renderBlogPost(directoryElements[i], promise);
        } 
/*
        var fileContents = directoryElements.map(async(file) => 
            {
                var promise = await fetch(file);

                console.log(promise);

                if (!promise.ok) {
                    throw new Error
                        (`HTTP error! Status: ${promise.status}`);
                }

                var content = await promise.json;

                console.log(content);

                return content;
            });

        fileContents.forEach((file) => this.innerHTML += this.renderBlogPost((file)));
        */
      }

    renderBlogPost(fileName, object) {
        var parser = new DOMParser();
    
        var htmlDoc = parser.parseFromString(object, 'text/xml');
        let blogTitle = object.match("<h2>(.*)</h2>")[0].slice(4, -5);
        let blogDate = fileName.replace('.html', "").replace("blog\\", "");
        let blogDateFormatted = new Date(Date.parse(blogDate)).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

        return `
            <div class="blogpost-thumb" id="${blogDate}">
                <a href="/blog/${blogDate}.html">
                    <h3>${blogTitle}</h3>
                    <h4>${blogDateFormatted}</h4>
                </a>
            </div>
        `;
    }
}

 customElements.define('blog-thumb-feed', BlogThumbFeed)
  
