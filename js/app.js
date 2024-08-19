const header = document.querySelector("#header");

const headerHandler = () => {
  header.insertAdjacentHTML(
    "beforeend",
    `
    <div id="nav">
        <div id="logo">
          <h1>Panto</h1>
        </div>
        <div id="menu">
          <ul>
            <li>
              <a href="#"
                >Furniture <img src="../images/arrow.png" alt="" class="arrow" />
              </a>
            </li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div id="basket">
          <img src="../images/Bag.png" alt="" />
          <span>0</span>
        </div>
      </div>
      <div id="main-header">
        <div id="header-title">
          <h2>Make your interior more minimalistic & modern</h2>
          <p>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
        </div>

        <div id="search-bar">
          <input type="text" placeholder="Search furniture" />
          <div id="search-icon">
            <img src="../images/search.png" alt="" />
          </div>
        </div>
      </div>
    `
  );
};

window.addEventListener("load", () => {
  headerHandler();
});
