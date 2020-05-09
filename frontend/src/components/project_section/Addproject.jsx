import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Addproject(props) {
    const [isexpanded,setIsexpanded] = useState(false);
    const [form, Setform] = useState({
    title: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    Setform(prevform => {
      return {
        ...prevform,
        [name]: value
      };
    });
  }

  function Submit(event) {
    Setform({
      title: "",
      description: ""
    });
    setIsexpanded(false);
    props.add(form)
    event.preventDefault();
  }
  function expand(){
      setIsexpanded(true);
  }

  return (
    <div>
      <form className="add-project">
        {isexpanded && <input
          name="title"
          onChange={handleChange}
          value={form.title}
          placeholder="Project name"
        />}
        <textarea
          onClick = {expand}
          name="description"
          onChange={handleChange}
          value={form.description}
          placeholder={isexpanded? "Project description" : "Add a project..."}
          rows={isexpanded ? 3 : 1}
        />
        <Zoom in ={isexpanded?true:false}>
            <Fab onClick={Submit}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Addproject;
