function make_album(name:string,title:string,track?:number):
{name:string;title:string;track?:number}


{

    const album={
        name,
        title,
        track,
        
    };


    if(track!==undefined)
    {
        album.track=track;
    }     

    return album;
}

const album1=make_album("Abrar ul Haq","SAYA",3);
console.log(album1)
const album2=make_album("Atif Aslam","Beauty",5);
console.log(album2)
const album3=make_album("Talha Anjum","Balli aur Mein");
console.log(album3)



