document.write("91. to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers"+"<br>");
function test91(arr,s){
    var x=0;
    var r=0;
    for(let i=0;i<s-1;i++){
        x=x+arr[i];
    }
    for(let i=s-1;i<arr.length;i++){
        x=x+arr[i];
        if(x>r){
            r=x;
        }
        x=x-arr[i-s+1];
    }
    return r;
    
}
document.write("The array :[1,2,3,14,5], the number :2 ,Ans :"+ test91([1,2,3,14,5],2)+"<br><br>");