<template>
  <div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label style="border-bottom: 1px solid #ccc">Podaci o narudžbi</label>
        <div class="form-group">
          <strong>Status: </strong>
          <a
            v-if="narudzbaStatusUpdate.status == 'proizvodnja'"
            style="color: orange"
            ><i class="fas fa-info-circle"></i> U proizvodnji.</a
          >
          <a
            v-if="narudzbaStatusUpdate.status == 'spremnoZaDostavu'"
            style="color: orange"
            ><i class="fas fa-truck"></i> Spremno za dostavu.</a
          >
          <a
            v-if="narudzbaStatusUpdate.status == 'dostavljeno'"
            style="color: #4BB543"
            ><i class="far fa-check-circle"></i> Dostavljeno.</a
          >
        </div>
      </div>
      <div class="form-group col-md-6">
        <label style="border-bottom: 1px solid #ccc">E-mail</label>
        <div class="form-group">
          {{ narudzbaStatusUpdate.email }}
        </div>
      </div>
      <div class="form-group col-md-6">
        <label style="border-bottom: 1px solid #ccc">Adresa</label>
        <div class="form-group">
          {{ narudzbaStatusUpdate.adresa }}, {{ narudzbaStatusUpdate.zupanija }}
        </div>
      </div>
      <div class="form-group col-md-6">
        <label style="border-bottom: 1px solid #ccc">Detalji narudzbe</label>
        <div
          class="small"
          v-for="narudzba in narudzbaStatusUpdate.narudzba"
          :key="narudzba.glavniID"
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
    <strong>Promjena statusa: </strong>
    <select
      class="form-select"
      style="margin-bottom: 15px;"
      required
      v-model="status"
    >
      <option value="">- Odaberite status -</option>
      <option value="proizvodnja">U proizvodnji</option>
      <option value="spremnoZaDostavu">Spremno za dostavu</option>
      <option value="dostavljeno">Dostavljeno</option>
    </select>
    <br />
    <form @submit.stop.prevent="submit">
      <button
        type="submit"
        class="btn btn-outline-secondary"
        style=""
        v-bind:class="{
          'is-invalid': !statusUpdated && blured,
          'is-valid': statusUpdated && valid,
        }"
        v-on:blur="blured = true"
      >
        Promijeni
      </button>
      <div class="valid-feedback">
        <i class="fas fa-info-circle"></i> Uspješno promijenjeno
      </div>
      <div class="invalid-feedback">
        <i class="fas fa-info-circle"></i> Morate odabrati jednu opciju.
      </div>
    </form>
    <hr style="border-bottom: 1px solid #ccc" />
  </div>
</template>

<script>
import { db } from "@/firebase";
import router from "@/router";
export default {
  name: "NarudzbaStatusUpdate.vue",
  data() {
    return {
      status: "",
      statusUpdated: false,
      valid: false,
      neuspjeh: false,
      blured: false,
    };
  },
  props: ["narudzbaStatusUpdate"],

  methods: {
    validate: function() {
      this.blured = true;
      if (this.validStatus(this.status)) {
        this.statusUpdated = true;
        this.valid = true;
      }
    },

    validStatus: function(status) {
      return status != "";
    },

    submit: function() {
      this.validate();
      if (this.valid) {
        this.updateStatusaNarudzbe();
      }
    },
    updateStatus(doc) {
      let status = this.status;
      db.collection("narudzbe")
        .doc(doc.id)
        .update({ status: status })
        .then(function() {
          console.log("Uspjeh");
        })
        .catch((e) => {
          console.error(e);
        });
    },
    updateStatusaNarudzbe() {
      let id_narudzbe = this.narudzbaStatusUpdate.id_narudzbe;

      db.collection("narudzbe")
        .where("id_narudzbe", "==", id_narudzbe)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.updateStatus(doc);
          });
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>
