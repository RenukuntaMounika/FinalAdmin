import React from "react"
import { Button, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
class Qform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 'easy',
            qname: '',
            desc: '',
            imgfile:null,
            ptemp: '',
            jtemp: '',
            sfile: null,
            stifile: null,
            stofile: null,
            tifile: null,
            tofile: null
        }
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        var data = new FormData()
        data.append('level', this.state.level)
        data.append('qname', this.state.qname)
        data.append('desc', this.state.desc)
        data.append('ptemp', this.state.ptemp)
        data.append('jtemp', this.state.jtemp)
        data.append('imgfile',this.state.imgfile,'image')
        data.append('sfile', this.state.sfile, 'solution')
        data.append('stifile', this.state.stifile, 'sample_input')
        data.append('stofile', this.state.stofile, 'sample_output')
        data.append('tifile', this.state.tifile, 'input')
        data.append('tofile', this.state.tofile, 'output')
        axios.post("http://localhost:4000/upload", data, {
        })
            .then(res => {
                console.log(res.statusText)
            })
    }
    render() {
        return (

            <Form>
                <Form.Group controlId="form">
                    <Form.Label>Level</Form.Label>
                    <Form.Control as="select" name="level" onChange={event => this.handleChange(event)} >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Difficult</option>
                    </Form.Control><br />
                    <Form.Label>Question Name :</Form.Label>
                    <Form.Control type="text" placeholder="Enter Question Name" name="qname" onChange={event => this.handleChange(event)} /><br />
                    <Form.Label>Tags :</Form.Label>
                    <br />
                    <Form.Label>Description :</Form.Label>
                    <Form.Control as="textarea" rows="3" name="desc" placeholder="Question Description" onChange={event => this.handleChange(event)} /><br />
                    <Form.Label>Image File :</Form.Label><br />
                    <input type="file" name="imgfile" onChange={this.onChangeHandler} /><br />
                    <Form.Label>Template :</Form.Label>
                    <Form.Control as="textarea" rows="8" placeholder="Enter python template" name="ptemp" onChange={event => this.handleChange(event)} /><br />
                    <Form.Control as="textarea" rows="8" placeholder="Enter java template" name="jtemp" onChange={event => this.handleChange(event)} />
                    <Form.Label>Solution File :</Form.Label><br />
                    <input type="file" name="sfile" onChange={this.onChangeHandler} /><br /><br />
                    <Form.Label>Sample testcases Input File :</Form.Label><br />
                    <input type="file" name="stifile" onChange={this.onChangeHandler} /><br /><br />
                    <Form.Label>Sample testcases Output File :</Form.Label><br />
                    <input type="file" name="stofile" onChange={this.onChangeHandler} /><br /><br />
                    <Form.Label>Testcases Input File :</Form.Label><br />
                    <input type="file" name="tifile" onChange={this.onChangeHandler} /><br /><br />
                    <Form.Label>Testcases Output File :</Form.Label><br />
                    <input type="file" name="tofile" onChange={this.onChangeHandler} /><br /><br />
                </Form.Group><center>
                    <Button variant="success" type="button" onClick={this.onClickHandler}>
                        Submit
  </Button></center>
            </Form>

        )
    }

}

export default Qform