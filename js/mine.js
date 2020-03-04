

var httprequest = new XMLHttpRequest();// 1


var category = "general";

myAjax(category)


var AllLinks = document.querySelectorAll(".nav-link");


for(var i=0;i<AllLinks.length ;i++)
{
    AllLinks[i].addEventListener("click",function(e){
        
       category = e.target.text
        
        myAjax(category);
        
        
    })
}



function myAjax(category)
{
        httprequest.open("GET","https://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=1276733642214965bbf911ac6a64941e") //2

        httprequest.send(); //3


        httprequest.onreadystatechange = function(){ //3


            if(httprequest.status ==200 && httprequest.readyState ==4)
                {

                    var allData = JSON.parse(httprequest.response).articles  ;


                    displayData(allData)



                }


    
}



}




function displayData(allData)
{
     temp = "";
            
            
            for(var i =0 ;i<allData.length ; i++)
                {

                    temp+= ` <div class="col-md-3 mb-5">
                
                    <div class="item">
                        
                        <img src="`+allData[i].urlToImage+`" class="img-fluid">

                        <h5>`+allData[i].title+`</h5>
                        <p>`+allData[i].description+`</p>

                        <a class="btn btn-primary " href="`+allData[i].url+`">Read More</a>
                
                    </div>
                
                </div>`
                    
                    
                }
            
            
            document.getElementById("rowData").innerHTML = temp;
                
}

