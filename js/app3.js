// let fetchData = async () => {
//   try {
//     let data = await window.fetch("../data.json");
//     let value = await data.json();
//     console.log(value[0].video_image);
//     let output = "";
//     for (let video of value) {
//       console.log(video);
//       let {
//         video_name,
//         video_image,
//         video_category,
//         video_source,
//         video_description,
//       } = video;
//       console.log(video_image);
//       output += `<li class="container">
//       <figure class="poster">
//         <img src=${video_image} alt=${video_name}/>
//       </figure>
//       <div class="content">
//         <h2>${video_name}</h2>
//           <p>${video_description.slice(0, 50)}...</p>
//       </div>
//       </li>`;
//     }
//     document.getElementById("list").innerHTML = output;
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();

let fetchData = async () => {
  let data = await window.fetch("../data.json");
  let value = await data.json();
  value.map(m => {
    let right = document.getElementById("thumb");
    var eleCreate = document.createElement("div");
    eleCreate.className = "c1";
    console.log(eleCreate);

    eleCreate.innerHTML += `<img src=${
      m.video_image
    } height="150px" width="300px" id="newImg"/>
      <h3 id="v_title">${m.video_name}</h3> <p>${m.video_description.slice(
      0,
      50
    )}...`;
    let newVideo = eleCreate.innerHTML;
    console.log(newVideo);
    let comm = document.createElement("input");
    comm.setAttribute("placeholder", "write your comments");
    comm.setAttribute("id", "comInput");

    eleCreate.onclick = function () {
      let vPlayer = document.getElementById("play");
      console.log(vPlayer.children);
      vPlayer.innerHTML = ` <video src="${m.video_source}" controls autoplay></video>
      <h3>${m.video_name}</h3> 
      <p><b>Category:</b>${m.category}</p>
      <p><b>Starring:</b>${m.Starring}</p>
      <p><b>Languages Available:</b>${m.languages}</p>   
      `;
      vPlayer.appendChild(comm);
      let area = document.getElementById("textArea");
      area.innerHTML = "";

      let comm2 = document.getElementById("comInput");
      comm2.addEventListener("keyup", e => {
        if (e.key == "Enter") {
          let area = document.getElementById("textArea");
          let value1 = e.target.value;
          area.innerHTML = value1;
        }
      });
    };

    right.appendChild(eleCreate);
  });
};
fetchData();
