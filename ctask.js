// import { Button, Input, Modal,Text, Textarea } from "@nextui-org/react";
// import { useEffect, useState } from "react";
// import './App.css';


// export default function AddTask({setList}){
//     const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [open,setOpen] = useState(false);

//   const TitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const DescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const addTask = () => {
//     if (title.trim() === '' || description.trim() === '') {
//       return;
//     }

//     const newTask = {
//       ts: new Date().toLocaleString(),
//       title: title,
//       desc: description,
//       is_done: false,
//     };

//     setList((preList)=>([...preList, newTask]));
//     setTitle('');
//     setDescription('');
//     setOpen(false);
//   };
//   return (<>
//     <Button onPress={()=>setOpen(true)}>Add Task</Button>
//     <br />
//     <Modal blur open={open} onClose={()=>{setOpen(false)}} closeButton>
//         <Modal.Header>
//             <Text b size={18}>Add New Task</Text>
//         </Modal.Header>
//         <Modal.Body>
//         <Input type="text" id="title" value={title} onChange={TitleChange} label="Title" />

//         <Textarea
//           label="Description"
//           type="text"
//           id="description"
//           value={description}
//           onChange={DescriptionChange}
//         />
//         </Modal.Body>
//         <Modal.Footer>

//         <Button auto flat color="error" onPress={()=>setOpen(false)}>
//             Close
//           </Button>

//         <Button auto onClick={addTask}>
//           Add Task
//         </Button>
//         </Modal.Footer>
//       </Modal>
//     </>)

// }