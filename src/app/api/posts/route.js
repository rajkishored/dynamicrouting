


let posts=[
    {   id:1,title:"moon",content:"Smaller than the sizer compared to Earth,But stilled loved by many"}
   ,{   id:2,title:"earth",content:"Single but stile shines"}   
   ,{   id:3,title:"moon",content:"Smaller than the sizer compared to Earth,But stilled loved by many"}
   ,{   id:4,title:"earth",content:"Single but stile shines"}   
   ,{   id:5,title:"moon",content:"Smaller than the sizer compared to Earth,But stilled loved by many"}
   ,{   id:6,title:"earth",content:"Single but stile shines"}   
  , {   id:7,title:"moon",content:"Smaller than the sizer compared to Earth,But stilled loved by many"}
   ,{   id:8,title:"earth",content:"Single but stile shines"}   
  , {   id:9,title:"moon",content:"Smaller than the sizer compared to Earth,But stilled loved by many"}
   ,{   id:10,title:"earth",content:"Single but stile shines"}   
]


export async function GET(){
    return new Response(JSON.stringify(posts),{
        status:200,
        headers:{'Content-Type':'application/json'}
    })
}

export async function POST(request){

let {title,content}=await request.json();
// console.log(title);

const newp={id:posts.length + 1,title,content}
console.log(newp);
posts.push(newp);


 return new Response(JSON.stringify( posts)
 ,{
   status:201,
   header:{'Content-Type':'application/json'}
 })

 
}
