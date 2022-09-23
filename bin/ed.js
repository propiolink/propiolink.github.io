pln1=`<div class="elem full" id="blok"></div>`

if(localStorage.editor ==undefined ){localStorage.editor =pln1}
function ctl(){
 lt=localStorage.editor.length
if(lt>100000){alert('Su archivo es muy grande si escribe 10 letras más se borra todo')}
if(lt>100010){localStorage.editor ='';editorD.innerHTML=""}
 if(localStorage.editor==""){localStorage.editor =pln1;editorD.innerHTML=localStorage.editor}
 sel=document.getElementsByClassName('elem');
 for(var i=0;i<sel.length;i++){
   resul=document.getElementsByClassName('elem')[i];
   document.getElementsByClassName('elem')[i].addEventListener("click", function(){toque(this)});
 }
}

tq=0
function toque(ob){ 
if(tq==0){tq=1; setTimeout("tq=0",500)
  obj=ob;opt.style.display="inline";
  salid=`<div onclick="if(window.confirm('Seguro que desea borrar este elemento no se puede desacer') && obj.id!='blok'){obj.remove(); opt.style.display='none';grd()}" class="btns bgr">Delete</div>   <div onclick="opt.style.display='none';opt.innerHTML='';" class="btns bgv">Done</div>`
  fontS=`<div> Font-Size <input oninput="obj.style.fontSize=this.value;grd()" value="${obj.style.fontSize}"></div>`
  fontW=`<div> Font-weight <input oninput="obj.style.fontWeight=this.value;grd()" value="${obj.style.fontWeight}"></div>`
  textA=`<div> text-align <input oninput="obj.style.textAlign=this.value;grd()" value="${obj.style.textAlign}"></div>`
  paddi=`<div> padding <input oninput="obj.style.padding=this.value;grd()" value="${obj.style.padding}"></div>`
  color=`<div> color <input oninput="obj.style.color=this.value;grd()" type="color"></div>`
  background=`<div> Background <input oninput="obj.style.background=this.value;grd()" type="color"></div>`
  width=`<div> width <input oninput="obj.style.width=this.value;grd()" value="${obj.style.width}"></div>`
  height=`<div> height <input oninput="obj.style.height=this.value;grd()" value="${obj.style.height}"></div>`
  floate=`<div> float <input oninput="obj.style.float=this.value;grd()" value="${obj.style.float}"></div>`
  margin=`<div> margin <input oninput="obj.style.margin=this.value;grd()" value="${obj.style.margin}"></div>`
  
  
 if(ob.tagName=='IMG'){opt.innerHTML=`<input class="free" type="url" oninput="obj.src=this.value;grd()"  value="${obj.src}"> ${width+height+fontS+fontW+textA+paddi+color+background+floate+margin+salid}`}
 if(ob.tagName=='P'){opt.innerHTML=`<textarea rows="3" oninput="obj.innerHTML=this.value;grd()"> ${obj.innerHTML} </textarea> ${width+height+fontS+fontW+textA+paddi+color+background+floate+margin+salid}`}
 if(ob.tagName=='DIV'){opt.innerHTML=`añadir
   <div onclick='adds(0)' class="add">Párrafo</div>
   <div onclick='adds(2)' class="add">Imagen</div>
   <div onclick='adds(1)' class="add">Post1</div>
 `+width+height+paddi+margin+floate+background+salid}
 }
opt.innerHTML+=`<style>#editorD .elem{padding:15px;border:dotted 1px}</style>`
}
  
function grd(){localStorage.editor=editorD.innerHTML}


function adds(nu){
//PÁRRAFO 
  if(nu==0){text=`<p class="elem">tu párrafo</p>`} 
//POST
  if(nu==1){text=`<div class="elem" style="width:96%;padding:10px 5px;margin:2%;border-radius:5px;box-shadow:0px 0px 10px #000;"><p style="font-weight:bolder;font-size:1.6em" class="elem">tu título</p><p style="" class="elem">tu párrafo</p></div>`} 
//POST
  if(nu==2){text=`<img src="" class="elem" style="width:100%;height:100%;float:left">`} 

obj.innerHTML+=text;grd();opt.style.display="none"
ctl()}




  function viewCode(){opt.style.display="none";
   editorD.innerHTML=`<textarea id="edite" oninput="localStorage.editor=this.value" class="full editor">${localStorage.editor}</textarea>` }
  function usar(){
  if(localStorage.id!=0){copyTo();openPage(`https://quintadb.com/apps/ddPsyqytvcROk-fKOxW5vX/dtypes/${localStorage.id}/edit?entity_id=cmWPT4mSjaxik9amkih8oz?&overal_dtypes_size=1&widget=true`)}
   else{openPage(`https://quintadb.com/widgets/ddPsyqytvcROk-fKOxW5vX/cmWPT4mSjaxik9amkih8oz?0=${localStorage.user}&1=${localStorage.clave}&2=${localStorage.phone}&3=${encodeURIComponent(localStorage.editor)}`); localStorage.us=0; novo=1;}
  }
function copyTo(){ 
var content = document.getElementById('edite'); 
    content.select();
document.execCommand('copy');
 alert("Texto copiado peguelo en la plantilla html");
}



/*PLANTILLAS */
  function subir(ob){
 if(ob.type=='text/plain'){ 
    var reader = new FileReader();
    reader.onload = (function(theFile) {
       return function(e) { 
       url=[e.target.result];
       editorD.innerHTML=url;
       grd(); ctl();
  }})(ob); reader.readAsText(ob);}
}
  
