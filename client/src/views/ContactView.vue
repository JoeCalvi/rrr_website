<script>

import { ref } from "vue";
import { constactService } from "../services/ContactService";

    export default {
      data() {
        const editable = ref({
          job: "",
          type: "N/A",
          color: "N/A"
        })
        return {
          editable,

          async sendMessage() {
            try {
              const messageData = editable.value
  
              if(messageData.repair == true) {
                messageData.replace = false
                messageData.type = "N/A"
                messageData.color = "N/A"
                messageData.job = "roof repair"
              } else if(messageData.replace == true) {
                messageData.repair = false
                messageData.job = "roof replacement"
              }
              
              await constactService.sendMessage(messageData)
              // TODO add a confirmation that their request was sent

            } catch (error) {
              console.error(error)
            }

          }
        }
      }
    }
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <!-- TODO adjust for mobile -->
      
      <div class="col-md-6 d-flex justify-content-center main-height jet-black af-bg-white">
        <div class="d-flex flex-column justify-content-center align-items-center my-3">
          <div class="text-center mt-4">
            <h3>Interested in a Quote?</h3>
            <h6 class="mb-3">We'll call you ASAP.</h6>
          </div>
          <form @submit.prevent="sendMessage()">
            <div class="mb-3 d-flex justify-content-between">
              <div>
                <label for="name" class="form-label">Name</label>
                <input v-model="editable.name" type="text" class="form-control w-75" id="name" placeholder="Your Name" required>
              </div>
              <div>
                <label for="phone" class="form-label">Phone Number</label>
              <input v-model="editable.phone" type="text" class="form-control w-75" id="phone" placeholder="555-555-5555" required>
              </div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
                <input v-model="editable.email" type="email" class="form-control" id="email" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Brief Description</label>
              <textarea v-model="editable.description" class="form-control" id="description" rows="2" maxlength="200" required></textarea>
            </div>
            <div class="d-flex justify-content-around mb-3">
              <div class="form-check">
                <input v-model="editable.repair" class="form-check-input" type="checkbox" value="repair" id="repair" :disabled="editable.replace == true">
                <label class="form-check-label" for="repair">
                  Repair
                </label>
              </div>
              <div class="form-check">
                <input v-model="editable.replace" class="form-check-input" type="checkbox" value="replace" id="replace" :disabled="editable.repair == true">
                <label class="form-check-label" for="replace">
                  Replace
                </label>
              </div>
            </div>
            <div v-if="editable.replace == true" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Type:
                </label>
              <select v-model="editable.type" class="form-select" aria-label="Default select example">
                <option value="Timberline HDZ" selected>Timberline HDZ</option>
                <option value="Timberline UHDZ">Timberline UHDZ</option>
                <option value="Timberline AS II">Timberline AS II</option>
                <option value="Timberline CS">Timberline CS</option>
                <option value="Timberline HDZ RS">Timberline HDZ RS</option>
                <option value="Timberline HDZ RS+">Timberline HDZ RS+</option>
                <option value="Timberline NS">Timberline NS</option>
                <option value="Designer - Grand Canyon">Designer - Grand Canyon</option>
                <option value="Designer - Camelot II">Designer - Camelot II</option>
                <option value="Designer - Slateline">Designer - Slateline</option>
                <option value="Designer - Grand Sequoia">Designer - Grand Sequoia</option>
                <option value="Designer - Woodland">Designer - Woodland</option>
                <option value="Designer - Grand Sequoia AS">Designer - Grand Sequoia AS</option>
                <option value="Designer - Grand Sequoia RS">Designer - Grand Sequoia RS</option>
                <option value="3-Tab - Marquis WeatherMax">3-Tab - Marquis WeatherMax</option>
                <option value="3-Tab - Royal Sovereign">3-Tab - Royal Sovereign</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Timberline HDZ'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Barkwood" selected>Barkwood</option>
                <option value="Birchwood">Birchwood</option>
                <option value="Biscayne Blue">Biscayne Blue</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Copper Canyon">Copper Canyon</option>
                <option value="Driftwood">Driftwood</option>
                <option value="Fox Hollow Gray">Fox Hollow Gray</option>
                <option value="Golden Amber">Golden Amber</option>
                <option value="Hickory">Hickory</option>
                <option value="Hunter Green">Hunter Green</option>
                <option value="Mission Brown">Mission Brown</option>
                <option value="Oyster Gray">Oyster Gray</option>
                <option value="Patriot Red">Patriot Red</option>
                <option value="Pewter Gray">Pewter Gray</option>
                <option value="Shakewood">Shakewood</option>
                <option value="Slate">Slate</option>
                <option value="Sunset Brick">Sunset Brick</option>
                <option value="Weathered Wood">Weathered Wood</option>
                <option value="White">White</option>
                <option value="Williamsburg Slate">Williamsburg Slate</option>
                <option value="Appalachian Sky">Appalachian Sky</option>
                <option value="Cedar Falls">Cedar Falls</option>
                <option value="Golden Harvest">Golden Harvest</option>
                <option value="Nantucket Morning">Nantucket Morning</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Timberline UHDZ'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Barkwood" selected>Barkwood</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Pewter Gray">Pewter Gray</option>
                <option value="Shakewood">Shakewood</option>
                <option value="Slate">Slate</option>
                <option value="Weathered Wood">Weathered Wood</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Timberline AS II'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Barkwood" selected>Barkwood</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Hickory">Hickory</option>
                <option value="Pewter Gray">Pewter Gray</option>
                <option value="Shakewood">Shakewood</option>
                <option value="Slate">Slate</option>
                <option value="Weathered Wood">Weathered Wood</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Timberline CS'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Antique Slate" selected>Antique Slate</option>
                <option value="Barkwood" selected>Barkwood</option>
                <option value="Weathered Wood">Weathered Wood</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Timberline HDZ RS'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Aged Chestnut" selected>Aged Chestnut</option>
                <option value="Birchwood">Birchwood</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Coastal Slate">Coastal Slate</option>
                <option value="Hickory">Hickory</option>
                <option value="Sagewood">Sagewood</option>
                <option value="Sandalwood">Sandalwood</option>
                <option value="Stone Gray">Stone Gray</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Timberline HDZ RS+'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Aged Chestnut Plus" selected>Aged Chestnut Plus</option>
                <option value="Charcoal Plus">Charcoal Plus</option>
                <option value="Hickory Plus">Hickory Plus</option>
                <option value="Sagewood Plus">Sagewood Plus</option>
                <option value="Stone Gray Plus">Stone Gray Plus</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Timberline NS'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Barkwood" selected>Barkwood</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Hickory">Hickory</option>
                <option value="Pewter Gray">Pewter Gray</option>
                <option value="Shakewood">Shakewood</option>
                <option value="Slate">Slate</option>
                <option value="Weathered Wood">Weathered Wood</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Designer - Grand Canyon'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Black Oak" selected>Black Oak</option>
                <option value="Mission Brown">Mission Brown</option>
                <option value="Stonewood">Stonewood</option>
                <option value="Stormcloud">Stormcloud</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Designer - Camelot II'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Antique Slate" selected>Antique Slate</option>
                <option value="Barkwood">Barkwood</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Royal Slate">Royal Slate</option>
                <option value="Weathered Timber">Weathered Timber</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Designer - Slateline'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Antique Slate" selected>Antique Slate</option>
                <option value="English Gray">English Gray</option>
                <option value="Royal Slate">Royal Slate</option>
                <option value="Weathered Slate">Weathered Slate</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Designer - Woodland'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Castlewood Gray" selected>Castlewood Gray</option>
                <option value="Cedarwood Abbey" selected>Cedarwood Abbey</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Designer - Grand Sequoia AS'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Adobe Sunset" selected>Adobe Sunset</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Dusky Gray">Dusky Gray</option>
                <option value="Weathered Wood">Weathered Wood</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == 'Designer - Grand Sequoia RS'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Charcoal" selected>Charcoal</option>
                <option value="Forest Brown">Forest Brown</option>
                <option value="Ocean Gray">Ocean Gray</option>
                <option value="Sagewood">Sagewood</option>
                <option value="Sandalwood">Sandalwood</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == '3-Tab - Marquis WeatherMax'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Autumn Brown" selected>Autumn Brown</option>
                <option value="Charcoal">Charcoal</option>
              </select>
            </div>
            <div v-if="editable.replace == true && editable.type == '3-Tab - Royal Sovereign'" class="mb-3">
              <label class="form-select-label mb-3" for="shingle-type">
                  Shingle Color:
                </label>
              <select v-model="editable.color" class="form-select" aria-label="Default select example">
                <option value="Ash Brown" selected>Ash Brown</option>
                <option value="Autumn Brown">Autumn Brown</option>
                <option value="Charcoal">Charcoal</option>
                <option value="Golden Cedar">Golden Cedar</option>
                <option value="Nickel Gray">Nickel Gray</option>
                <option value="Silver Lining">Silver Lining</option>
                <option value="Slate">Slate</option>
                <option value="Weathered Gray">Weathered Gray</option>
                <option value="White">White</option>
              </select>
            </div>
            <div class="text-end mb-3">
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center main-height jet-bg-black af-white">
        <div class="row align-items-center h-75 w-100">
          <div class="col-6 h-75 d-flex flex-column justify-content-evenly align-items-center">
            <div class="text-center">
              <span class="mdi mdi-store-clock-outline icon" title="Clock Icon"></span>
              <h3>Contact Hours</h3>  
              <h5>Mon-Fri</h5>
              <h5>8am-6pm</h5>  
            </div>
            <div class="text-center">
              <span class="mdi mdi-phone icon" title="Phone Icon"></span>
              <h3>Call Us</h3>  
              <h5>208-794-3280</h5> 
            </div>
          </div>
          <div class="col-6 h-75 d-flex flex-column justify-content-evenly align-items-center">
            <div class="text-center">
              <span class="mdi mdi-map-marker-radius icon" title="Map Marker Icon"></span>
              <h3>Based In</h3>  
              <h5>Kuna, ID</h5> 
            </div>
            <div class="text-center">
              <span class="mdi mdi-email icon" title="Email Icon"></span>
              <h3>Email Us</h3>  
              <h5>riverrockroofing<br>@icloud.com</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-md-none d-flex flex-column justify-content-center align-items-center mobile-height jet-bg-black af-white">
        <div class="row align-items-center h-75 w-100">
          <div class="col-6 h-75 d-flex flex-column justify-content-evenly align-items-center">
            <div class="text-center">
              <span class="mdi mdi-store-clock-outline icon" title="Clock Icon"></span>
              <h3>Contact Hours</h3>  
              <h5>Mon-Fri</h5>
              <h5>8am-6pm</h5>  
            </div>
            <div class="text-center">
              <span class="mdi mdi-phone icon" title="Phone Icon"></span>
              <h3>Call Us</h3>  
              <h5>208-794-3280</h5> 
            </div>
          </div>
          <div class="col-6 h-75 d-flex flex-column justify-content-evenly align-items-center">
            <div class="text-center">
              <span class="mdi mdi-map-marker-radius icon" title="Map Marker Icon"></span>
              <h3>Based In</h3>  
              <h5>Kuna, ID</h5> 
            </div>
            <div class="text-center">
              <span class="mdi mdi-email icon" title="Email Icon"></span>
              <h3>Email Us</h3>  
              <h5>riverrockroofing<br>@icloud.com</h5>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style>

.call-us {
  background-color: #57886ccb;
  color: white;
  box-shadow: 3px 3px 5px black;
  text-shadow: 1px 1px 2px black;
  height: 400px;
  width: 400px;
  border-radius: 20px;
}

.main-height {
  height: 100vh;
}

.mobile-height {
  height: 60vh;
}

.icon {
  font-size: 42px;
}
</style>