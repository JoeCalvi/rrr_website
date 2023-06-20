<script>

</script>

<template>
  <div class="container-fluid">
    <div class="row house-display border-bottom border-dark mb-3">
      <div class="col-md-6 d-none d-md-block example-house" title="Example Roof">
      </div>
      <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
        <div class="text-center">
          <h1 class="font-bebas af-white p-1 mt-3">We Repair.</h1>
          <h1 class="font-bebas af-white p-1">We Replace.</h1>
          <h1 class="font-bebas af-white p-1">Rain or Shine.</h1>
          <router-link :to="{ name: 'contact' }">
            <button class="btn btn-outline-light mt-3 mb-4">Get Your Quote</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-md-4 order-3 order-md-1 d-none d-md-flex flex-column align-items-center justify-content-center mb-3">
        <div class="w-75 mb-3 p-4 review">
          "Phil and his crew are very dedicated to doing a quality job at a fair price. They work hard, were courteous, and aim to please their customer!"
        </div>
        <div>
          <span class="fw-bold"><a class="jet-black selectable" href="https://www.homeadvisor.com/rated.BoisesBestRoofing.60811435.html" title="See Reviews">Melanie G.</a></span>
        </div>
        <div>
          Boise, ID
        </div>
      </div>

      <!-- NOTE mobile version v -->
      <div class="col-md-4 order-3 order-md-1 d-md-none d-flex flex-column align-items-center justify-content-center mb-3">
        <div class="w-75 mb-3 p-4 review">
          "Phil and his crew are very dedicated to doing a quality job at a fair price. They work hard, were courteous, and aim to please their customer!"
        </div>
        <div>
          <span class="fw-bold"><a class="jet-black selectable" href="https://www.homeadvisor.com/rated.BoisesBestRoofing.60811435.html" title="See Reviews">Melanie G.</a></span>
        </div>
        <div class="mb-5">
          Boise, ID
        </div>
      </div>
      <!-- NOTE end mobile version ^ -->

      <div class="col-md-4 order-1 order-md-2 d-none d-md-flex flex-column align-items-center justify-content-center mb-3 border border-dark border-top-0 border-bottom-0">
        <div class="w-75 mb-3 p-4 review">
          "RRR is great. They did an excellent job on getting my roof installed. The quality was top-notch and the crew was excellent. RRR offered the most competitive pricing compared to other companies in the area. The owner is very responsive, transparent about pricing and will get your project done quick, with professional quality. Highly recommend."
        </div>
        <div>
          <span class="fw-bold"><a class="jet-black selectable" href="https://www.homeadvisor.com/rated.BoisesBestRoofing.60811435.html" title="See Reviews">Gary C.</a></span>
        </div>
        <div>
          Boise, ID
        </div>
      </div>

      <!-- NOTE mobile version v -->
      <div class="col-md-4 order-1 order-md-2 d-md-none d-flex flex-column align-items-center justify-content-center mb-3">
        <div class="w-75 mb-3 p-4 review">
          "RRR is great. They did an excellent job on getting my roof installed. The quality was top-notch and the crew was excellent. RRR offered the most competitive pricing compared to other companies in the area. The owner is very responsive, transparent about pricing and will get your project done quick, with professional quality. Highly recommend."
        </div>
        <div>
          <span class="fw-bold"><a class="jet-black selectable" href="https://www.homeadvisor.com/rated.BoisesBestRoofing.60811435.html" title="See Reviews">Gary C.</a></span>
        </div>
        <div class="mb-5">
          Boise, ID
        </div>
      </div>
      <!-- NOTE end mobile version ^ -->

      <div class="col-md-4 order-2 order-md-3 d-none d-md-flex flex-column align-items-center justify-content-center mb-3">
        <div class="w-75 mb-3 p-4 review">
          "Phil is very friendly, professional and true to his word. Work was done on time and done right. I would recommend Phil and his team to anyone."
        </div>
        <div>
          <span class="fw-bold"><a class="jet-black selectable selectable" href="https://www.homeadvisor.com/rated.BoisesBestRoofing.60811435.html" title="See Reviews">Rex C.</a></span>
        </div>
        <div>
          Boise, ID
        </div>
      </div>

      <!-- NOTE mobile version v -->
      <div class="col-md-4 order-2 order-md-3 d-md-none d-flex flex-column align-items-center justify-content-center mb-3">
        <div class="border border-dark border-start-0 border-end-0 d-flex flex-column align-items-center justify-content-center">
          <div class="w-75 mt-3 mb-3 p-4 review">
            "Phil is very friendly, professional and true to his word. Work was done on time and done right. I would recommend Phil and his team to anyone."
          </div>
          <div>
            <span class="fw-bold"><a class="jet-black selectable selectable" href="https://www.homeadvisor.com/rated.BoisesBestRoofing.60811435.html" title="See Reviews">Rex C.</a></span>
          </div>
          <div class="mb-5">
            Boise, ID
          </div>
        </div>
      </div>
      <!-- NOTE end mobile version ^ -->

    </div>
    <div class="row jet-bg-black justify-content-evenly reviews-display">
      <div class="col-md-5 d-flex justify-content-center align-items-center my-3">
        <div class="p-3">
          <h1 class="font-bebas af-white">Our shingles come from</h1>
          <h1 class="font-bebas af-white mb-3">the most trusted name in roofing.</h1>
          <p class="af-white mb-4">GAF is the leading roofing manufacturer in North America, with plants strategically located across the United States. More American homes and businesses are protected by a GAF roof than by any other product.</p>
          <div class="text-end d-none d-md-block">
            <h1 class="mb-3 af-white font-bebas">Yours should, too.</h1>
            <a href="https://www.gaf.com/en-us/roofing-products/residential-roofing-products/shingles?Action=GetGrid">
              <button class="btn btn-outline-light">See Shingles Options</button>
            </a>
          </div>

          <!-- NOTE mobile version v -->
          <div class="text-center d-block d-md-none">
            <h1 class="mb-3 af-white font-bebas">Yours should, too.</h1>
            <a href="https://www.gaf.com/en-us/roofing-products/residential-roofing-products/shingles?Action=GetGrid">
              <button class="btn btn-outline-light">See Shingles Options</button>
            </a>
          </div>
          <!-- NOTE end mobile version ^ -->

        </div>
      </div>
      <div class="col-md-5 d-none d-md-flex justify-content-center align-items-center">
        <a href="https://www.gaf.com/en-us/roofing-products/residential-roofing-products/shingles?Action=GetGrid">
          <img src="../assets/images/RRRbrandLogo3square_thumbnail.png" class="gaf-logo-2 mb-3 p-3" title="See Shingle Selection" alt="GAF Master Elite Logo">
        </a>
      </div>
    </div>
  </div>
</template>

<style>

.business-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 50px;
  border-bottom: 1px solid black;
}

.house-display {
  background-color: #292929;
  letter-spacing: 8px;
}

.review {
  color: black;
  text-indent: 16px;
}

.example-house {
  background-image: url(../assets/images/RRRhouse1.jpeg);
  background-position: center;
  background-size: cover;
  height: 500px;
}

.gallery-img {
  border-radius: 25px;
}


.gaf-logo-2 {
  height: 450px;
  width: 450px;
}

</style>