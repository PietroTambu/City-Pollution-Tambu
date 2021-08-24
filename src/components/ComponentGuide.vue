<template>
  <div style="width: fit-content; margin: auto">
    <b-overlay :show="showMain" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: -moz-fit-content; margin: auto">
      <div class="div-main">
        <div class="header">
          <h1 class="PottaOne gray-2">Guide Page</h1>
          <h4 class="PottaOne gray-3">Welcome to City Pollution by Tambu</h4>
        </div>
        <hr>
        <h5 class="Fraunces gray-3">On this webapp you will be able to find out the AQI, "Air Quality Index", of most cities around the world.</h5>
        <hr>
        <div>
          <b-button @click="changeLanguage()" v-if="this.language === 'English'"><b class="font-weight-bold">English</b> <b-icon-arrow-left-right scale="0.9"></b-icon-arrow-left-right> Italiano</b-button>
          <b-button @click="changeLanguage()" v-if="this.language === 'Italiano'">English <b-icon-arrow-left-right scale="0.9"></b-icon-arrow-left-right> <b class="font-weight-bold">Italiano</b></b-button>
        </div>
        <hr>
        <b-overlay :show="showLanguage" rounded="sm" variant="secondary" opacity="0.85" blur="2px" style="width: -moz-fit-content; margin: auto">
          <!-- Italian page language -->
          <b-tabs pills card fill v-model="tabIndexGuide" class="background-opacity" v-if="this.language === 'Italiano'">
            <b-tab title="Nome città" :title-link-class="linkIndexGuide(0)" active>
              <b-card-text class="font-weight-bold">Nome della città</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria inserendo all'interno del singolo campo di input il <strong>nome della città</strong> o del <strong>comune</strong> in lingua originaria oppure in lingua inglese. <strong>(milano - milan)</strong>.
              </b-card-text>
              <b-card-text>
                Una volta compilato il campo di input sarà sufficiente <strong>premere il pulsate 'Search'</strong>. Automaticamente verranno riportati i <strong>dati</strong> relativi alla <strong>più vicina stazione</strong> di rilevamento AQI della posizione selezionata.
              </b-card-text>
              <b-card-text>
                <strong>In caso di errore</strong> di inserimento o mancata presenza della posizione geografica della città o comune <strong>comparirà un avviso in rosso</strong> che specificherà il tipo di problema riscontrato.
              </b-card-text>
              <b-button v-b-toggle.collapse-city-name-ita size="sm" variant="danger">Maggiori informazioni <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-city-name-ita" class="mt-2">
                <b-card>Attenzione, si potrebbero verificare problemi nella ricerca di <strong>città</strong> il quale <strong>nome non utilizza caratteri dell'alfabeto internazionale.</strong> Si consiglia, per questi casi, di utilizzare la ricerca attraverso le coordinate geografiche.</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('city')">Cerca AQI dal nome della città <b-icon-arrow-right-circle></b-icon-arrow-right-circle></b-button>
            </b-tab>
            <b-tab title="Geo-coordinate" :title-link-class="linkIndexGuide(1)">
              <b-card-text class="font-weight-bold">Geo-coordinate</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria inserendo all'interno dei campi di input la <strong>latitudine e longitudine decimali</strong> della città o del comune.
              </b-card-text>
              <b-card-text>
                Per la ricerca si possono utilizzare valori fino a 8 cifre significative <strong>potendo utilizzare sia il punto ' . ' che la virgola ' , '</strong> per la separazione dei numeri decimali.
              </b-card-text>
              <b-card-text>
                Una volta compilati i campi di input sarà sufficiente <strong>premere il pulsate 'Search'</strong>. Automaticamente verranno riportati i <strong>dati</strong> relativi alla <strong>più vicina stazione</strong> di rilevamento AQI della posizione selezionata.
              </b-card-text>
              <b-card-text>
                <strong>In caso di errore</strong> di inserimento dati o mancata presenza della posizione geografica della città o comune <strong>comparirà un avviso in rosso</strong> che specificherà il tipo di problema riscontrato.
              </b-card-text>
              <hr>
              <b-button @click="set_search_type_preference('coords')">Cerca AQI dalle geo-coordinate <b-icon-arrow-right-circle></b-icon-arrow-right-circle></b-button>
            </b-tab>
            <b-tab title="Posizione GPS" :title-link-class="linkIndexGuide(2)">
              <b-card-text class="font-weight-bold">GPS location</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria attraverso la <strong>posizione GPS</strong> del tuo dispositivo.
              </b-card-text>
              <b-card-text>
                Sarà sufficiente <strong>premere il pulsate 'Search'</strong>. Automaticamente verranno riportati i <strong>dati</strong> relativi alla <strong>più vicina stazione</strong> di rilevamento AQI dalla tua posizione corrente.
              </b-card-text>
              <b-card-text>
                Gli <strong>errori</strong> potrebbero essere di <strong>3 nature differenti</strong>:
                <br> <strong>1)</strong> Il <strong>GPS</strong> del tuo dispositivo è <strong>disabilitato</strong>, per le nuove versioni dei browser comparirà un messaggio con la <strong>richiesta di permesso di attivazione</strong>. Una volta confermata la richiesta; la ricerca procederà automaticamente.
                <br> <strong>2)</strong> L'<strong>accesso</strong> alla posizione GPS è stato <strong>negato</strong>, in tal caso comparirà un <strong>pop-up di errore</strong> con la richiesta di fornire il permesso alla web-app. <strong>La richiesta dovrà essere soddisfatta dall'utente</strong>, non è possibile automatizzare il processo.
                <br> <strong>3)</strong> Il dispositivo <strong>non ha un GPS</strong>. In tal caso <strong>non è possibile utilizzare questa modalità</strong> di ricerca. Si consiglia di utilizzarne una differente.
              </b-card-text>
              <b-button v-b-toggle.collapse-gps-ita size="sm" variant="danger">Maggiori informazioni <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-gps-ita" class="mt-2">
                <b-card>Se è la prima volta che si naviga a questo indirizzo, il <strong>permesso</strong> all'utilizzo del GPS è <strong>impostato a 'chiedi prima'</strong>. In tal caso al primo tentativo di ricerca tramite GPS <strong>comparirà la richiesta</strong> se negare o consentire alla web-app di utilizzare la posizione del dispositivo. Se si vuole utilizzare questa modalità di ricerca è necessario <strong>premere su Consenti</strong>.</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('gps')">Cerca AQI dalla posizione GPS <b-icon-arrow-right-circle></b-icon-arrow-right-circle></b-button>
            </b-tab>
            <b-tab title="Indirizzo IP" :title-link-class="linkIndexGuide(3)">
              <b-card-text class="font-weight-bold">IP location</b-card-text>
              <hr>
              <b-card-text>
                Questa modalità di ricerca permette di ricavare l'indice di qualità dell'aria attraverso <strong>l'indirizzo IP</strong> del tuo dispositivo.
              </b-card-text>
              <b-card-text>
                Sarà sufficiente <strong>premere il pulsate 'Search'</strong>. Automaticamente verranno riportati i <strong>dati</strong> relativi alla <strong>più vicina stazione</strong> di rilevamento AQI dalla tua posizione IP corrente.
              </b-card-text>
              <b-card-text>
                Non si dovrebbero verificare errori si alcun genere.
              </b-card-text>
              <b-button v-b-toggle.collapse-ip-ita size="sm" variant="danger">Maggiori informazioni <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-ip-ita" class="mt-2">
                <b-card>In questa modalità <strong>non verranno ricevuti</strong> i dati della <strong>stazione AQI più vicina</strong> all'utente ma i dati della <strong>stazione più vicina all'indirizzo IP</strong> del proprio dispositivo. l'utilizzo dei <strong>dati mobili</strong> o di un <strong>servizio VPN</strong> potrebbe notevolmente influire sulla <strong>precisione della ricerca</strong>. Si consiglia di utilizzare, per una maggiore precisione, la modalità GPS</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('ip')">Cerca AQI da Indirizzo IP <b-icon-arrow-right-circle></b-icon-arrow-right-circle></b-button>
            </b-tab>
            <b-tab title="Air Quality legend" :title-link-class="linkIndexGuide(4)">
              <b-card-text class="font-weight-bold">AQI legend</b-card-text>
              <hr>
              <b-card-text>
                Sono presenti 6 diversi livelli di inquinamento del particolato atmosferico:
              </b-card-text>
              <table class="b-table" style="margin: auto">
                <b-table small :fields="fields" :items="items" responsive="sm" :bordered="bordered" :dark="dark">
                  <template  #cell(value)="data">
                    <b class="text-light" ><a :href="data.value.url" target="_blank">{{ data.value }}</a></b>
                  </template>
                  <template #cell(condition)="data">
                    <b class="text-light">{{ data.value.nameIta }}</b>
                  </template>
                </b-table>
              </table>
              <b-card-text>
                I dati che City Pollution Tambu potrà fornirvi riguardo alla qualità dell'aria comprendono l'indice AQI e una breve descrizione della pericolo che comprende lo stato di inquinamento della specifica aerea.
              </b-card-text>
              <b-card-text>
                Un indice AQI superiore ai 500 potrebbe essere un dato non affidabile a causa di un malfunzionamento del sensore.
              </b-card-text>
              <hr>
              <b-button @click="set_search_type_preference('city')">Cerca AQI <b-icon-arrow-right-circle></b-icon-arrow-right-circle></b-button>
            </b-tab>
          </b-tabs>
          <!-- English page language -->
          <b-tabs pills card fill v-model="tabIndexGuide" class="background-opacity" v-else-if="this.language === 'English'">
            <b-tab title="City Name" :title-link-class="linkIndexGuide(0)" active>
              <b-card-text class="font-weight-bold">City name</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index by entering the <strong>name of the city</strong> or <strong>municipality</strong> in the original language or in English in the single input field. <strong>(milano - milan)</strong>.
              </b-card-text>
              <b-card-text>
                Once the input field has been filled in, simply <strong>press the 'Search' button</strong>. The <strong>data</strong> relating to the <strong>nearest AQI survey station</strong> of the selected position will be automatically reported.
              </b-card-text>
              <b-card-text>
                <strong>In case of insertion error</strong> or lack of geographical position of the city or municipality, <strong>an advise will appear in red</strong> that will specify the type of problem encountered.
              </b-card-text>
              <b-button v-b-toggle.collapse-city-name-eng size="sm" variant="danger">More information <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-city-name-eng" class="mt-2">
                <b-card>Attention, there may be problems in searching for <strong>cities whose name does not use characters of the international alphabet</strong>. It is advisable, for these cases, to use the search through geographic coordinates.</b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('city')">Search AQI by City Name</b-button>
            </b-tab>
            <b-tab title="Geo-coordinates" :title-link-class="linkIndexGuide(1)">
              <b-card-text class="font-weight-bold">Geo-coordinates</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index by entering the <strong>decimal latitude and longitude</strong> of the city or municipality in the input fields.
              </b-card-text>
              <b-card-text>
                Values of up to 8 significant digits can be used for the search, being <strong>able to use both the dot ' . ' than the comma ' , ' </strong>for the separation of decimal numbers.
              </b-card-text>
              <b-card-text>
                Once the input fields have been filled in, simply <strong>press the 'Search' button</strong>. The <strong>data</strong> relating to the <strong>nearest AQI survey station</strong> of the selected position will be automatically reported.
              </b-card-text>
              <b-card-text>
                <strong>In case of insertion error</strong> or lack of geographical position of the city or municipality, <strong>an error will appear in red</strong> that will specify the type of problem encountered.
              </b-card-text>
              <hr>
              <b-button @click="set_search_type_preference('coords')">Search AQI by Geo-coordinates</b-button>
            </b-tab>
            <b-tab title="GPS position" :title-link-class="linkIndexGuide(2)">
              <b-card-text class="font-weight-bold">GPS location</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index through the <strong>GPS position</strong> of your device.
              </b-card-text>
              <b-card-text>
                Just <strong>press the 'Search' button</strong>. The data relating to the <strong>nearest AQI survey station</strong> from your current position will be automatically reported.
              </b-card-text>
              <b-card-text>
                The <strong>errors</strong> could be of <strong>3 types</strong>:
                <br> 1) The <strong>GPS</strong> of your device is <strong>disabled</strong>, for new browser versions a message will appear <strong>asking for the activation permission</strong>. Once the request is confirmed; the search will proceed automatically.
                <br> 2) <strong>Access</strong> to the GPS position <strong>has been denied</strong>, in this case an <strong>error pop-up will appear</strong> with the request to provide permission to the web-app. <strong>The request must be fulfilled by the user</strong>, it is not possible to automate the process.
                <br> 3) The device <strong>does not have a GPS</strong>. In this case, <strong>this search mode cannot be used</strong>. It is recommended to use a different one.
              </b-card-text>
              <b-button v-b-toggle.collapse-gps-eng size="sm" variant="danger">More information <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-gps-eng" class="mt-2">
                <b-card>
                  If this is your first time navigating to this internet address, <strong>the permission</strong> to use the GPS <strong>is set to 'ask first'</strong>. In this case, at the first attempt to search through the GPS, the request <strong>will appear whether to deny or allow the web-app to use the device's position</strong>. If you want to use this search mode, you need to <strong>click on Allow</strong>.
                </b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('gps')">Search AQI by GPS position</b-button>
            </b-tab>
            <b-tab title="IP position" :title-link-class="linkIndexGuide(3)">
              <b-card-text class="font-weight-bold">IP location</b-card-text>
              <hr>
              <b-card-text>
                This search mode allows you to obtain the air quality index through the <strong>IP address</strong> of your device.
              </b-card-text>
              <b-card-text>
                Just <strong>press the 'Search' button</strong>. The data relating to the <strong>nearest AQI survey station</strong> from your current IP position will be automatically reported.
              </b-card-text>
              <b-card-text>
                There should be no errors of any kind.
              </b-card-text>
              <b-button v-b-toggle.collapse-ip-eng size="sm" variant="danger">More information <b-icon-exclamation-triangle scale="1.1"></b-icon-exclamation-triangle></b-button>
              <b-collapse id="collapse-ip-eng" class="mt-2">
                <b-card>
                  In this mode, the data of the <strong>AQI station closest to the IP address</strong> of your device will be received. using <strong>mobile data</strong> or a <strong>VPN service</strong> could significantly affect search accuracy. It is recommended to <strong>use the GPS mode for better accuracy</strong>.
                </b-card>
              </b-collapse>
              <hr>
              <b-button @click="set_search_type_preference('ip')">Search AQI by IP position</b-button>
            </b-tab>
            <b-tab title="Air Quality legend" :title-link-class="linkIndexGuide(4)">
              <b-card-text class="font-weight-bold">AQI legend</b-card-text>
              <hr>
              <b-card-text>
                There are 6 different levels of particulate matter pollution:
              </b-card-text>
              <table class="b-table" style="margin: auto">
                <b-table small :fields="fields" :items="items" responsive="sm" :bordered="bordered" :dark="dark">
                  <template  #cell(value)="data">
                    <b class="text-light" ><a :href="data.value.url" target="_blank">{{ data.value }}</a></b>
                  </template>
                  <template #cell(condition)="data">
                    <b class="text-light">{{ data.value.nameEng }}</b>
                  </template>
                </b-table>
              </table>
              <b-card-text>
                The data that City Pollution Tambu will be able to provide relate to the quality of the AQI index and a brief description of the hazard which includes the pollution status of the specific area.
              </b-card-text>
              <b-card-text>
                An AQI index above 500 could be unreliable due to a sensor malfunction.
              </b-card-text>
              <hr>
              <b-button @click="set_search_type_preference('city')">Search AQI <b-icon-arrow-right-circle></b-icon-arrow-right-circle></b-button>
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
      fields: [
        { key: 'value', tdClass: 'align-middle' },
        { key: 'condition', tdClass: 'align-middle' }
      ],
      items: [
        { value: '0 - 50', condition: { nameEng: 'Good', nameIta: 'Buono' }, _rowVariant: 'AQI_Good' },
        { value: '51 - 100', condition: { nameEng: 'Moderate', nameIta: 'Moderato' }, _rowVariant: 'AQI_Moderate' },
        { value: '101 - 150', condition: { nameEng: 'Unhealthy for sensitive Groups', nameIta: 'Insalubre per gruppi sensibili' }, _rowVariant: 'AQI_Unhealthy_Sensitive' },
        { value: '151 - 200', condition: { nameEng: 'Unhealthy', nameIta: 'Insalubre' }, _rowVariant: 'AQI_Unhealthy' },
        { value: '201 - 300', condition: { nameEng: 'Very Unhealthy', nameIta: 'Molto insalubre' }, _rowVariant: 'AQI_Very_Unhealthy' },
        { value: '301 - 500', condition: { nameEng: 'Hazardous', nameIta: 'Pericoloso' }, _rowVariant: 'AQI_Hazardous' }
      ],
      dark: true,
      bordered: true,
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
