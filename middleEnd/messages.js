
 import axios from 'axios'

// Create an empty array
const keyvalue=new Map([["dl",'a'],
                       ["lddd",'b'],
                       ["ldld",'c'],
                       ["ldd",'d'],
                       ["d",'e'],
                       ["ddld",'f'],
                       ["lld",'g'],
                       ["dddd",'h'],
                       ["dd",'i'],
                       ["dlll",'j'],
                       ["ldl",'k'],
                       ["dldd",'l'],
                       ["ll",'m'],
                       ["ld",'n'],
                       ["lll",'o'],
                       ["dlld",'p'],
                       ["lldl",'q'],
                       ["dld",'r'],
                       ["ddd",'s'],
                       ["l",'t'],
                       ["ddl",'u'],
                       ["dddl",'v'],
                       ["dll",'w'],
                       ["lddl",'x'],
                       ["ldll",'y'],
                       ["lldd",'z'],
                       ["s",' ']]);      
                       const arr=[];      
  async function getData(id)
{
    try {
        const response = await axios.get(`http://localhost:8000/messages/get/${id}`);
        const jsonObject= response.data;
   
for(var i=0;i<jsonObject.length;i++)
{
    var obj=jsonObject[i];
    var temp=obj.text.split(' ');
    var s="";
    arr[i]=obj;
    for(var j=0;j<temp.length;j++)
    {
      s+=keyvalue.get(temp[j])||' ';
    }
    arr[i].text=s;
}
console.log(jsonObject);
for(var i=0;i<jsonObject.length;i++)
{
    console.log(arr[i]);
}

 }
catch(error){
    console.error("Error fetching data",error);
    throw error;
}}

export default {getData,arr};
