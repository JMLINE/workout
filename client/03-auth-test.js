function fetchAllFromAuthRoute() {
    const fetch_url = `http://localhost:3000/api/authtest/getall`
    const accessToken = localStorage.getItem("SessionToken") //1
    const response = fetch(fetch_url, {
            method: 'GET', //2
            headers: {
                'Content-Type': 'application/json', //3
                'Authorization': accessToken //4
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

function postToAuthRouteCreate() {
    const fetch_url = `http://localhost:3000/api/authtest/create`
    const accessToken = localStorage.getItem('SessionToken')
    let authTestDataInput = document.getElementById('authTestData').value; //1
    let authInputData = {
        authtestdata: {
            import: authTestDataInput
        }
    }; //2
    const response = fetch(fetch_url, {
            method: 'POST', //3
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            body: JSON.stringify(authInputData) //4
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

function getOneByUser() {
    let postIdNumber = document.getElementById("getNumber").value; //1
    const fetch_url = `http://localhost:3000/api/authtest/${postIdNumber}` //2
    const accessToken = localStorage.getItem('SessionToken')
    const response = fetch(fetch_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        }).then(response => response.json())
        .then(json => console.log(json))

}

function updateItem() {
    let postIdNumber = document.getElementById("updateNumber").value;
    let authTestDataInput = document.getElementById("updateValue").value; //1
    const fetch_url = `http://localhost:3000/api/authtest/update/${postIdNumber}`; //2
    const accessToken = localStorage.getItem("SessionToken");
    let authInputData = {
        authtestdata: {
            item: authTestDataInput
        }
    }; //3
    const response = fetch(fetch_url, {
            method: "PUT", //4
            headers: {
                "Content-Type": "application/json",
                Authorization: accessToken
            },
            body: JSON.stringify(authInputData) //5
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            var myItem = document.getElementById("newItemValue");
            myItem.innerHTML = data.authtestdata;
            fetchAllFromAuthRoute()
        });
}