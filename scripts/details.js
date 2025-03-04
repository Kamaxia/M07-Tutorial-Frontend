addEventListener("DOMContentLoaded", async function(){
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    const userID = localStorage.getItem("userID")


    details(songID)
})

async function details(songID){
    
    const response = await fetch("https://principled-complete-clownfish.glitch.me/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html+= `
        <h3>Artist - ${song.artist} </h3>
        <p>Popularity - ${song.popularity} </p>
        <p>Release Date - ${song.releaseDate.substring(0,10)} </p>
    `
    document.querySelector("div").innerHTML = html
}
  


async function addtoplaylist(songID,userID){
    const response = await fetch("https://principled-complete-clownfish.glitch.me/api/playlist", {
        method: "PUT",
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userID":userID,
            "songID":songID
        })
     });

     if(response.ok){
        alert("Song Added")
     }
     else(
        alert("Song not added")
     )

}