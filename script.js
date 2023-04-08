let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click',(e)=>{
    let len=string.length;
    if(e.target.innerHTML=='=')
    {
      string=eval(string);
      document.querySelector('input').value=string;
    }
      else if(e.target.innerHTML=='C')
    {
      string="";
      document.querySelector('input').value=string;
    }
      else if(e.target.innerHTML=='DEL')
    {
      string=string.substring(0,len-1);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='%')
    {
        num=Number(string);
        string=(num/100).toString();
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='1/x')
    {
        num=Number(string);
        string=(1/num).toString();
        document.querySelector('input').value=string;
    }
    else{
    console.log(e.target)
    string+=e.target.innerHTML;
    document.querySelector('input').value=string;
    }
  })
})
