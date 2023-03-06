var url="https://animechan.vercel.app/api/random"
fetch(url)
.then((res) => res.json())
.then((quote)=>console.log(quote))

var url="https://animechan.vercel.app/api/random"
async function fetchingapi(){
var fetch_url=await fetch(url)
var res=await fetch_url.json()
console.log(res)


var child=document.createElement("div")
child.innerHTML+=`
<p>anime:${res.anime}</P>
<p>character:${res.character}</P>
<p>quote:${res.quote}</P>
`
document.querySelector('body').appendChild(child)
}
fetchingapi()





