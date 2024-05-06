import { hoc } from "../components";
import { useRender } from "./UseRender";

export const MainData = hoc(useRender, ({data,isLoading})=> {
    
    return (
        <div>
          console.log(data);
          
          {data?.data.map((item:any) =>(
            
            <div>
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
            </div>            
          ))}
        </div>
    )
})