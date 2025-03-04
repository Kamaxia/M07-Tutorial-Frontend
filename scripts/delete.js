addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deleteBtn").addEventListener("click", deleteSong)
    getAllSongs()
})

//get all songs retrieves a list of songs and sticks them in the dropdown
async function getAllSongs() {
    const response = await fetch("https://principled-complete-clownfish.glitch.me/api/songs")
    if (response.ok){
        const songs = await response.json()
        let html = ""
        for (let song of songs){
            html += `<option value="${song._id}">${song.title}</option>`
        }
        document.querySelector("#songDropDown").innerHTML = html
    }
    
}
async function deleteSong(){
    //grab id of selected song from the dropdown
    const songId = document.querySelector("#songDropDown option:checked").value
    const response = await fetch("https://principled-complete-clownfish.glitch.me/api/songs/" + songId, {
        method: "DELETE"
    })
    if(response.ok){
        alert("Song deleted")
        getAllSongs()        
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot delete song"
    }
}