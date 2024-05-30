import { useEffect, useState } from 'react';
import './removecourseitem.css';
import axios from 'axios';
import { useParams } from 'react-router';

const Removecourseitem =()=>{
    const [isOpen, setIsOpen] = useState(1);
    const [coursecomponents, setCoursecomponents] = useState();
    const [checked, setChecked] = useState([]);
    const {id} = useParams();
    console.log("Remove item id: ", id);
    useEffect(()=>{
        const fetchCourses=async()=>{
            const res = await axios.get(`http://localhost:4000/Coursecomponent/course/${id}`);
            setCoursecomponents(res.data);
        }
        fetchCourses();
    },[])

    const handleClose =()=>{
        setIsOpen(0);
    }
    const handleChnage=(e)=>{
        setChecked([...checked,e]);
    }
    const deleteCoursecomponent=async(coursecomponentid)=>{
        const res = await axios.delete(`http://localhost:4000/Coursecomponent/${coursecomponentid}`);
        console.log("response: ", res);
    }
    const handleDelete=()=>{
        console.log(JSON.stringify(checked));
        checked.map(com=>{
            deleteCoursecomponent(com);
        })
    }

    if(isOpen){
        return(
            <div className="removecourseitemcontainer">
                <div className='removecourseitem-button'>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className='removecourseitem'>
                    <div className="removecourseitem-select">
                        <h1>Select items</h1>
                        <div className='removecourseitem-select-items'>
                                {coursecomponents?(coursecomponents.map(item=>{
                                    return (
                                    <label>
                                        <input 
                                                type='checkbox' 
                                                name='item' 
                                                value={item._id}
                                                onChange={()=>handleChnage(item._id)}
                                        />
                                        {item.name}
                                    </label>
                                )
                                })):<h1>Hi</h1>}


                        </div>
                    </div>
                    <button onClick={handleDelete}>Remove</button>
                </div>
            </div>
        );
    }
}

export default Removecourseitem;