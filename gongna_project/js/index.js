function $G(Read_Id) { return document.getElementById(Read_Id) }

function Effect(ObjectId,parentId){
  if ($G(ObjectId).style.display == 'none'){
  Start(ObjectId,'Opens');
  $G(parentId).innerHTML = "<a onClick=javascript:Effect('"+ObjectId+"','"+parentId+"');>�ر�</a>"
  }else{ 
  Start(ObjectId,'Close');
  $G(parentId).innerHTML = "<a onClick=javascript:Effect('"+ObjectId+"','"+parentId+"');>��</a>"
  }
}

function Start(ObjId,method){
var BoxHeight = $G(ObjId).offsetHeight;         //��ȡ����߶�
var MinHeight = 5;                  //���������С�߶�
var MaxHeight = 130;                 //����������߶�
var BoxAddMax = 1;                  //��������ʼֵ
var Every_Add = 0.15;                //ÿ�εĵ�(��)����  [��ֵԽ���ٶ�Խ��]
var Reduce = (BoxAddMax - Every_Add);
var Add    = (BoxAddMax + Every_Add);

if (method == "Close"){
var Alter_Close = function(){            //����һ�������[�ݼ�]ѭ��
  BoxAddMax /= Reduce;
  BoxHeight -= BoxAddMax;
  if (BoxHeight <= MinHeight){
    $G(ObjId).style.display = "none";
    window.clearInterval(BoxAction);
  }
  else $G(ObjId).style.height = BoxHeight;
}
var BoxAction = window.setInterval(Alter_Close,1);
}

else if (method == "Opens"){
var Alter_Opens = function(){            //����һ�������[����]ѭ��
  BoxAddMax *= Add;
  BoxHeight += BoxAddMax;
  if (BoxHeight >= MaxHeight){
    $G(ObjId).style.height = MaxHeight;
    window.clearInterval(BoxAction);
  }else{
  $G(ObjId).style.display= "block";
  $G(ObjId).style.height = BoxHeight;
  }
}
var BoxAction = window.setInterval(Alter_Opens,1);
}

}
 



