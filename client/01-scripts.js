function fetchHelloDataFromAPI() {
  fetch("http://localhost:3000/test-controller/helloclient", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(function(response) {
      console.log("Fetch response:", response);
      return response.text();
    })
    .then(function(text) {
      console.log(text);
    });
}

function postToOne() {
  var url = "http://localhost:3000/test-controller/one";
  fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(function(response) {
      return response.text();
    })
    .then(function(response) {
      console.log("success", response);
      console.log(atob('WW91ciBuZXh0IGNvZGUgaXM6IDQ1MTc'))
    });
}

function postToOneArrow(){
    var url = 'http://localhost:3000/test-controller/one';

    fetch(url, {  
      method: 'POST', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.text()) 
    .then(response => {
        console.log('Success:', response)
        console.log(atob('WW91ciBuZXh0IGNvZGUgaXM6IDczMjg=') )
  }); 
}


function postData() {
    //1
    let content = { testdata: { item: 'This was saved!' } };

    //2
    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test-controller/seven', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)  //3
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);
        //4
        testDataAfterFetch.innerHTML = text.testdata.testdata; 
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;

        console.log(atob('WW91ciBuZXh0IGNvZGUgaXM6IDE5NzM='))
    });
}



function fetchFromOneDisplayData(){
    let url = 'http://localhost:3000/test-controller/one';
  //   let dataView = document.getElementById('display-one');   

    fetch(url, {
      method: 'GET', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){
            return response.json()
        })
  //   .catch(
  //       function(error){
  //           console.error('Error:', error)
  //       })
    .then(
        function(results){
            let myList = document.querySelector('#getjson');

            for (r of results){  
                console.log('Response:', r.testdata); 
                var listItem = document.createElement('li');  
                listItem.innerHTML = r.testdata; 
                myList.appendChild(listItem); 
            }
        })
}