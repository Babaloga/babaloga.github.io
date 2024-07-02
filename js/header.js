class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="nav">
      <img src="images/Heart.png" alt="An anatomical heart made of computer cables">
      <div id="nav-header">
          <h2>George Eltzroth</h2>
          <h3>Babaloga</h3>
      </div>
      <menu>
          <a href="index.html">
              ◧ Home ◨
          </a>
          <a href="games.html">
              ◭ Portfolio ◮
          </a>
          <a href="blog.html">
              ⬖ Blog ⬗
          </a>
      </menu>
      </div>
      `;
    }
}
  
  customElements.define('header-component', Header);
  
  window.onload = function() {
    Gifffer();
  }
  
