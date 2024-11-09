// API MAKING
const todosData = [
  {
    id: 1,
    todo: "HASSAN KING OF DEVELOPMENT  👑⚡💻",
    isCompleted: false
  },
  {
    id: 2,
    todo: "Read a book",
    isCompleted: false
  },
  {
    id: 3,
    todo: "Play game",
    isCompleted: false
  },
  {
    id: 4,
    todo: "Go to market",
    isCompleted: false
  },
  {
    id: 5,
    todo: "sleep",
    isCompleted: false
  },
  {
    id: 6,
    todo: "Play game",
    isCompleted: false
  },
]

export async function GET(request){
    return Response.json({
        data: todosData,
        msg: "Data Fetched Successfully",
    });
}
// SUMMARY: hamny upar data banake store kia hai then GET ki request main Response.json main jahan data store kia hai uske name se data lelia or message bhejdia.


export async function POST(request){
  const data = await request.json()
  console.log("DATA FROM FRONT END TO BACKEND", data);
  
  const obj = {
    ...data,
    isComplete: false,
    id: todosData.length + 1
  }
  todosData.push(obj)

  return Response.json({
      data: todosData,
      msg: "Todo Added Successfully",
  });
}

export async function PUT(request){
  const data = await request.json();
  console.log("update data in backend====>", data)
  
  const todoIndex = todosData.findIndex((todo) => todo.id == data.id);   //means hamary data ki id equal ho user ke data ki id se.
  todosData[todoIndex] = data;  //means wo data daldo jo user ne dia hai.

  return Response.json({
      data: todosData,
      msg: "Todo Updated Successfully",
  });
}



















