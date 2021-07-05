import React ,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import StarRatingComponent from 'react-star-rating-component';



const MyVerticallyCenteredModal =(props)=>{
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [Id, setId] = useState('')
  const [Desc, setDesc] = useState('')
  const [Star, setStar] = useState('')
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const changeHandlertitle = e => {
    setId(e.target.value)
 
    };
  const changeHandlerdesc = e => {
      setDesc(e.target.value)
        console.log(Desc) 
      };
      
  const onCreateMovie=()=>{
    props.addMovie({title:Id,img:imgData,bio:Desc,stars:Star})
    }
    
console.log(Star)
    return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add Movie
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <input id="profilePic" type="file" onChange={onChangePicture} />
          
              <div className="previewProfilePic">
                <img style={{width:"192px",height:"284.150px"}} className="playerProfilePic_home_tile" src={imgData} />
              </div>
          
            <div className="fillContentDiv formElement">
              <div className="names formContentElement">
              <Form.Label >Title</Form.Label>
                <Form.Control onChange={changeHandlertitle}
                  value={Id}
                  className="inputRequest "
                  type="text"
                  placeholder="movie title"
                />
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={changeHandlerdesc}  as="textarea" rows={3} 
                  className="inputRequest "
                  type="text"
                  placeholder="description"
                />
              </div>
            </div>
            <StarRatingComponent
              name='star2'
                starCount={5}
                onStarClick={r=>setStar(r)}
                
                />  
            <div className="submitButtonDiv formElement">
              <button  className="submitButton" value="" onClick={onCreateMovie}>Register</button>
              </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

}
export default MyVerticallyCenteredModal;