function addCliente() {
  const btnAdd = document.querySelector("#btn__add--cliente");
  const btnClose = document.querySelector("#closeBtn");
  console.log(btnAdd);
  btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    $("#container-add-user").show();
    $(window).bind("scroll", 0);
  });
  btnClose.addEventListener("click", (event) => {
    event.preventDefault();
    $("#container-add-user").hide();
  });
}

addCliente();

function editCliente(event) {
  event.preventDefault();
  $("#containerEdit").show();
  $(window).bind("scroll, 0");

  $("#closeEdit").click(function () {
    $("#containerEdit").hide();
    $(window).bind("scroll", 0);
  });

  const dadosUsuarios = event.target.closest("tr").querySelectorAll("td");  
  const usuariosInfo = {};

  dadosUsuarios.forEach(function (element) {
    usuariosInfo[element.cellIndex] = element.textContent;
  });

  console.log("dataaas");
  console.log(usuariosInfo);

  $(".nome").val(usuariosInfo[1]);
  $(".cargo").val(usuariosInfo[2]);
  $(".email").val(usuariosInfo[4]);

}



