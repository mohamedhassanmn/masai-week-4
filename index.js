
document.getElementById('show_converted').addEventListener("click",function(){

var convert_f=document.getElementById('convert_from').value
var convert_t=document.getElementById('convert_to').value
var result=null;
var xhr= new XMLHttpRequest()
;
xhr.open("GET","https://api.currencystack.io/currency?base="+convert_f+"&target="+convert_t+"&apikey=P225a653f2ca4568f2310b5a755a72de")
xhr.send()
xhr.onload=function(){
  if(xhr.status==200){
    result=xhr.response
    //console.log(result)
  }else{
    console.log("ERROR NO :"+xhr.status)
  }
var res=JSON.parse(result)
   print(res)
}
})
function print(obj){
var amount=Number(document.getElementById('input').value)
var convert_t=document.getElementById('convert_to').value
  console.log(obj)
var val=obj.rates
var value=0
for(key in val){
  value+=val[key]
}
var symbol={
  GBP:"£",
  INR:"₹",
  USD:"$",
  EUR:"€",
  JPY:"¥",
  CHF:"₣",
  CAD:"$",
  AUD:"$",
  NZD:"$",
  ZAR:"R"
  }
var para=document.createElement("p")
console.log(value)
//var input_num=Number(input)
console.log(amount)
para.textContent=symbol[convert_t]+(value*amount)
para.style.color="#fff"
para.style.fontSize="40px"
para.style.marginLeft="400px"
document.getElementById('display').innerHTML=""
document.getElementById('display').appendChild(para)
}
