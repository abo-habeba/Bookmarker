var BookmarkName = document.getElementById("BookmarkName");
var websiteURL = document.getElementById("websiteURL");
var boxOutboat = document.getElementById("boxOutboat");
var ValidLink;
var iOpj;

    if (localStorage.getItem("bebsites") == null) {
    var arryWebsites = [];
    } else {
    var arryWebsites = JSON.parse(localStorage.getItem("bebsites"));
    }
    display();
    function submit() {
        if (websiteURL.value.includes("https://") == true) {
            ValidLink = `${websiteURL.value}`;
        } else if (websiteURL.value.includes("https://") == false) {
            ValidLink = `https://${websiteURL.value}`;
        }
        addWebsites();
        display();
        localStorage.setItem('bebsites', JSON.stringify(arryWebsites));
        BookmarkName.value = '';
        websiteURL.value = '';


    }

    // function Add Websites to object push to arry
    function addWebsites(){
        var opjWebsites = {
            bName : BookmarkName.value ,
            siteURL : ValidLink ,
        }
        arryWebsites.push(opjWebsites);
    }

function display(){
    if (arryWebsites.length > 0) {
        
        document.getElementById('arryCount').innerHTML= ` ${arryWebsites.length} Websites <button class="btn btn-danger mx-5" onclick="Deleteall()">Delete All</button>`;
    }

    var box = ``;
    for (let i = 0; i < arryWebsites.length; i++) {
        box += `
        <div class="outboat p-4 m-4">
          <h2>${arryWebsites[i].bName}</h2>
          <div>
            <a class="btn btn-primary" href="${arryWebsites[i].siteURL}" target="_blank">visit</a>
            <button class="btn btn-danger mx-5" onclick="Deleted(${i})">Delete</button>
          </div>
        </div>
        `;
        iOpj = i ;
        localStorage.setItem('bebsites', JSON.stringify(arryWebsites))

    }
    boxOutboat.innerHTML = box ;
}



function Deleted(iOpj){
    arryWebsites.splice(iOpj,1)
    display();
    localStorage.setItem('bebsites', JSON.stringify(arryWebsites))

}

function Deleteall(){
    localStorage.clear();
    arryWebsites = [];
    display();
    location.reload();
}
