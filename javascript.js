var checkboxes = document.getElementsByClassName('checkbox-style');
var totalCheckBox = checkboxes.length;


function addNewMovie(){
   var movie_name = document.querySelector("#movieName").value;
   var list = document.getElementById('list');

   var new_div = document.createElement("div");
   new_div.setAttribute("class","movie-list-style");
   new_div.setAttribute("id","new_id");
   list.append(new_div);
   var new_checkbox = document.createElement("input");
   new_checkbox.setAttribute("type","checkbox");

   var new_span = document.createElement("span");
   var list1 = document.querySelectorAll('#new_id');
   if(list1.length != 1){
      new_div = list1[list1.length-1];
   }
   new_div.appendChild(new_checkbox);
   new_div.appendChild(new_span);
   new_span.appendChild(document.createTextNode(movie_name));
   var new_button = document.createElement("button");
   new_div.appendChild(new_button);
   new_button.setAttribute("class","movie-delete");
   new_button.appendChild(document.createTextNode("Delete"));
}


var list = document.querySelector('.movie-list ul');

list.addEventListener('click', function(e){
   if(e.target.className === 'movie-delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
   }
})

function searchMovies(){
   var search  = document.getElementById('filterMovie');
   var filter = search.value.toUpperCase();
   li = document.getElementById('list');
   div = li.getElementsByTagName('div');
   for(var i=0;i<div.length;i++){
      searchResult = div[i].getElementsByTagName('span')[0];
      values = searchResult.textContent || searchResult.innerText;
      if(values.toUpperCase().indexOf(filter) > -1){
         div[i].style.display="";
      }
      else{
         div[i].style.display = "none";
      }
   }
}

function hideMovies(){
   var checkCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
   if(checkCount == 0){
      displayModalMessage();
   }
   var checkboxes = document.getElementsByClassName('checkbox-style');
   for(var i=0;i<checkboxes.length;i++){
      if(checkboxes[i].checked){
         checkboxes[i].parentNode.style.display="none";
      }
   }
}

function showMovies(){
   var checkboxes = document.getElementsByClassName('checkbox-style');
   for(var i=0;i<checkboxes.length;i++){
      if(checkboxes[i].checked){
         checkboxes[i].parentNode.style.display="block";
      }
   }
}

function displayModalMessage(){
   var modal = document.getElementById('myModal');
   modal.style.display="block";
}

function closeModalMessage(){
   var modal = document.getElementById('myModal');
   modal.style.display = "none";
}
