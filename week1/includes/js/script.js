$(document).ready(function(){
  stroll.bind( '#main ul' );
  console.log("jquery is ready");

  var button = "<button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";

  $('#todo-input').on("keyup", function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      console.log("ENTER");
      var form = $('#form-input');
      $("#todo-list").append(createItem(form.val()));
      form.val("");
    }

  });

  createItem = function(input) {
    var li = document.createElement("li");
    li.setAttribute("class", "todo-item");

    var tg = document.createElement("input");
    tg.setAttribute("type", "checkbox");
    tg.setAttribute("class", "toggle");
    tg.style.margin = "5px";
    li.append(tg);

    li.appendChild(document.createTextNode(input));

    var cross = document.createElement("button");
    cross.setAttribute("type", "button");
    cross.setAttribute("class", "close");
    cross.setAttribute("aria-label", "Close");
    var sp = document.createElement("span");
    sp.setAttribute("aria-hidden", 'true');
    sp.innerHTML = "&times;";
    cross.append(sp);

    li.append(cross);
    return li;
  }

  $(document).on("click", ".close" , function() {
    console.log("clear");
    $(this).parent().remove();
  });

  $(document).on("click", ".toggle", function() {
    if ( $(this).is(":checked")) {
      $(this).parent().wrap("<strike class='strk'>");
      $(this).parent().attr("class", "todo-item-complete");
      // $(this).parent().attr("text-decoration-color", "#AAAAAA");
    }
    else {
      $(this).parent().attr("class", "todo-item")
      $(this).parent().unwrap();
    }
  });

});
