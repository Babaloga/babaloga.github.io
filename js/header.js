class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <img src="heart.png" alt="An anatomical heart made of computer cables">
      <div id="nav-header">
          <h2>George Eltzroth</h2>
          <h3>Babaloga</h3>
      </div>
      <menu>
          <a href="index.html">
              <li id="desktop-li">◧ Home ◨</li>
              <li id="mobile-li">◧ Home</li>
          </a>
          <a href="games.html">
              <li id="desktop-li">◭ Portfolio ◮</li>
              <li id="mobile-li">◭ Portfolio</li>
          </a>
          <a href="blog.html">
              <li id="desktop-li">◐ Blog ◑</li>
              <li id="mobile-li">◐ Blog</li>
          </a>
      </menu>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  
