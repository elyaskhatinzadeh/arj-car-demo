import {useState} from "react";

function ComponentA({props, children}) {

    const [state, setState] = useState("hello1")
    const [state2, setState2] = useState("hello2")

    return <div>
        <h2>AA</h2>
        {children(state, state2)}
    </div>;
}


export default ComponentA;