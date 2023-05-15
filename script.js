
let answer=document.querySelector('#answer')
let again=document.querySelector('.again')
let btn=document.querySelector('.btn')
let text=document.querySelector('.text')
let fruct=['banana','Kiwi','apple','strawberry','lemon','mango','orange','grape','cherry','pear']


fruct=fruct.sort(()=> 0.4-Math.random())
let f_index=0
console.log(fruct)
let hashiv={
    correct:0,
    wrong:0
}


function question(){
    let res=fruct[f_index]
    if(!res){
        text.innerHTML=`        
            <div><h4>Correct: ${hashiv.correct} </h4> </div>  
            &&  
            <div><h4>Wrong: ${hashiv.wrong} </h4></div>
               
 
        `
        btn.style.display='none'
        answer.style.display='none'
        again.style.display='block'
        return
    }
    let arr=res.split('')
    arr=arr.sort(()=> 0.3-Math.random()).join('')

    text.innerHTML=arr
}
question()
function tryagain(){
    f_index=0
    hashiv.correct=0
    hashiv.wrong=0
    btn.style.display='block'
    answer.style.display='block'
    again.style.display='none'
    question()
}
function next(){
   if(fruct[f_index].toLowerCase()===answer.value.toLowerCase()){
       hashiv.correct++
   }else{
       hashiv.wrong++
   }
    answer.value=''
    f_index++
    question()
}