
<template>
  <div class="container-fluid">
    <div class="row jet-bg-black">
      <!-- TODO adjust for mobile -->
      <div class="col-md-6 d-flex align-items-center my-3">
        <img src="../assets/images/aboutmepicRRR.jpeg" class="img-fluid rounded elevation-3" alt="">
      </div>
      <div class="col-md-6 main-height d-flex align-items-center justify-content-center mb-3">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="text-center">
            <h1 class="font-bebas af-white">Who We Are</h1>
          </div>
          <div class="bio d-flex flex-column align-items-center">
            <p class="bio-chunk">
              River Rock Roofing is owned and operated by Phillip Bauer.
              With over 25 years of experience, he brings professionalism, expertise, and outstanding customer service to every job. 
              <br>
            </p>
            <p class="bio-chunk">
              Whether it's residential or commercial, metal or asphalt, repair or replace; 
              River Rock Roofing will walk you through your options and provide a free inspection and estimate. 
              We can even work with your homeowner’s insurance. River Rock Roofing backs their work with a <span class="warranty">10 year labor warranty</span>.
              <br>
            </p>
            <h5 class="text-center">More About Phil</h5>
            <p class="bio-chunk">
              Phillip has lived and worked in the Treasure Valley for over 20 years. 
              Phillip and his wife, Christie, run River Rock Roofing as a team. 
              Currently residing in Kuna, Phillip and his family are very involved in their community. 
              River Rock Roofing is proud to support local sports teams with both sponsorships and coaching. 
              Family and community are our first priority. 
              When they’re not running a job, you can find them camping or fishing - enjoying all that Idaho has to offer.
              We are happy you are here and we can’t wait to help you with all your roofing needs.
              <router-link :to="{ name: 'contact'}" class="af-white">
                Contact us about your roof today!
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-height {
  height: 65vh;
}

.bio {
  color: #EAEBED;
  text-shadow: 1px 1px 1px black;
  height: 350px;
  overflow-y: scroll;
}

.bio-chunk {
  text-indent: 40px;
  width: 90%;
}

.warranty {
  text-decoration: underline;
  font-weight: 600;
}
</style>
