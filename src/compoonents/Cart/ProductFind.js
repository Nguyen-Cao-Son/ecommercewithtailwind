export function ProductFindIndex (arr,productId) 
{ let index
   for(let i = 0 ; i<=arr?.length;i++){
    if(arr[i]?.productId === productId){
        index = i 
    }else{
        continue
    }
   }
    return index
}