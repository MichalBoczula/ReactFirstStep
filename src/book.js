export const Book = function(props)
{
    const {image, title, author, desc} = props.book;
    return (
        <div className='book'>
            <p className = 'image'>{image}</p>
            <h2 className = 'title'>{title}</h2>
            <h4 className = 'authorName'>{author}</h4>
            <p className = 'description'>{desc}</p>
        </div>);
}