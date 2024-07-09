class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class = "void">
        <div class="nav">
        <img src="/images/Heart.png" alt="An anatomical heart made of computer cables">
        <div id="nav-header">
            <h2>George Eltzroth</h2>
            <h3>Babaloga</h3>
        </div>
        <menu>
            <a href="/index.html">
                ◧&#8239; Home &#8239;◨
            </a>
            <a href="/games.html">
                ◭&#8239; Portfolio &#8239;◮
            </a>
            <a href="/blog.html">
                ◐&#8239; Blog &#8239;◑
            </a>
        </menu>
        </div>
      </div>
      `;
    }
}

customElements.define('header-component', Header);
  
