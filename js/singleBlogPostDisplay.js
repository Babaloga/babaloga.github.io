class IndividualBlogPost extends HTMLElement {

    constructor() {
        super();
      }

    async connectedCallback() 
    {
        if(window.location.hash)
        {
            console.log(window.location.hash);
            var fileName = "/blog/" + window.location.hash.replace("#", "") + ".html";
            console.log(fileName);
            var promise = await fetch(fileName).then(response => {
                if (!response.ok) 
                {
                    throw new Error("HTTP error " + response.status);
                }
                return response.text();
            });
            this.innerHTML += promise;

            
            new Freezeframe({trigger: "click", overlay: true});
        }
        else 
        {
            window.location.replace("/blog.html");
        }
    }
}

customElements.define('individual-blog-post', IndividualBlogPost);