var min=0;
var max=10;
var tableElement="Hello";
var data;
function getWebData() {
    var URL = "http://starlord.hackerearth.com/movieslisting";
    fetch(URL).then(function(response) {
        response.text().then(function(text) {
            movies=JSON.stringify(text);
            data=JSON.parse(text);
            setPage();   
            // data.forEach(element => {
            //     tableElement=tableElement+"<tr>";
            //     tableElement+="<td>"+element.movie_title+"</td>";
            //     tableElement+="<td>"+element.director_name+"</td>";
            //     tableElement+="<td>"+element.language+"</td>";
            //     tableElement+="</tr>";
            //     document.getElementById("tableData").innerHTML=tableElement;            
            // });
        })
    })
}
function setPageNumber(value){
    max=value*10;
    min=max-10;
    setPage();
}

function setPage(){
    tableElement="<tr><th>Movie</th><th>Director</th><th>Language</th></tr>"
    for(i=min;i<max;i++){
        tableElement=tableElement+"<tr>";
        tableElement+="<td>"+data[i].movie_title+"</td>";
        tableElement+="<td>"+data[i].director_name+"</td>";
        tableElement+="<td>"+data[i].language+"</td>";
        tableElement+="</tr>";
        document.getElementById("tableData").innerHTML=tableElement;            
    };
}

getWebData();