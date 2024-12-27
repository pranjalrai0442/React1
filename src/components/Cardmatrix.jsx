import React, { useEffect, useState } from 'react'
import { compoContext } from '../Context/Context';
import { UserProvider } from '../Context/Context';


function Cardmatrix(){
  
  const [note,changeNote] = useState("Don't pic this card")
  const {changeScore,changetry,chance} = compoContext();
  const change =()=>{
    changeScore()
  }


  const [flag1,setFlag1]=useState(0);
  const [flag2,setFlag2]=useState(0);
  const [flag3,setFlag3]=useState(0);
  const [flag4,setFlag4]=useState(0);
  const [flag5,setFlag5]=useState(0);
  const [flag6,setFlag6]=useState(0);
  const [flag7,setFlag7]=useState(0);
  const [flag8,setFlag8]=useState(0);
  const [flag9,setFlag9]=useState(0);
  const [flag10,setFlag10]=useState(0);
  const [flag11,setFlag11]=useState(0);
  const [flag12,setFlag12]=useState(0);
  const [flag13,setFlag13]=useState(0);
  const [flag14,setFlag14]=useState(0);
  const [flag15,setFlag15]=useState(0);
  const [flag16,setFlag16]=useState(0);


  const [picname,setPicnum] = useState();
  const [num1,setNum] = useState(0);
  const [count,setCount] = useState(1);

  useEffect(()=>{
    if(chance<=0){
      terminate();
    }
    else{
    Setname()
    }
  },[])

  const [cell1,setCell1] = useState("blank.jpg")
  const [cell2,setCell2] = useState("blank.jpg")
  const [cell3,setCell3] = useState("blank.jpg")
  const [cell4,setCell4] = useState("blank.jpg")
  const [cell5,setCell5] = useState("blank.jpg")
  const [cell6,setCell6] = useState("blank.jpg")
  const [cell7,setCell7] = useState("blank.jpg")
  const [cell8,setCell8] = useState("blank.jpg")
  const [cell9,setCell9] = useState("blank.jpg")
  const [cell10,setCell10] = useState("blank.jpg")
  const [cell11,setCell11] = useState("blank.jpg")
  const [cell12,setCell12] = useState("blank.jpg")
  const [cell13,setCell13] = useState("blank.jpg")
  const [cell14,setCell14] = useState("blank.jpg")
  const [cell15,setCell15] = useState("blank.jpg")
  const [cell16,setCell16] = useState("blank.jpg")

  const sound = new Audio("click.wav")
  const lose = new Audio("over.wav")
  const win = new Audio("Win.wav")

  function terminate(){
      if(chance==0){
      setDead();
      setFlag1(1)
      setFlag2(1)
      setFlag3(1)
      setFlag4(1)
      setFlag5(1)
      setFlag6(1)
      setFlag7(1)
      setFlag8(1)
      setFlag9(1)
      setFlag10(1)
      setFlag11(1)
      setFlag12(1)
      setFlag13(1)
      setFlag14(1)
      setFlag15(1)
      setFlag16(1)
      }
      else{
        changetry();
        setDead();
      setFlag1(1)
      setFlag2(1)
      setFlag3(1)
      setFlag4(1)
      setFlag5(1)
      setFlag6(1)
      setFlag7(1)
      setFlag8(1)
      setFlag9(1)
      setFlag10(1)
      setFlag11(1)
      setFlag12(1)
      setFlag13(1)
      setFlag14(1)
      setFlag15(1)
      setFlag16(1)
      }
  }

  function setWin(){
    changetry();
    setCell1("win.jpg")
  setCell2("Win.jpg")
  setCell3("Win.jpg")
  setCell4("Win.jpg")
  setCell5("Win.jpg")
  setCell6("Win.jpg")
  setCell7("Win.jpg")
  setCell8("Win.jpg")
  setCell9("Win.jpg")
  setCell10("Win.jpg")
  setCell11("Win.jpg")
  setCell12("Win.jpg")
  setCell13("Win.jpg")
  setCell14("Win.jpg")
  setCell15("Win.jpg")
  setCell16("Win.jpg")

    setFlag1(1)
    setFlag2(1)
    setFlag3(1)
    setFlag4(1)
    setFlag5(1)
    setFlag6(1)
    setFlag7(1)
    setFlag8(1)
    setFlag9(1)
    setFlag10(1)
    setFlag11(1)
    setFlag12(1)
    setFlag13(1)
    setFlag14(1)
    setFlag15(1)
    setFlag16(1)
  }

  function winCheck(){
    if(count>4){
      win.play()
      setWin()
      changeNote("Won,Game Over for this turn");
    }
  }


  function loseCheck(cellCheck){
    if(cellCheck===num1){
      lose.play();
      terminate();
      changeNote("Lose,Game Over for this turn");
    }
  }


  const change1 =()=>{
    if(flag1==0){
      change();
    setFlag1(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
    setCell1(("pic"+num)+".jpg")
    setCount((prev)=>prev+1)
    winCheck();
    loseCheck(num)
    }
  }

  const change2 =()=>{
    if(flag2==0){
      change()
      setFlag2(1);
      let num = Math.floor(Math.random()*(5-2)+2)
      sound.play()    
      setCell2(("pic"+num)+".jpg")
      setCount((prev)=>prev+1)
      winCheck();
      loseCheck(num)
    }
  }

  const change3 =()=>{
    if(flag3==0){
      change();
      setFlag3(1);
      let num = Math.floor(Math.random()*(5-2)+2)
      sound.play()    
      setCell3(("pic"+num)+".jpg")
      setCount((prev)=>prev+1)
      winCheck();
      loseCheck(num)
    }
  }

  const change4 =()=>{
    if(flag4==0){
      change();
      setFlag4(1);
      let num = Math.floor(Math.random()*(5-2)+2)
      sound.play()    
      setCell4(("pic"+num)+".jpg")
      setCount((prev)=>prev+1)
      winCheck();
      loseCheck(num)
    }
  }

  const change5 =()=>{
    if(flag5==0){
      change();
      setFlag5(1);
      let num = Math.floor(Math.random()*(5-2)+2)
      sound.play()    
      setCell5(("pic"+num)+".jpg")
      setCount((prev)=>prev+1)
      winCheck();
      loseCheck(num)
    }
  }

  const change6 =()=>{
    if(flag6==0){
      change();
      setFlag6(1);
      let num = Math.floor(Math.random()*(5-2)+2)
      sound.play()    
      setCell6(("pic"+num)+".jpg")
      setCount((prev)=>prev+1)
      winCheck();
      loseCheck(num)
    }
  }

  const change7 =()=>{
    if(flag7==0){
      change();
      setFlag7(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell7(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
  }
  }

  const change8 =()=>{
    if(flag8==0){
      change();
      setFlag8(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell8(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
    }
 }

  const change9 =()=>{
    if(flag9==0){
      change();
      setFlag9(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell9(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
    }
  }

  const change10 =()=>{
    if(flag10==0){
      change();
      setFlag10(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell10(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
    }  
}

  const change11 =()=>{
    if(flag11==0){
      change();
      setFlag11(1);   
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell11(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
    }
}


  const change12 =()=>{
    if(flag12==0){
      change();
      setFlag12(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
     setCell12(("pic"+num)+".jpg")
     setCount((prev)=>prev+1)
     winCheck();
     loseCheck(num)
    } 
    }


  const change13 =()=>{
    if(flag13==0){
      change();
      setFlag13(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell13(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
    }  
}
  const change14 =()=>{
    if(flag14==0){
      change();
      setFlag14(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell14(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
    }
  }
  const change15 =()=>{
    if(flag15==0){
      change();
      setFlag15(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell15(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)
    }
  }
  const change16 =()=>{
    if(flag16==0){
      change();
      setFlag16(1);
    let num = Math.floor(Math.random()*(5-2)+2)
    sound.play()    
  setCell16(("pic"+num)+".jpg")
  setCount((prev)=>prev+1)
  winCheck();
  loseCheck(num)  
}
  }


function Setname(){
  let num = Math.floor(Math.random()*(5-2)+2)
  setPicnum(("pic"+num)+".jpg")
  setNum(num)
}

function setDead(){
  setCell1("dead.jpg")
  setCell2("dead.jpg")
  setCell3("dead.jpg")
  setCell4("dead.jpg")
  setCell5("dead.jpg")
  setCell6("dead.jpg")
  setCell7("dead.jpg")
  setCell8("dead.jpg")
  setCell9("dead.jpg")
  setCell10("dead.jpg")
  setCell11("dead.jpg")
  setCell12("dead.jpg")
  setCell13("dead.jpg")
  setCell14("dead.jpg")
  setCell15("dead.jpg")
  setCell16("dead.jpg")
}



  return (
    <>
    <div className='flex justify-center mt-4'>
    <div className='grid grid-cols-4 grid-rows-4 gap-4 h-2/4 w-2/4 place-content-center'>
        <div className='h-auto rounded-lg'><img src={cell1} alt="Loading" className='rounded-lg' onClick={change1}/></div>
        <div className='h-auto rounded-lg'><img src={cell2} alt="Loading" className='rounded-lg' onClick={change2}/></div>
        <div className='h-auto rounded-lg'><img src={cell3} alt="Loading" className='rounded-lg' onClick={change3}/></div>
        <div className='h-auto rounded-lg'><img src={cell4} alt="Loading" className='rounded-lg' onClick={change4}/></div>
        <div className='h-auto rounded-lg'><img src={cell5} alt="Loading" className='rounded-lg' onClick={change5}/></div>
        <div className='h-auto rounded-lg'><img src={cell6} alt="Loading" className='rounded-lg' onClick={change6}/></div>
        <div className='h-auto rounded-lg'><img src={cell7} alt="Loading" className='rounded-lg' onClick={change7}/></div>
        <div className='h-auto rounded-lg'><img src={cell8} alt="Loading" className='rounded-lg' onClick={change8}/></div>
        <div className='h-auto rounded-lg'><img src={cell9} alt="Loading" className='rounded-lg' onClick={change9}/></div>
        <div className='h-auto rounded-lg'><img src={cell10} alt="Loading" className='rounded-lg' onClick={change10}/></div>
        <div className='h-auto rounded-lg'><img src={cell11} alt="Loading" className='rounded-lg'onClick={change11}/></div>
        <div className='h-auto rounded-lg'><img src={cell12} alt="Loading" className='rounded-lg'onClick={change12}/></div>
        <div className='h-auto rounded-lg'><img src={cell13} alt="Loading" className='rounded-lg'onClick={change13}/></div>
        <div className='h-auto rounded-lg'><img src={cell14} alt="Loading" className='rounded-lg'onClick={change14}/></div>
        <div className='h-auto rounded-lg'><img src={cell15} alt="Loading" className='rounded-lg'onClick={change15}/></div>
        <div className='h-auto rounded-lg'><img src={cell16} alt="Loading" className='rounded-lg'onClick={change16}/></div>
    </div>
    <center>
    <img src={picname} alt="" className='ml-4 rounded-lg'/>
    <p className='text-slate-50 text-4xl rounded-lg w-48'>{note}</p>
    </center>
    </div>
    </>
  )
}

export default Cardmatrix