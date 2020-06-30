import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost}) => {
    const[formData, setFormData] = useState({
        issues: '',
        title: '',
        desc: ''
    });

    const { issues, title, desc} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return (
        <div class="post-form">
            
                <form class="form my-1" onSubmit={e => {
                    e.preventDefault();
                    addPost({ issues, title, desc });
                }}>

                <small>* = required field</small><br/>

                <h4> Type of Problem </h4>
                <div className="form-group">
                    <select name="issues" value={issues} onChange={e => onChange(e)}>
                        <option value="0">* Select Encountered Issues </option>
                        <option value="Hardware Issue">Hardware Issue</option>
                        <option value="Software Issue">Software Issue</option>
                        <option value="Customer Service Issue">Customer Service Issue</option>
                        <option value="Payment Issue">Payment Issue</option>
                        <option value="Other">Other</option>
            </select>
            </div>

                <h4> Title </h4>
                <div class="form-group">
                <input type="text" placeholder="*Title" name="title" value={title} required onChange={e => onChange(e)} />
                </div><br/>

                <h4> Description </h4>
                <div class="form-group">
                <textarea 
                    name="desc" 
                    cols="30" 
                    rows="8"
                    placeholder="Describe your problem here..." 
                    value={desc} required onChange={e => onChange(e)}>
                    </textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Submit"/>
                </form>
      </div>
    )
}


PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm);
