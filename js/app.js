const header = document.querySelector("#header");

const whyChoosing = document.querySelector("#why-choosing");

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

const whyChoosingHandler = () => {
  whyChoosing.insertAdjacentHTML(
    "beforeend",
    `
    <div id="why-choosing-title">
          <h2>why choosing us</h2>
        </div>
        <div id="why-choosing-reasons">
          <div id="facilities">
            <h3>Luxury facilities</h3>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <span>More Info <img src="../images/Vector.png" alt="" /> </span>
          </div>
          <div id="prices">
            <h3>Affordable Price</h3>
            <p>
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
            </p>
            <span>More Info <img src="../images/Vector.png" alt="" /> </span>
          </div>
          <div id="choices">
            <h3>Many Choices</h3>
            <p>
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
            </p>
            <span>More Info <img src="../images/Vector.png" alt="" /> </span>
          </div>
        </div>
    `
  );
};

window.addEventListener("load", () => {
  headerHandler();
  whyChoosingHandler();
});
