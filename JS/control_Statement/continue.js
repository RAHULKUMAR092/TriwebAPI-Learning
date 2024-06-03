/*
for(initialization; condition; incrementation){
    if(condition2){
        continue;
    }
    for block code here
}
*/

for(var i = 1; i<=10; i++){
    if(i==6){
        continue;// skip the current iteration ; but jump to next
    }
    console.log(i);
}

