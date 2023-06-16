import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          text: '',
          charCount: 0,
          wordCount: 0
        };
        this.handleChange = this.handleChange.bind(this);
      }
  
    handleChange(value) {
        const textWithoutHTML = value.replace(/<[^>]*>?/gm, '');

        const words = textWithoutHTML.trim().split(/\s+/).filter(word => word.length > 0);
        this.setState({
          text: value,
          charCount: textWithoutHTML.length,
          wordCount: words.length
        });
    }
  
    render() {
      return (
        <div className='editor-block'>
            <ReactQuill placeholder="Type or paste (⌘+V) something here." value={this.state.text} onChange={this.handleChange} />
            <div className='charCount'>
                <p>{this.state.charCount} characters, {this.state.wordCount} words</p>
            </div>
        </div>
        
      );
    }
  }

  export default Editor;