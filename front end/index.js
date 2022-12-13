// aggiunge ascoltatore sul click del bottone
document.getElementById("btn1").addEventListener("click", function () {
  $.ajax({
    method: "GET",
    url:
      "http://localhost:3000/somma?a=" +
      document.getElementById("a").value +
      "&b=" +
      document.getElementById("b").value,
    data: { name: "John", location: "Boston" },
  }).done(function (msg) {
    document.getElementById("testo").innerHTML = "risultato" + msg;
  });
});
