import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Summary from './Summary'
import './Upload.css'

const HOST = 'http://127.0.0.1:5000'
const SUB_ENDPOINT = 'predict'

class Upload extends React.Component {
    state={
        file: null,
        preview: null,
        result: [],
    }
    fetch = (formData) => {
        console.log("fetch")
        this.setState({
            result: []
        })
        axios.post(`${HOST}/${SUB_ENDPOINT}`, formData, {'Content-Type': 'multipart/form-data' }) 
            .then(response => {
            if (response.status === 200) {
                this.setState({
                    result: response.data.results,
                    preview: `data:image/png;base64,${response.data.image}`
                    // preview: response.data.file
                })
            } else {
              console.log('internal server error')
            }
        })
    }
    submitModel = () =>{
        const formData = new FormData()
        formData.append('file', this.state.file)
        this.fetch(formData)
    }
    onChange = (event) => {
        this.setState({
            file: event.target.files[0],
            preview: event.target.files.length ? URL.createObjectURL(event.target.files[0]) : null,
            // preview: URL.createObjectURL(event.target.files[0]),
            result: [],
        })
        console.log(typeof(this.state.preview))
    }
    render(){
        return(
            <div>
            <Grid container spacing={1} justify="center">
                <Grid item xs={6}>
                    <div className="upload">
                        <img
                            src={this.state.preview}
                            style={{
                                width: 490, height: 350
                            }} 
                        />
                        <div className="input">
                            <input
                                id="result"
                                type="file"
                                accept="image/*"
                                onChange={this.onChange}
                            ></input>
                            <Button
                                onClick={this.submitModel}
                                disabled={this.state.file === null}
                                variant="contained"
                                color="primary"
                                size="large"
                                aria-label="Full-width contained primary button group"
                            >
                                Submit
                            </Button>
                        </div>
                        {/* {
                            this.state.result ? <img src={`data:image/jpeg;base64,${this.state.preview}`} /> : null
                        } */}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="summary">
                        <Summary data={this.state.result} />
                    </div>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default Upload