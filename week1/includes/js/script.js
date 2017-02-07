
$(document).ready(function(){
  console.log("jquery is ready");
  var button = "<button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";

  $('#todo-input').on("keyup", function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      console.log("ENTER");
      var form = $('#form-input');
      var input = form.val();

      //debug
      console.log(input);
      form.val("");

      //append
      // element.text("haha");
      // element.text(input + button);

      // $('#todo-list').append("<li>" + input + button +"</li>");
      var ol = $("#todo-list");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input));

      var sp = document.createElement("span");
      sp.setAttribute("aria-hidden", 'true');
      sp.innerHTML = "&times;";

      var bt = document.createElement("button");
      bt.setAttribute("type", "button");
      bt.setAttribute("class", "close");
      bt.setAttribute("aria-label", "Close");
      bt.append(sp);

      li.append(bt);
      ol.append(li);
    }

  });

});

$(document).on("click", "button" , function() {
  console.log("clear");
  $(this).parent().remove();
});

// $(document).on(function() {
//   $('.button').click(function() {
//     console.log("clear");
//   });
// });
