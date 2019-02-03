function addNewMovie(){
   var movie_name = document.querySelector("#movieName").value;
   var list = document.getElementById('list');

   var new_div = document.createElement("div");
   new_div.setAttribute("class","movie-list-style");
   new_div.setAttribute("id","new_id");
   list.append(new_div);

   var list1 = document.querySelectorAll('#new_id');
   if(list1.length == 1){
      var new_span = document.createElement("span");
      new_div.appendChild(new_span);
      new_span.appendChild(document.createTextNode(movie_name));

      var new_button = document.createElement("button");
      new_div.appendChild(new_button);
      new_button.setAttribute("class","movie-delete");
      new_button.appendChild(document.createTextNode("Delete"));
   }
   else{
      var new_span = document.createElement("span");
      new_div = list1[list1.length-1];
      new_div.appendChild(new_span);
      new_span.appendChild(document.createTextNode(movie_name));

      var new_button = document.createElement("button");
      new_div.appendChild(new_button);
      new_button.setAttribute("class","movie-delete");
      new_button.appendChild(document.createTextNode("Delete"));
   }
}


var list = document.querySelector('.movie-list ul');

list.addEventListener('click', function(e){
   if(e.target.className === 'movie-delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
   }
})

function searchMovies(){
}
