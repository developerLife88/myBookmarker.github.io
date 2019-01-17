




/* ---(1)----- */
$(document).ready(function(){
    


    
    
 $('#bmForm').on('submit', function(e){
    
     
     var formObject = {
                title: $('#title').val(),
                url: $('#url').val(),
                type: $('#option').val()
            }
     
     e.preventDefault();
     console.log(formObject);
     
     setLS(formObject);
     $(this)[0].reset();
 }); /*--------end on submit --------*/
    
    
    
  /*----  function runAtpageload(formObject){
     var ty = formObject.type;
      if(ty == 'Technologies'){
          var addToList = ` <li>${formObject.title}<li>
                `;    
        $('#tech').html(addToList); 
      } 
    }   -------*/
    
    
    
    
  function setLS(formObject){
      
      
      /* check if the website local storage doesnot exist so we can create the array that hold all items */
      var check =  localStorage.getItem("websites");
      if(check === null){
         
          var websiteList = [];
          websiteList.push(formObject);
          
          
          
    var x = JSON.stringify(websiteList);
    localStorage.setItem("websites", x); 
      }else{
       /* check if the website local storage has websites key already the bring it */
      var retrievedItems = JSON.parse(localStorage.getItem("websites"));
      //adding a new website to the list
      retrievedItems.push(formObject);
      // add it as JSON object
       var x = JSON.stringify(retrievedItems);
    localStorage.setItem("websites", x); 
  }
      
      bringwebsites();
  } /* ---- end of setLS() ------ */
    
    
    
  
}); /*--------- end of .ready ---------*/



    
   
 



            /*---------(4)-------*/
              function deleteItem(uRl){
       console.log(uRl);
         let retrievedItems = JSON.parse(localStorage.getItem("websites"));
            for(let i=0; i< retrievedItems.length; i++){
               if(retrievedItems[i].url == uRl){
                   console.log("condition is true");
               retrievedItems.splice(i, 1);  
             }  
            }
        // send the change to the localStorage          
    var x = JSON.stringify(retrievedItems);
    localStorage.setItem("websites", x);
                  // updating the list on page
                 bringwebsites();
                }








     /*---------(5)-------*/
              function editItem(Title,uRl){
       console.log(Title,uRl);
         let retrievedItems = JSON.parse(localStorage.getItem("websites"));
                  console.log(retrievedItems);
            for(let i=0; i< retrievedItems.length; i++){
               if(retrievedItems[i].url == uRl){
              
                   console.log(retrievedItems[i].url);
       
      
             
             var Form = `<div class="form-group">
    <br>
    <input type="text" class="form-control" id="title2" placeholder="Enter Website Name" value="${Title}" required>
  </div>
  <div class="form-group">
    <br>
    <input type="text" class="form-control" id="url2" value="${uRl}" placeholder="Add url here" required>
  </div>

    
    <div class="row">
        <div class="col-md"> <button type="button" class="btn btn-secondary btn-lg btn-block" data-dismiss="modal"><i class="fas fa-times"></i></button></div>
        <div class="col-md"><button type="submit" class="btn bg-newGreen btn-lg btn-block"  id="sub"><i class="far fa-save"></i></button></div>
    </div>
                `;
                   
            $('#f2').html(Form);       
              
                   
        $('#f2').on('submit', function(e){
    
         
                       
     var formObject2 = {
                title: $('#title2').val(),
                url: $('#url2').val(),
                type: $('#option2').val()
            }
     
     e.preventDefault();
     console.log(formObject2);  
            
           
                    //get rid of old item 
                   retrievedItems.splice(i, 1); 
            // Add the new object to the array
        retrievedItems.push(formObject2);    
                   // send the change to the localStorage          
    var x = JSON.stringify(retrievedItems);
    localStorage.setItem("websites", x);
                  // updating the list on page
                 bringwebsites();
           
        
      
           
                  
   
 }); /*--------end of the on submit function --------*/
    
             } /*--------end of the if condition --------*/
          }  /*--------end of the for loop --------*/
               } /*--------end of editItem --------*/










    /* ---(2)-----*/ 
$(window).on('load', function() {
    bringwebsites();
    });  
     
      


/*-------(3)----------*/
function bringwebsites(){
// pushing the keys to the BM id on page
          var retrievedItems = JSON.parse(localStorage.getItem("websites"));
    console.log(retrievedItems);
   
    // if you don't add it it will brin the old items + new douplicated
    $('#BM').html(" "); 
     $.each(retrievedItems, function(index, item){
         
   var Title = item.title;  
  var uRl = item.url;
         
   
          var addToList = ` <li class="list-group-item d-flex justify-content-between align-items-center jstyle">
    ${item.title}
    <span class="badge  badge-pill">
<a href="${item.url}" target="_blank"><button class="btn bg-newWhite"><i class="fas fa-link"></i></button> </a>
<a href="#"><button class="btn bg-newWhite" data-toggle="modal" data-target=".m2" onclick="editItem('${Title}' , '${uRl}')"> <i class="fas fa-pencil-alt"></i></button> </a>
<a href="#"><button class="btn bg-newWhite" onclick="deleteItem('${uRl}')"> <i class="far fa-trash-alt"></i></button> </a>
    </span>
    </li>
                `;
          

        $('#BM').append(addToList); 
   
            });  /*----end $.each() ---*/
    
            }  /*--------- end of bringItems() ---------*/
    
   
    
   
          