import React, {useState} from 'react';


const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('');

    const onTermSubmit = e => {
        e.preventDefault();
        onSubmit(term);
    }

    const onInputChange = e => {
        setTerm(e.target.value);
    }

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onTermSubmit} className="ui form">
                <div className="field">
                    <label>Search Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
    
}


// class SearchBar extends React.Component {

//     state = {term: ''}

//     onSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state.term);
//     }

//     onInputChange = e => {
//         this.setState({ term: e.target.value});
//     }

//     render () {
//         return (
//             <div className="ui segment search-bar">
//                 <form onSubmit={this.onSubmit} className="ui form">
//                     <div className="field">
//                         <label>Search Video</label>
//                         <input
//                             type="text"
//                             value={this.state.term}
//                             onChange={this.onInputChange}
//                         />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default SearchBar;