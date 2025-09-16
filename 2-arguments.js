const arg= process.argv.slice(2);
const numberOfArgumet= arg.length;

if(numberOfArgumet===0){
    console.log('no argumet found')
}
else if(numberOfArgumet===1){
    console.log('argument found')
}
else{
    console.log('there is an argument')
}