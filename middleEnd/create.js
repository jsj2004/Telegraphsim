import {arr} from './messages.js'
function createElement()
{
    //const element=document.getElementById();
    for(var i=0;i<arr.length;i++)
    {
        const create=document.createElement('div');
        create.innerHTML=arr[i].text;
        element.appendChild(create);
    }
}
createElement();