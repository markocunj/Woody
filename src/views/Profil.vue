<template>
  <div
    class="container"
    style="background-color: white; margin-top: 20px; margin-bottom: 50px; padding: 50px;"
  >
    <div
      class="card"
      style="padding: 30px; border-color: #daa520; border-radius: 30px;"
    >
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 class="h3 mb-4 page-title">Profil</h2>
          <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >O vama</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="info-tab"
                  data-toggle="tab"
                  href="#info"
                  role="tab"
                  aria-controls="info"
                  aria-selected="true"
                  >Povijest narudžbi</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="promjenaLozinke-tab"
                  data-toggle="tab"
                  href="#promjenaLozinke"
                  role="tab"
                  aria-controls="promjenaLozinke"
                  aria-selected="false"
                  >Promjena lozinke</a
                >
              </li>
            </ul>
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Ime i prezime</label
                    >
                    <div class="form-control">Marko Cunj</div>
                  </div>
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Email</label
                    >
                    <div class="form-control">marko.cunj@gmail.com</div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Adresa</label
                    >
                    <div class="form-control">Ščapovec 1</div>
                  </div>
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Županija</label
                    >
                    <div class="form-control">Istarska</div>
                  </div>
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Država</label
                    >
                    <div class="form-control">Hrvatska</div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520">Zip</label>
                    <div class="form-control">52211</div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <button
                      type="button"
                      class="btn btn-block"
                      style="border: 1px solid #daa520; "
                      @click="odjava()"
                    >
                      Odjava
                    </button>
                  </div>
                </div>
                <hr class="my-4" style="border-color:black" />
              </div>
              <div
                class="tab-pane fade"
                id="info"
                role="tabpanel"
                aria-labelledby="info-tab"
              >
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Email</label
                    >
                    <div class="form-control">marko.cunj@gmail.com</div>
                  </div>
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Adresa</label
                    >
                    <div class="form-control">Ščapovec 1</div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="promjenaLozinke"
                role="tabpanel"
                aria-labelledby="promjenaLozinke-tab"
              >
                <div class="row mb-4">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="inputPassword5">New Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword5"
                        v-model="newPassword"
                        style="border: 1px solid gray;"
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputPassword6">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword6"
                        v-model="confirmPassword"
                        style="border: 1px solid gray;"
                      />
                    </div>
                  </div>
                  <div
                    class="col-md-6"
                    style="border: 1px solid gray; padding: 10px; border-radius: 10px"
                  >
                    <p class="mb-2">Password requirements</p>
                    <p class="small text-muted mb-2">
                      To create a new password, you have to meet all of the
                      following requirements:
                    </p>
                    <ul class="small text-muted pl-4 mb-0">
                      <li>Minimum 8 character</li>
                      <li>At least one special character</li>
                      <li>At least one number</li>
                      <li>Can’t be the same as a previous password</li>
                    </ul>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click="promjenaLozinke()"
                >
                  Save Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";
import router from "@/router";
import store from "@/store.js";
export default {
  name: "Profil",
  data() {
    return {
      store,
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    odjava() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    },
    promjenaLozinke() {
      var user = firebase.auth().currentUser;
      if (this.newPassword == this.confirmPassword) {
        user
          .updatePassword(this.newPassword)
          .then(() => {
            alert("Usspješna promjena.");
            this.newPassword = "";
            this.confirmPassword = "";
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
      } else {
        alert("Lozinke moraju biti jednake");
        this.newPassword = "";
        this.confirmPassword = "";
      }
    },
  },
};
</script>
<style scoped>
body {
  color: #8e9194;
  background-color: #f4f6f9;
}
img {
  vertical-align: middle;
  border-style: none;
}
.text-muted {
  color: #aeb0b4 !important;
}
.text-muted {
  font-weight: 300;
}
.btn:hover {
  background-color: #4d5154;
  color: white;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4d5154;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #85797900;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
