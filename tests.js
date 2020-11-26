  function validate(){
    var valid=true;
    var vecums=true;

    var ir=false;
    var ele=document.getElementsByName("regions");
    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){ir=true;}
    }
    if(ir==false){valid=false;}

    ir=true;
    var x=document.getElementById("vecums").value;
    if(isNaN(x) || x<1 || x>20 || x%1!=0){ir=false;}
    if(ir==false){vecums=false;}

    ir=false;
    ele=document.getElementsByName("dzimums");
    for(i = 0; i < ele.length; i++) {
      if(ele[i].checked){ir=true;}
    }
    if(ir==false){valid=false;}

    if(valid==true){
      document.getElementById("aizpildi").style.display="none";
      if(vecums==true){
        shownext(0);
        document.getElementById("ivecumu").style.display="none";
      }
      else{
        document.getElementById("ivecumu").style.display="block";
      }
    }
    else{
      document.getElementById("ivecumu").style.display="none";
      document.getElementById("aizpildi").style.display="block";
    }
  }
  function dochange(checkElem) {
    if(checkElem.children[0].checked){
      //console.log("UNCLICKED");
      checkElem.style.backgroundColor= "#D8EFFF";
      checkElem.children[0].checked=false;
    }
    else{
      //console.log("CLICKED");
      checkElem.style.backgroundColor= "#4481F4";
      checkElem.children[0].checked=true;
    }
  }
  function dochangeradio(checkElem) {
    if(checkElem.children[0].checked){
      //console.log("UNCHECKED");
      checkElem.children[0].checked=false;
      checkElem.style.backgroundColor= "#D8EFFF"; //gaišzils
    }
    else{
      //console.log("CHECKED");
      checkElem.children[0].checked=true;
      checkElem.style.backgroundColor= "#4481F4"; //zils
    }
    parElem=checkElem.parentElement;
    var children = parElem.children;
    for (var i = 0; i < children.length; i++) {
        elem = children[i];
        if(checkElem==elem)continue;
        elem.style.backgroundColor= "#D8EFFF"; //gaišzils
        elem.children[0].checked=false;
    }
  }
  function shownext(id){
    document.getElementById("b"+(id+1)).style.display="block";
    document.getElementById("b"+(id)).style.display="none";
  }
