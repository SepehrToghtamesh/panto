const header = document.querySelector("#header");
const whyChoosing = document.querySelector("#why-choosing");
const bestSelling = document.querySelector("#best-selling");
const experiences = document.querySelector("#experiences");
const materials = document.querySelector("#materials");
const clientReviews = document.querySelector("#client-reviews");
const footer = document.querySelector("footer");

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

const bestSellingHandler = () => {
  bestSelling.insertAdjacentHTML(
    "beforeend",
    `
  <div id="best-selling-title">
          <h2>Best Selling Product</h2>
        </div>
        <div id="best-selling-options">
          <ul>
            <li><a href="#">Chair</a></li>
            <li><a href="#">Bed</a></li>
            <li><a href="#">Sofa</a></li>
            <li><a href="#">Lamp</a></li>
          </ul>
        </div>
        <div id="products">
          <div id="product">
            <img src="../images/armchair3.png" alt="" />
            <span>Chair</span>
            <h4>Sakarias Armchair</h4>
            <img src="../images/full stars.png" alt="" />
            <div id="price-plus">
              <span>$398</span>
              <a href="#">+</a>
            </div>
          </div>
          <div id="product">
            <img src="../images/armchair.png" alt="" />
            <span>Chair</span>
            <h4>Baltsar Chair</h4>
            <img src="../images/full stars.png" alt="" />
            <div id="price-plus">
              <span>$299</span>
              <a href="#">+</a>
            </div>
          </div>
          <div id="product">
            <img src="../images/armchair1.png" alt="" />
            <span>Chair</span>
            <h4>Anjay Chair</h4>
            <img src="../images/full stars.png" alt="" />
            <div id="price-plus">
              <span>$519</span>
              <a href="#">+</a>
            </div>
          </div>
          <div id="product">
            <img src="../images/armchair2.png" alt="" />
            <span>Chair</span>
            <h4>Nyantuy Chair</h4>
            <img src="../images/full stars.png" alt="" />
            <div id="price-plus">
              <span>$921</span>
              <a href="#">+</a>
            </div>
          </div>
        </div>
        <div id="view-all">
          <span>View all <img src="../images/Vector.png" alt="" /></span>
        </div>
  
  `
  );
};

const experiencesHandler = () => {
  experiences.insertAdjacentHTML(
    "beforeend",
    `
  <div id="experiences-img">
          <img src="../images/shadow1.png" alt="" class="shadow-top">
          <img src="../images/experience.png" alt="" class="main-img" />
          <img src="../images/shadow.png" alt="" class="shadow-bottom">
        </div>
        <div id="experiences-desc">
          <span class="title">experiences</span>
          <h2>we provide you the best experience</h2>
          <p>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <span class="info">More Info <img src="../images/Vector.png" alt="" /></span>
        </div>
  `
  );
};

const materialsHandler = () => {
  materials.insertAdjacentHTML(
    "beforeend",
    `
  <div id="materials-desc">
          <span class="title">Materials</span>
          <h2>Very serious <br>materials for making <br>furniture</h2>
          <p>
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
          </p>
          <span class="info">More Info <img src="../images/Vector.png" alt="" /></span>
        </div>

        <div id="materials-img">
          <img src="../images/material2.png" alt="" class="main-img">
          <img src="../images/material.png" alt="" class="first-img">
          <img src="../images/material1.png" alt="" class="second-img" >
          <img src="../images/shadow.png" alt="" class="shadow">
        </div>
  `
  );
};

const clientReviewsHandler = () => {
  clientReviews.insertAdjacentHTML(
    "beforeend",
    `
  <span>Testimonials</span>
        <h2>Our Client Reviews</h2>
        <div id="reviews">
          <div id="review" class="review-one">
            <div id="review-container">
              <div id="profile">
                <img src="./images/client.png" alt="" />
              </div>
              <h4 id="client-name">Bang Upin</h4>
              <p id="client-desc">Pedagang Asongan</p>
              <p id="client-opinion">
                “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                terlihat mahal“
              </p>
              <img src="./images/stars.png" alt="" id="star" />
            </div>
          </div>
          <div id="review" class="review-two">
            <div id="review-container">
              <div id="profile">
                <img src="./images/client1.png" alt="" />
              </div>
              <h4 id="client-name">Ibuk Sukijan</h4>
              <p id="client-desc">Ibu Rumah Tangga</p>
              <p id="client-opinion">
                “Makasih Panto, aku sekarang berasa tinggal di apartment karena
                barang-barang yang terlihat mewah“
              </p>
              <img src="./images/stars.png" alt="" id="star" />
            </div>
          </div>
          <div id="review" class="review-three">
            <div id="review-container">
              <div id="profile">
                <img src="./images/client2.png" alt="" />
              </div>
              <h4 id="client-name">Mpok Ina</h4>
              <p id="client-desc">Karyawan Swasta</p>
              <p id="client-opinion">
                “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
              </p>
              <img src="./images/stars.png" alt="" id="star" />
            </div>
          </div>
        </div>
  `
  );
};

const footerHansler = () => {
  footer.insertAdjacentHTML(
    "beforeend",
    `
   <div id="top-footer">
        <div id="logo">
          <h4>Panto</h4>
          <p>
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div id="services">
          <span>Services</span>
          <ul>
            <li><a href="#">Email Marketing</a></li>
            <li><a href="#">Campaigns</a></li>
            <li><a href="#">Branding</a></li>
          </ul>
        </div>
        <div id="furniture">
          <span>Furniture</span>
          <ul>
            <li><a href="#">Bed</a></li>
            <li><a href="#">Chair</a></li>
            <li><a href="#">All</a></li>
          </ul>
        </div>
        <div id="follow-us">
          <span>Follow US</span>
          <ul>
            <li>
              <a href="#"
                ><img src="../images/facebook.png" alt="" /> Facebook</a
              >
            </li>
            <li>
              <a href="#"><img src="../images/twitter.png" alt="" /> Twitter</a>
            </li>
            <li>
              <a href="#"
                ><img src="../images/instagram.png" alt="" /> Instagram</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div id="bottom-footer">
        <div id="copy-right"><p>Copyright &copy; 2024. Lo</p></div>
        <div id="terms-policy">
          <p class="terms">Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
  `
  );
};

window.addEventListener("load", () => {
  headerHandler();
  whyChoosingHandler();
  bestSellingHandler();
  experiencesHandler();
  materialsHandler();
  clientReviewsHandler();
  footerHansler();
});
