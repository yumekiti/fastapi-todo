console.log(
    'FastApi'
);

let app = document.getElementById("app")
app.innerHTML = "<h1>Hello, World</h1>"

.get('/').then((response) => {
    console.log(response);
    app.innerHTML += "<p>" + response.data.Hello + "</p>"
})
