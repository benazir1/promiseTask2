var res = fetch("https://api.thecatapi.com/v1/images/search?limit=10");
res.then((data)=>data.json()).then((data1)=>{
  for(var i=0; i<data1.length; i++){
      console.log(data1[i].name);
      var div = document.createElement("div");
      div.innerHTML= `<p>ID:${data1[i].id}</p>
      <p>Url:${data1[i].url}</p>
      <p>Width:${data1[i].width}</p>
      <p>Height:${data1[i].height}</p><br>`

      document.body.append(div);
  }
});
    