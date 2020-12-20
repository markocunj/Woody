<template>
  <div class="row">
    <div class="col-md-3 register-left">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="container">
      <h1 class="headline">Registracija</h1>
      <div class="col-lg-12 well">
        <div class="row">
          <form>
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-6">
                  <label id="email">Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter Email Address Here.."
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label id="ime">Ime</label>
                  <input
                    type="text"
                    placeholder="pr.Ivan"
                    class="form-control"
                  />
                </div>
                <div class="col-sm-6">
                  <label id="prezime">Prezime</label>
                  <input
                    type="text"
                    placeholder="pr.Horvat"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label id="pass">Password</label>
                  <input
                    type="text"
                    placeholder="Password"
                    class="form-control"
                  />
                </div>
                <div class="col-sm-6">
                  <label id="repeat">Repeat Password</label>
                  <input
                    type="text"
                    placeholder="Password"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <label id="year">Godina</label>
                  <input
                    type="text"
                    id="godina"
                    placeholder="pr.1994"
                    class="form-control"
                  />
                </div>
                <div class="col-sm-3">
                  <label id="day">Dan</label>
                  <input
                    type="text"
                    id="mh"
                    placeholder="pr.12"
                    class="form-control"
                  />
                </div>
                <div class="col-sm-3">
                  <label id="month">Mjesec</label>
                  <input
                    type="text"
                    id="dan"
                    placeholder="pr.Siječanj"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore dicta soluta quis iure asperiores consequatur, eum
                    aliquid! Neque voluptatem,
                  </p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  <label>Šaljite mi mailove</label>
                </div>
              </div>
              <div>
                <button type="button" class="btn btn-lg btn-info">
                  Registracija
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  height: 640px;
  width: 600px;
  margin-right:100px;
  padding:50px;
  margin-top:100px;
  background-color: rgba(150, 228, 106, 0.712);
  border-radius: 30px;
  font-size: 17px;
  font-weight: bold;
}
html ,#app{ height: 100%;
            background: linear-gradient(rgba(187, 223, 120, 0.5),rgba(187, 223, 120, 0.5)),url('~@/assets/suma.jpg');
            background-size: cover;
            width: 100%;
            }
#nav{background-color: rgba(5, 51, 9, 0.9);border-radius: 0px 0px 1600px 500px;font-weight: bold;color:white;font-size: 20px;}
.headline{text-align: left;}

  .row .col-sm-3  label  {
  color:black;
  float: left;
  }
 .row .col-sm-6 label  {
  float:left;
  color: black;
}

.col-sm-12  p {
  color:black;
  text-align: left;
  font-size: 0.9em;
  padding-top: 15px;
}
.col-sm-12  label,span,input {
  float: left;
  color: black;
}
.col-sm-12  div button {
  margin-top: 15px;
  color: black;
  background-color: grey !important;
  padding: 15px;
  float: left;
  display: inline-block;
  border: none !important;
  border-radius: 40%  !important;
  font-size: 1em !important;
}
div  button:hover {
  background-color:black;
  color: white;
  transition: 0.2;
}
.register-left  img {
  width: 300px;
  margin-left:150%;
  margin-top: 250px;
}
</style>
