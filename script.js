const api_url = "https://jsonplaceholder.typicode.com/posts";
function display() {
  let delay = setTimeout(getapi(api_url), 4000);
  return delay;
}
async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log("Data", data);
  if (response) {
    hideloader();
  }
  show(data);
}
display();
function hideloader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("api-data").style.display = "block";
}
function show(data) {
  let tab = `<tr>
          <th>User Id</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
         </tr>`;
  for (let r of data) {
    tab += `<tr> 
      <td>${r.userId} </td>
      <td>${r.id}</td>
      <td>${r.title}</td> 
      <td>${r.body}</td>          
    </tr>`;
  }
  document.getElementById("user-data").innerHTML = tab;
}
