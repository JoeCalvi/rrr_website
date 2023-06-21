<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar d-none d-md-flex align-items-center elevation-3 justify-content-start">
    <div class="d-flex gap-3 align-items-center">
      <div>
        <router-link :to="{ name: 'home' }">
          <img src="../src/assets/images/RRRlogo1.png" class="header-logo ps-3 selectable
          " alt="River Rock Roofing Logo">
        </router-link>
      </div>
      <div>
        <router-link class="nav-link selectable" :to="{ name: 'home' }">
          Home
        </router-link>
      </div>
      <div>
        <router-link class="nav-link selectable" :to="{ name: 'about' }">
          About
        </router-link>
      </div>
      <div>
        <router-link class="nav-link selectable" :to="{ name: 'gallery'}">
          Gallery
        </router-link>
      </div>
      <div>
        <router-link class="nav-link selectable" :to="{ name: 'contact'}">
          Contact
        </router-link>
      </div>
    </div>
  </header>
    <div class="collapse d-md-none" id="navbarToggle">
      <div class="bg-brown p-4">
        <div class="d-flex flex-column gap-3 align-items-center">
            <div>
              <router-link class="nav-link selectable" :to="{ name: 'home' }">
                <span data-bs-toggle="collapse" data-bs-target="#navbarToggle">Home</span>
              </router-link>
            </div>
            <div>
              <router-link class="nav-link selectable" :to="{ name: 'about' }">
                <span data-bs-toggle="collapse" data-bs-target="#navbarToggle">About</span>
              </router-link>
            </div>
            <div>
              <router-link class="nav-link selectable" :to="{ name: 'gallery'}">
                <span data-bs-toggle="collapse" data-bs-target="#navbarToggle">Gallery</span>
              </router-link>
            </div>
            <div>
              <router-link class="nav-link selectable" :to="{ name: 'contact'}">
                <span data-bs-toggle="collapse" data-bs-target="#navbarToggle">Contact</span>
              </router-link>
            </div>
          </div>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-brown d-flex d-md-none">
      <div class="container-fluid d-flex justify-content-between">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div>
        <router-link :to="{ name: 'home' }">
          <img src="../src/assets/images/RRRlogo1.png" class="header-logo ps-3 selectable
          " data-bs-toggle="collapse" data-bs-target="#navbarToggle" alt="River Rock Roofing Logo">
        </router-link>
      </div>
      </div>
    </nav>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-center elevation-3 sticky-top af-bg-white border-bottom border-dark">
        <div class="col-md-4">
          <h1 class="business-name mt-3 text-center">River Rock Roofing</h1>
          <h2 class="font-bebas mt-3 mb-3 text-center">Roofs Done Right.</h2>
        </div>
      </div>
    </div>
    <RouterView />
  </main>
  <footer class="d-flex justify-content-evenly align-items-center">
    <div class="d-none d-md-block">
      <img src="../src/assets/images/RRRbrandLogo2.jpeg" class="gaf-logo-3" alt="GAF Certified Roofing Contractor">
    </div>
    <div class="d-flex">
      <div>
        <img src="../src/assets/images/RRRlogo2.png" class="footer-logo pe-3" alt="River Rock Roofing Alternate Logo">
      </div>
      <div class="footer-text text-center">
        <div>
          208-794-3280
        </div>
        <div>
          riverrockroofing@icloud.com
        </div>
      </div>
    </div>
    <div class="d-none d-md-block">
      <img src="../src/assets/images/RRRbrandLogo1.jpeg" class="gaf-logo-1" alt="GAF Authorized Roofing Contractor">
    </div>
  </footer>
</template>

<style scoped>
.header-logo {
  max-width: 100px;
  height: 60px;
}

.nav-link {
  color: #EAEBED;
  text-shadow: 1px 1px 2px black;
}

.nav-link:hover {
  border-bottom: 1px solid #EAEBED;
}
.footer-logo {
  max-width: 100px;
  height: 45px;
}

.footer-text {
  color: #EAEBED;
  text-shadow: 1px 1px 2px black;
}

.gaf-logo-1 {
  height: 50px;
  width: 150px;
}

.gaf-logo-3 {
  height: 50px;
  width: 150px;
  border: 2px solid #011d51;
}
</style>
