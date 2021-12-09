<template>
  <div class="myReser">
    <div class="container table-responsive my-5">
      <table id="cart" class="table table-hover table-sm">
        <thead>
          <tr>
            <th style="width:55%">Categorias</th>
            <th style="width:9%">Profesional</th>
            <th style="width:7%">Fecha</th>
            <th style="width:20%" class="text-center">Costo</th>
            <th style="width:9%"></th>
          </tr>
        </thead>

        <transition-group name="list-shopping-cart" tag="tbody">
          <app-cart-item>

          </app-cart-item>
        </transition-group>

        <tfoot>
          <tr class="d-table-row d-sm-none">
            <td class="text-center">
              <strong>Total $xxx</strong>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-success">
                <i class="fa fa-angle"></i> Editar 
              </button>
            </td>
            <td class="px-0">
              <button class="btn btn-info">
                <span class="text-nowrap"
                  >Eliminar <i class="fa fa-angle d-inline"></i
                ></span>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
 name: "Reservation",
}
</script>

<style>
.myReser {
  padding: 50px;
  background-color: #ffffff;
}
</style>