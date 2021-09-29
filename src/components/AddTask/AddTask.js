import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {isEmpty} from 'lodash';
import {ReactComponent as Send} from '../../assets/send.svg';
import firebase from '../../utils/firebase';
import 'firebase/firestore';

import './AddTask.scss';




// eslint-disable-next-line
const db = firebase.firestore(firebase);

const AddTask = () => {
    const [task, setTask] = useState("");



    const onSubmit = e => {
        e.preventDefault(); 
      
        if(!isEmpty(task)){
        //   db.collection("tasks").add({
        //       name: task,
        //       complete: false
        //   }).then(() => {
        //       console.log("Tarea creada");
        //   })
        }
    }
    return (
        <Form onSubmit={onSubmit} className="add-task">

            <input 
            type="text" 
            placeholder="Nueva Tarea..."
            onChange={e => setTask(e.target.value)}
            />
            <Button type="submit">
                <Send/>
            </Button>

        </Form>
    )
}

export default AddTask
