import { Button } from "./button"



type todoListRef={items:{
    id:string,
    text:string
}[],}
 const TodoList:React.FC<todoListRef> = (props) => {
    console.log(props.items)
    return (
        <div>
            <h1>TodoList</h1>
            <div>
                {props.items.map((e)=>(
                    <div key={e.id} className="m-6 bg-slate-50 flex items-center gap-10 p-4 rounded-xl text-red-500" >
                        
                        <p>{e.text}</p>
                    <Button>Delete</Button>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList
