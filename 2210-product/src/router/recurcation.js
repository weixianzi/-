let getUserControl = (systemControl,userControl)=>{
    let userPermission = []
    systemControl.forEach(item=>{
        userControl.forEach(mine=>{
            if(mine.meta.title===item.title){
                if(item.children&&item.children.length){
                   mine.children = getUserControl(item.children,mine.children)
                }
                userPermission.push(mine)
            }
        })
    })
    return userPermission
}

export default getUserControl