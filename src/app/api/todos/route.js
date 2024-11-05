// API MAKING
const todosData = [
  {
    id: 1,
    todo: "Play cricket",
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
  }
]

export async function GET(request){
    return Response.json({
        data: todosData,
        msg: "Data fetched successfully"
    })
}
// SUMMARY: hamny upar data banake store kia hai then GET ki request main Response.json main jahan data store kia hai uske name se data lelia or message bhejdia.