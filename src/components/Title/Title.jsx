import './Title.css';

/**
 * Component which displays page title
 * 
 * @param {String} text
 *  
 * @returns title component
 */
function Title({text}) {
    return (
        <div className="title-container">
            <h1 className="title">{text}</h1>
            <hr />
        </div>
    )
}

export default Title;