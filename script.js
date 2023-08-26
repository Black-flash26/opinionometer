function search(){
  let input = document.getElementById("input");
  let link = input.value
  input.value = ""
  string_yt = '/<iframe width="560" height="315" src="https://youtu.be/-u5BdG_6Lzs?si=DaE_3r3T9Ns6yAPa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

  
  // if (link.includes("youtube")){
  //   console.log()
  // //   link = link.replace("https://youtu.be","")
  // //   console.log("youtube"+link)
  // // }
  // if (link.includes("instagram")){
  //   console.log()
    
  // //   link = link.replace("https://www.instagram.com","")
    
  // //   if (link.includes("/reels/")){
  // //     link = link.replace("/reels/","")
  // //     link = link.replace("/","+r")
  // //   }
    
  // //   if (link.includes("/p/")){
  // //     link = link.replace("/p/","")
  // //     link = link.replace("/","+p")
  // //   }
    
  // //   console.log("insta/"+link)
  // }
  let about = document.getElementById("about");
  about.style.display = "none"

  let frame = document.getElementById("frame");
  console.log(frame.classList  )
  frame.classList.remove("hidden")
 mood = "positive"

}