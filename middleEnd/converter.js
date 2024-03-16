const keyvalue=new Map([['a',"dl"],
                       ['b',"lddd"],
                       ['c',"ldld"],
                       ['d',"ldd"],
                       ['e',"d"],
                       ['f',"ddld"],
                       ['g',"lld"],
                       ['h',"dddd"],
                       ['i',"dd"],
                       ['j',"dlll"],
                       ['k',"ldl"],
                       ['l',"dldd"],
                       ['m',"ll"],
                       ['n',"ld"],
                       ['o',"lll"],
                       ['p',"dlld"],
                       ['q',"lldl"],
                       ['r',"dld"],
                       ['s',"ddd"],
                       ['t',"l"],
                       ['u',"ddl"],
                       ['v',"dddl"],
                       ['w',"dll"],
                       ['x',"lddl"],
                       ['y',"ldll"],
                       ['z',"lldd"],
                       [' ',"s"]]);
const changed="";
const converter=(val)=>{
{
    
  for(var i=0;i<val.length;i++)
  {
   changed+=keyvalue.get(val[i]);
  }
  console.log(changed);
}
}
export default converter;