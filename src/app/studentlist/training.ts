var rect=function(width,height){
    if(width >0 && height>0)
    {
        return width*height;
    }
    
return 0;
}

console.log(rect(5,7));
console.log(rect(-1,5));