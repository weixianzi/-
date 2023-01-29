let arr = [
    {
        id: 1,
        name: 'lf',
        title: "李克",
        children: [
            {
                id: 3,
                pid: 1,
                title: "张天鸣"
            },
            {
                id: 4,
                pid: 1,
                title: "时天",
                children: [
                    {
                        id: 5,
                        pid: 4,
                        title: "威整天"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "lk",
        title: "陆飞"
    }
]




let treeToFlat = (targetArr) => {
    let newArr = []
    function toFlat(target){
        target.forEach(item=>{
            if(item.children){
                toFlat(item.children)
            }
            newArr.push({
                id:item.id,
                title:item.title,
                pid:item.pid??""
            })
        })
    }
    toFlat(targetArr)
    return newArr
 }

 let flatToTree = (target) =>{
    let newArr = []
    target.forEach(item=>{
       let parent = target.find(fat=>item.pid===fat.id)
       if(parent){
        if(!parent.children){
            parent.children = []
        }
        parent.children.push(item)
       }else{
        newArr.push(item)
       }
    })
    return newArr
 }
 
 export default {
    treeToFlat,
    flatToTree
 }