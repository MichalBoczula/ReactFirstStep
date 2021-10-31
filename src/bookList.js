import {booksData} from './bookDataSeed.js'
import {Book} from './book.js'

export const BookList = function()
{
    return (
        <section className='bookList'>
        {
            booksData.map(book =>
                {
                    return <Book key ={book.id} book= {book}></Book>;
                })
        }
        </section>);
}