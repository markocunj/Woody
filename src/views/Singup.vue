<template> 
<div class="col-md-12">
  <div class="row">
    <div class="col-md-6 register-left">
      <img class="biglogo" alt="Vue logo" src="../assets/logo.png" />
    </div> 
     <div class="col-md-6 well">
    <div class="container jumbotrontop ">
      <h1 class="headline">Registracija</h1>
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
              <div class="regi">
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
  </div>
</template>
