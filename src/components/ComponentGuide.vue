<template>
  <div style="width: fit-content; margin: auto">
    <b-overlay :show="showMain" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: -moz-fit-content; margin: auto">
      <div class="div-main">
        <div class="header">
          <h1 class="PottaOne gray-2">Guide Page</h1>
          <h4 class="PottaOne gray-3">Welcome to City Pollution by Tambu</h4>
        </div>
        <hr>
        <h5 class="Fraunces gray-3">On this website you will be able to find out the AQI, "Air Quality Index", of most cities around the world.</h5>
        <hr>
        <div>
          <b-button @click="changeLanguage()" v-if="this.language === 'English'"><b class="font-weight-bold">English</b> <b-icon-arrow-left-right scale="0.9"></b-icon-arrow-left-right> Italiano</b-button>
          <b-button @click="changeLanguage()" v-if="this.language === 'Italiano'">English <b-icon-arrow-left-right scale="0.9"></b-icon-arrow-left-right> <b class="font-weight-bold">Italiano</b></b-button>
        </div>
        <hr>
        <b-overlay :show="showLanguage" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: -moz-fit-content; margin: auto">
          <b-tabs pills card fill v-model="tabIndexGuide" class="background-opacity" v-if="this.language === 'Italiano'">
            <b-tab title="Nome città" :title-link-class="linkIndexGuide(0)" active>
              <b-card-text class="font-weight-bold">Nome della città</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria inserendo all'interno del singolo campo di input il nome della città o del comune in lingua originaria oppure in lingua inglese. ( milano - milan ).
              </b-card-text>
              <b-card-text>
                Una volta compilato il campo di input sarà sufficiente premere il pulsate 'Search'. Automaticamente verranno riportati i dati relativi alla più vicina stazione di rilevamento AQI della posizione selezionata.
              </b-card-text>
              <b-card-text>
                In caso di errore di inserimento o mancata presenza della posizione geografica della città o comune comparirà un errore in rosso che specificherà il tipo di problema riscontrato.
              </b-card-text>
              <b-button v-b-toggle.collapse-1-inner size="sm" variant="danger">Maggiori informazioni <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Attenzione, si potrebbero verificare problemi nella ricerca di città il quale nome non utilizza caratteri dell'alfabeto internazionale. Si consiglia, per questi casi, di utilizzare la ricerca attraverso le coordinate geografiche.</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('city')">Nome città</b-button>
            </b-tab>
            <b-tab title="Geo-coordinate" :title-link-class="linkIndexGuide(1)">
              <b-card-text class="font-weight-bold">Geo-coordinate</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria inserendo all'interno dei campi di input la latitudine e longitudine decimali della città o del comune.
              </b-card-text>
              <b-card-text>
                Per la ricerca si possono utilizzare valori fino a 6 cifre significative potendo utilizzare sia il punto ' . ' che la virgola ' , ' per la separazione dei numeri decimali.
              </b-card-text>
              <b-card-text>
                Una volta compilati i campi di input sarà sufficiente premere il pulsate 'Search'. Automaticamente verranno riportati i dati relativi alla più vicina stazione di rilevamento AQI della posizione selezionata.
              </b-card-text>
              <b-card-text>
                In caso di errore di inserimento o mancata presenza della posizione geografica della città o comune comparirà un errore in rosso che specificherà il tipo di problema riscontrato.
              </b-card-text>
              <hr>
              <b-button @click="set_search_type_preference('coords')">Geo-coordinate</b-button>
            </b-tab>
            <b-tab title="Posizione GPS" :title-link-class="linkIndexGuide(2)">
              <b-card-text class="font-weight-bold">GPS location</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria attraverso la posizione GPS del tuo dispositivo.
              </b-card-text>
              <b-card-text>
                Sarà sufficiente premere il pulsate 'Search'. Automaticamente verranno riportati i dati relativi alla più vicina stazione di rilevamento AQI dalla tua posizione corrente.
              </b-card-text>
              <b-card-text>
                Gli errori potrebbero essere di 3 nature differenti:
                <br> 1) Il GPS del tuo dispositivo è disabilitato, per le nuove versioni dei browser comparirà un messaggio con la richiesta di permesso di attivazione. Una volta confermata la richiesta; la ricerca procederà automaticamente.
                <br> 2) L'accesso alla posizione GPS è stato negato, in tal caso comparirà un pop-up di errore con la richiesta di fornire il permesso alla web-app. La richiesta dovrà essere soddisfatta dall'utente, non è possibile automatizzare il processo.
                <br> 3) Il dispositivo non ha un GPS. In tal caso non è possibile utilizzare questa modalità di ricerca. Si consiglia di utilizzarne una differente.
              </b-card-text>
              <b-button v-b-toggle.collapse-1-inner size="sm" variant="danger">Maggiori informazioni <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Se è la prima volta che si naviga a questo indirizzo, il permesso all'utilizzo del GPS è impostato a 'chiedi prima'. In tal caso al primo tentativo di ricerca attraverso il GPS comparirà la richiesta se negare o consentire alla web-app di utilizzare la posizione del dispositivo. Se si vuole utilizzare questa modalità di ricerca è necessario premere su Consenti.</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('gps')">Posizione GPS</b-button>
            </b-tab>
            <b-tab title="Indirizzo IP" :title-link-class="linkIndexGuide(3)">
              <b-card-text class="font-weight-bold">IP location</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria attraverso l'indirizzo IP del tuo dispositivo.
              </b-card-text>
              <b-card-text>
                Sarà sufficiente premere il pulsate 'Search'. Automaticamente verranno riportati i dati relativi alla più vicina stazione di rilevamento AQI dalla tua posizione IP corrente.
              </b-card-text>
              <b-card-text>
                Non si dovrebbero verificare errori si alcun genere.
              </b-card-text>
              <b-button v-b-toggle.collapse-1-inner size="sm" variant="danger">Maggiori informazioni <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>In questa modalità non verranno ricevuti i dati della stazione AQI più vicina all'utente ma i dati della stazione più vicina all'indirizzo IP del proprio device. l'utilizzo dei dati mobili o di un servizio VPN potrebbe notevolmente influire sulla precisione della ricerca. Si consiglia di utilizzare, per una maggiore precisione, la modalità GPS</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('ip')">Indirizzo IP</b-button>
            </b-tab>
          </b-tabs>
          <b-tabs pills card fill v-model="tabIndexGuide" class="background-opacity" v-else-if="this.language === 'English'">
            <b-tab title="City Name" :title-link-class="linkIndexGuide(0)" active>
              <b-card-text class="font-weight-bold">City name</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index by entering the name of the city or municipality in the original language or in English in the single input field. ( milano - milan ).
              </b-card-text>
              <b-card-text>
                Once the input field has been filled in, simply press the 'Search' button. The data relating to the nearest AQI survey station of the selected position will be automatically reported.
              </b-card-text>
              <b-card-text>
                In case of insertion error or lack of geographical position of the city or municipality, an error will appear in red that will specify the type of problem encountered.
              </b-card-text>
              <b-button v-b-toggle.collapse-1-inner size="sm" variant="danger">More information <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Attention, there may be problems in searching for cities whose name does not use characters of the international alphabet. It is advisable, for these cases, to use the search through geographic coordinates.</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('city')">City Name</b-button>
            </b-tab>
            <b-tab title="Geo-coordinates" :title-link-class="linkIndexGuide(1)">
              <b-card-text class="font-weight-bold">Geo-coordinates</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index by entering the decimal latitude and longitude of the city or municipality in the input fields.
              </b-card-text>
              <b-card-text>
                Values of up to 6 significant digits can be used for the search, being able to use both the dot ' . ' than the comma ' , ' for the separation of decimal numbers.
              </b-card-text>
              <b-card-text>
                Once the input fields have been filled in, simply press the 'Search' button. The data relating to the nearest AQI survey station of the selected position will be automatically reported.
              </b-card-text>
              <b-card-text>
                In case of insertion error or lack of geographical position of the city or municipality, an error will appear in red that will specify the type of problem encountered.
              </b-card-text>
              <hr>
              <b-button @click="set_search_type_preference('coords')">Geo-coordinates</b-button>
            </b-tab>
            <b-tab title="GPS position" :title-link-class="linkIndexGuide(2)">
              <b-card-text class="font-weight-bold">GPS location</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index through the GPS position of your device.
              </b-card-text>
              <b-card-text>
                Just press the 'Search' button. The data relating to the nearest AQI survey station from your current position will be automatically reported.
              </b-card-text>
              <b-card-text>
                The errors could be of 3 types:
                <br> 1) The GPS of your device is disabled, for new browser versions a message will appear asking for the activation permission. Once the request is confirmed; the search will proceed automatically.
                <br> 2) Access to the GPS position has been denied, in this case an error pop-up will appear with the request to provide permission to the web-app. The request must be fulfilled by the user, it is not possible to automate the process.
                <br> 3) The device does not have a GPS. In this case, this search mode cannot be used. It is recommended to use a different one.
              </b-card-text>
              <b-button v-b-toggle.collapse-1-inner size="sm" variant="danger">More information <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>
                  If this is your first time navigating to this internet address, the permission to use the GPS is set to 'ask first'. In this case, at the first attempt to search through the GPS, the request will appear whether to deny or allow the web-app to use the device's position. If you want to use this search mode, you need to click on Allow.
                </b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('gps')">GPS position</b-button>
            </b-tab>
            <b-tab title="IP position" :title-link-class="linkIndexGuide(3)">
              <b-card-text class="font-weight-bold">IP location</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index through the IP address of your device.
              </b-card-text>
              <b-card-text>
                Just press the 'Search' button. The data relating to the nearest AQI survey station from your current IP position will be automatically reported.
              </b-card-text>
              <b-card-text>
                There should be no errors of any kind.
              </b-card-text>
              <b-button v-b-toggle.collapse-1-inner size="sm" variant="danger">More information <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>
                  In this mode, the data of the AQI station closest to the IP address of your device will be received. using mobile data or a VPN service could significantly affect search accuracy. It is recommended to use the GPS mode for better accuracy.
                </b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('ip')">IP position</b-button>
            </b-tab>
          </b-tabs>
        </b-overlay>
      </div>
    </b-overlay>
  </div>
</template>

<script>
// import $ from 'jquery'
import router from '@/router'

export default {
  name: 'ComponentGuide',
  data () {
    return {
      showMain: true,
      showLanguage: false,
      tabIndexGuide: 0,
      checked: false,
      language: 'English'
    }
  },
  methods: {
    set_search_type_preference (parameter) {
      if (parameter === 'city') {
        this.$store.commit('change_search_type_preference_city')
      } else if (parameter === 'coords') {
        this.$store.commit('change_search_type_preference_coords')
      } else if (parameter === 'gps') {
        this.$store.commit('change_search_type_preference_gps')
      } else if (parameter === 'ip') {
        this.$store.commit('change_search_type_preference_ip')
      }
      router.push('/')
    },
    linkIndexGuide (idx) {
      if (this.tabIndexGuide === idx) {
        return ['bg-gray', 'text-light', 'font-weight-bold', 'border', 'border-secondary']
      } else {
        return ['bg-light', 'text-dark', 'border', 'border-secondary']
      }
    },
    changeLanguage () {
      this.showLanguage = true
      if (this.language === 'English') {
        this.language = 'Italiano'
      } else {
        this.language = 'English'
      }
      setTimeout(() => {
        this.showLanguage = false
      }, 300)
    }
  },
  mounted () {
    setTimeout(
      () => {
        this.showMain = !this.showMain
      }, 600)
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/custom.scss';

.PottaOne {
  font-family: PottaOne;
}
.Fraunces {
  font-family: Fraunces;
}
.gray-2 {
  color: #484848;
}
.gray-3 {
  color: #7c7c7c;
}
.header {
  margin: 2vw auto;
}
.background-opacity {
  background-color: rgba(243, 243, 243, 0.65);
}
.div-main {
  max-width: 700px;
  margin: 30px auto;
  padding-left: 1vw;
  padding-right: 2vw;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  background-color: rgba(243, 243, 243, 0.85);
}
@media screen and (max-width: 500px) {
  button, input {
    font-size: 4vw;
  }
  .aqi {
    font-size: 3vw;
  }
  .title-search {
    font-size: 4vw;
  }
}
</style>
