//window.onload = function(){
$( document ).ready(function() { 

    $('button').on('click', function(){
        var country; //= $('input#country').val();
       // alert(country); 
        
        if($('input#country').val()== "" || is_checked== true){
            alert('hey');
            country="";
        }else{
            country= $('input#country').val();
        }
        /*setInterval(function(){
          $('#result').load('world.php')
          
        }, 3000);*/
        function is_checked(){
        var all= document.getElementById('all').checked;
        return true;
        }
        
     // })
     
       $.ajax({
        url:"world.php",
        method:"get",
      //dataType: 'json',
        data:{country:country},
        success:function(data)
        {
                //alert("Success");
               // alert(data);
                $('#result').html(data);
                document.getElementById("result").value= data.innerHTML;
              
        },
        error:function(data)
        {
            alert("error");
        }
    });        
 /*
    // call ajax
    var april= new XMLHttpRequest();
    var method ="GET";
    var url= "world.php";
    var asynchronise= true;
    
    april.open(method, url);
    //sending ajax request
    april.send();

    
    //receiving response from world.php
    april.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200)
        {
            var response = april.responseText;
            alert(response);
            $("#result").html("<strong>" + response +
        "</strong> ");
         //  $('div#result').text(this.responseText);
                                                                                
          //  return t;
        /*  $.post('ajax/world.php', {name:name}, function(data){
              alert(data);
          });*/
//     }
 //   };
    
  //  WAS
    });//closes the event handler for clicking on the button
     
});//closes the window.onload function                                    