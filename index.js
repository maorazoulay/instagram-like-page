const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Elemenets to be loaded dynamically
let profileSectionLogo = document.getElementById("prof-sec-logo")
let profileName = document.getElementById("name")
let location = document.getElementById("location")
let portraitImage = document.getElementById("portrait-img")
let likes = document.getElementById("likes")
let username = document.getElementById("username")
let comment = document.getElementById("comment")

// Icons to be added listeners to
let heartIcon = document.getElementById("heart-icon")
let commentIcon = document.getElementById("comment-icon")
let dmIcon = document.getElementById("dm-icon")

loadProfile(posts[2])


function loadProfile(profile){
    profileSectionLogo.src = profile.avatar
    profileName.textContent = profile.name
    location.textContent = profile.location
    portraitImage.src = profile.post
    likes.textContent = profile.likes
    username.textContent = profile.username
    comment.textContent = profile.comment
}

portraitImage.addEventListener("dblclick", function(){
    let currentLikes = Number(likes.textContent)
    likes.textContent = ++currentLikes
})



