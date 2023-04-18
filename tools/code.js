// Mendapatkan textarea input
var textarea = document.getElementById("inputTextarea");

// Mendapatkan output div
var outputDiv = document.getElementById("output");

// Mendapatkan tombol append
var appendButton = document.getElementById("appendButton");

// Menambahkan event listener pada tombol append
appendButton.addEventListener("click", function() {
  // Mendapatkan isi dari textarea
  var inputText = textarea.value;

  // Membuat elemen <p> untuk setiap paragraf
  var paragraphs = inputText.split("\n\n"); // Memisahkan teks berdasarkan baris baru
  var articleHTML = "";
  paragraphs.forEach(function(paragraph) {
    // Menambahkan setiap paragraf dalam elemen <div> dengan class "box"
    articleHTML += '<div class="box"><p>' + paragraph + '</p></div>';
  });

  // Menambahkan artikel yang di-generate ke dalam output div
  outputDiv.innerHTML = articleHTML;
});
