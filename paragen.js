

let container=document.querySelector(".container");
const generatewords=(n)=>
    {
        const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let Text="";
        
            for( let i=0;i<n;i++)
                {  let random=  (Math.random()*(letters.length-1)).toFixed(0);
                    Text+= letters[random];
                }
        return Text;
}
    





 const generatepara=()=>

    {   const input=document.getElementById("numOfWords");
          let para=document.createElement("p");

      let  numoffwords=Number(input.value);
        let data=" ";
        for(let i=0;i<numoffwords;i++){
           
            let randomnum=(Math.random()*15).toFixed(0);
      
            data+=generatewords(randomnum);
            data+=" ";
            
            }
            para.innerText = data;
 
        

        para.setAttribute("class","paras");
      container.append(para);
     
    }

