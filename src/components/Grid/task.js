import React, {Component} from "react"; 

export default class Tasks extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskList:[],
            taskName:"",
            type:"classification",
            datasetName:"",
            allDatasets:[],
            users:[],
            names:[]
        }
    }

triggerDelete(task){
        if(window.confirm("Are you sure you want to delete this task?")){

        }
    }

render(){
        return(
            <div className="tasks-wrap">
                <h1 onClick={()=>{
                   this.props.history.push("/taskdetails");
                }}>Your Tasks</h1>
                {
                            this.state.taskList.map((task,index)=>{
                                return(
                                    <div key={e?.persona_id} className="item-card" onClick={()=>{
                                        window.sessionStorage.setItem("task",JSON.stringify(task));
                                        this.props.history.push("/taskdetails/");
                                    }}>
                                        <div className="name">{task.name}</div>
                                        <div className="sub">
                                            <div className="type">Dataset: {task.dateSetName}</div>
                                            <div className="members">{task.userList.length + " participants"}</div>
                                        </div>
                                        <div className="del-wrap" onClick={(e)=>{
                                            e.stopPropagation();
                                            e.preventDefault();
                                            this.triggerDelete(task);
                                        }}>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
             )
    }
}