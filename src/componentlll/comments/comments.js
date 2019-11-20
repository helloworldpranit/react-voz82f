import React from 'react'
import ListComments from './listComments';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClickClose = this.onClickClose.bind(this);

        this.state = {
            message: '',
            formDa: [{ Title : "demo", Body : "demo"}],
            newbook: {
                key: Date.now(),
                Title: "",
                Body: ""
            }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({}, this.sendFormData);
    }

    sendFormData() {

        this.state.formDa.push({
            Title: this.refs.Title.value,
            Body: this.refs.Body.value
        })
        this.setState({
            formDa: this.state.formDa
        });
    }
    onClickClose(item){
        const formDa = this.state.formDa.filter(i => i.Key !== item.Key)
        this.setState({formDa : formDa})
      }

    render() {
        return (
            <>
                <ListComments formDa={this.state.formDa} onClickClose={this.onClickClose} />
                <div className="col-md-8">
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" ref="Title" className="form-control" id="title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="author">Body:</label>
                            <textarea className="form-control" id="author" rows="3" ref="Body"></textarea>
                        </div>
                        <div>
                        <input type="submit" className="btn btn-primary pull-right" value="Save" />
                        </div>
                    </form>
                </div>
        </>
        )
    }
}

export default Comments
