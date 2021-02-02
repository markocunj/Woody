<template>
  <div>
    <div class="form-row justify-content-center">
      <div class="form-group">
        <label style="border-bottom: 1px solid #daa520"
          ><strong>Narudžba ({{ datum_narudzbe }})</strong></label
        >
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label style="border-bottom: 1px solid #ccc">Osobni podaci</label><br />
        <div class="small">
          <strong>E-mail:</strong> {{ profilNarudzba.email }} <br />
          <strong>Adresa dostave:</strong> {{ profilNarudzba.adresa }},
          {{ profilNarudzba.zupanija }}<br />
          <strong v-if="profilNarudzba.napomene">Napomene:</strong>
          {{ profilNarudzba.napomene }}
        </div>
      </div>
      <div class="form-group col-md-6">
        <label style="border-bottom: 1px solid #ccc">Podaci o narudžbi</label
        ><br />
        <div
          class="small"
          v-for="narudzba in profilNarudzba.narudzba"
          :key="narudzba.email"
        >
          <strong>Vrsta drva: </strong>{{ narudzba.naslov }} <br /><strong
            >Opis: </strong
          >{{ narudzba.podnaslov }}<br /><strong>Dužina: </strong
          >{{ narudzba.duzina }}cm <br /><strong>Količina: </strong
          >{{ narudzba.kolicina }}m <br />
          <hr style="color: #ccc; border: 1px solid; width:40%" />
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group pull-left">
        <strong>Cijena:</strong> {{ profilNarudzba.cijena_narudzbe }}kn
      </div>
    </div>
    <div class="form-row small">
      <div class="form-group" v-switch="profilNarudzba.status">
        <strong>Status: </strong>
        <a v-case="'proizvodnja'" style="color: orange"
          ><i class="fas fa-info-circle"></i> U proizvodnji.</a
        >
        <a v-case="'spremnoZaDostavu'" style="color: orange"
          ><i class="fas fa-truck"></i> Spremno za dostavu.</a
        >
        <a v-case="'dostavljeno'" style="color: #4BB543"
          ><i class="far fa-check-circle"></i> Dostavljeno.</a
        >
      </div>
    </div>

    <hr class="mb-4" style="border: 1px solid #ccc" />
  </div>
</template>

<script>
import moment from "moment";
moment.locale("hr");
export default {
  name: "ProfilNarudzba",
  data() {
    return {};
  },

  props: ["profilNarudzba"],

  mounted() {},
  computed: {
    datum_narudzbe() {
      return moment(this.profilNarudzba.datum_narudzbe).format("D. MMMM. YYYY");
    },
  },
};
</script>
