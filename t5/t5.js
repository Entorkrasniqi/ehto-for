function laskeSumma() {
  const numero = parseInt(document.getElementById("numero").value);

  let summa = 0;

  if (numero > 0) {
      for (let i = 1; i <= numero; i++) {
          summa += i;
      }
      document.getElementById("summa").innerText = `Summa: ${summa}`;
  } else {
      document.getElementById("summa").innerText = "Syötä positiivinen kokonaisluku.";
  }
}
