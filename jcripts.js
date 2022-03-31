const key =  "AIzaSyCOceMdcjUlpdBdGWqNSJrCtPsA-kSzpC0";
let count=1;
const maxr='10';
const exta = '&type=video&part=snippet&maxResults='+maxr;
const htp = 'https://www.googleapis.com/youtube/v3/search?key='+key+exta+'&q=';
document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector('form').onsubmit = () =>{
        count=1;
        let search = document.querySelector('#search').value;
        let v =`Top 10 results of "${search.toUpperCase()}" are: `
        document.querySelector('#title').innerHTML=v;
        document.querySelector('#view').innerHTML= '';

        fetch(`${htp}${search}`)
        .then(response=>response.json())
        .then(data =>{
            data.items.forEach(item => {
                let video =`<br><h3 align="left" class="h3">#${count}:</h3><hr><iframe width = '100%' height ='82%' src='https://www.youtube.com/embed/${item.id.videoId}' 
                frameborder="0" alowfullscreen> </iframe> <br><br>`
                document.querySelector('#view').innerHTML+= video;
                count++;
            });
        })
        .catch(error =>{
            console.log('Error: ',error)
        })
        return false;
        
    }
})
