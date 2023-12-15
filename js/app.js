// let ajaxRequest = new XMLHttpRequest();
// console.log(ajaxRequest);
// console.log(typeof ajaxRequest);

// ajaxRequest.open("GET", "../data.json");
// ajaxRequest.onload = function () {
//   let data = JSON.parse(ajaxRequest.response);
//   console.log(data);
//   console.log(ajaxRequest.statusText);
//   console.log(ajaxRequest.status);
// };
// ajaxRequest.onerror = function (err) {
//   console.log(err);
// };
// ajaxRequest.send();

// let fetchData = async () => {
//   try {
//     let data = await window.fetch("../data.json");
//     let value = await data.json();
//     console.log(value);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();

// window
//   .fetch("../data.json")
//   .then(response => {
//     console.log(response);
//     response
//       .json()
//       .then(value => {
//         console.log(value);
//       })
//       .catch(err => console.log(err));
//   })
//   .catch(err => {
//     console.log(err);
//   });

let fetchData = async () => {
  try {
    let data = await window.fetch("../data.json");
    let value = await data.json();
    let output = "";
    for (let video of value) {
      let {
        video_name,
        video_image,
        video_source,
        video_description,
        category,
        languages,
      } = video;
      output += `<li class="container">
          <figure >
          <img src="${video_image}" alt="${video_name}"
          </figure>
          <div class="content">
          <h2>${video_name}
          </h2>
          <p>${video_description.slice(0, 30)}...</p>
          </div>
          </li>`;
    }
    document.getElementById("list").innerHTML = output;
    console.log(value);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
