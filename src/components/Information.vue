<template>
 <section class="myInformation py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img class="card-img-top mb-5 mb-md-0" src="../assets/user.png" alt="..."/>
        </div>
        <div class="col-md-6">
          <h2 class="display-5 fw-bolder text-dark">Nombre del Profesional</h2>
          <div class="fs-5 mb-5">
          </div>
          <h4 class="small mb-3 fw-bolder text-dark">Descripción:</h4>
          <p class="lead text-dark">
            Ofrezco desarrollo de aplicaciones web 
          </p>
           
          <div class="d-flex">
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
              <i class="bi-cart-fill me-1"></i>
              Agendar Cita
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>   
</template>
<script>
export default {
    name: "Information"  
}
</script>
<style>
.myInformation {
  background-color: #ffffff;
}
</style>
