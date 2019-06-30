import React from 'react';




class File extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }
  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

//   onClickHandler = () => {
//     console.log("app.js 24");
//     const data = new FormData() 
//     data.append('file', this.state.selectedFile)
//     console.log("27 app");
//     axios.post("http://localhost:4000/upload", data, { // receive two parameter endpoint url ,form data 
//       })
//       .then(res => { // then print response status
//         console.log(res.statusText)
//       })
// }
  render(){
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input type="file" name="file" onChange={this.onChangeHandler}/>
              {/* <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> */}
            </div>
        </div>
      </div>
    </div>
  )};
}


export default File;