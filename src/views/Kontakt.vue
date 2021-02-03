<template>
  <div class="container">
    <div style="text-align:center">
      <h2>
        <a style=" border-bottom: 1px solid #daa520; padding-bottom: 5px;"
          >Kontaktirajte nas</a
        >
      </h2>
      <p>Bilo to o nekom upitu, ili žalbi:</p>
    </div>
    <div class="row">
      <div class="column">
        <hr class="my-4" style="color: #616D6D; border: 1px solid;" />
        <img
          src="../assets/kontaktPicture.jpg"
          style="width:100%; border-radius: 2%"
        />
        <hr class="my-4" style="color: #616D6D; border: 1px solid;" />
      </div>
      <div class="column">
        <form
          @submit.stop.prevent="submit"
          v-bind:class="{
            'is-valid': valid,
          }"
          v-on:blur="blured = true"
        >
          <label for="ime" class="pull-left">Ime</label>
          <input
            type="text"
            id="ime"
            name="ime"
            placeholder="Vaše ime.."
            v-model="ime"
            required
          />
          <label for="prezime" class="pull-left">Prezime</label>
          <input
            type="text"
            id="prezime"
            name="prezime"
            placeholder="Vaše prezime.."
            v-model="prezime"
            required
          />
          <label for="prezime" class="pull-left">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Vaša e-mail adresa.."
            v-model="email"
            required
          />
          <label for="poruka" class="pull-left">Vaša poruka</label>
          <textarea
            id="poruka"
            name="poruka"
            placeholder="Ovdje ide vaša poruka"
            style="height:170px; background-color: #ccc"
            v-model="poruka"
            required
          ></textarea>
          <hr style="color: #616D6D; border: 1px solid; width: 50%" />
          <button type="submit" class="btn btn-outline-warning">
            Pošaljite
          </button>
        </form>
        <div class="valid-feedback">
          <i class="fas fa-info-circle"></i> Uspješno poslano
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
export default {
  name: "Kontakt",
  data() {
    return {
      ime: "",
      prezime: "",
      poruka: "",
      email: "",
      valid: false,
      blured: false,
    };
  },

  methods: {
    validate: function() {
      this.blured = true;
      this.valid = true;
    },
    submit: function() {
      this.validate();
      if (this.valid) {
        this.porukaPoslana();
      }
    },

    porukaPoslana() {
      db.collection("porukeKorisnika")
        .add({
          ime: this.ime,
          prezime: this.prezime,
          poruka: this.poruka,
          email: this.email,
        })
        .then((doc) => {
          console.log("Vaša poruka je poslana", doc);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Style inputs */
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
label {
  color: #ccc;
  border-bottom: 1px solid #daa520;
}
h2 {
  color: #ccc;
}
p {
  color: #ccc;
}
input {
  background-color: #ccc;
}

input[type="submit"] {
  background-color: #daa520;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #ad7e06;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color: #212529;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
