function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
function myFunction_aim() {
    var dots = document.getElementById("dots_aim");
    var moreText = document.getElementById("more_aim");
    var btnText = document.getElementById("myBtn_aim");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

function SubForm(){
        event.preventDefault();
        $.ajax({
            url:'https://api.apispreadsheets.com/data/Mi4BQ77YNlRbRdRG/',
            type:'post',
            data:$("#myForm").serializeArray(),
            success: function(){
              alert("You will get notify soon :)")
              document.getElementById('mail').value = ' ';
            },
            error: function(){
              alert("There was an error :(")
            }
        });
    }

