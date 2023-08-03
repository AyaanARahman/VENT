import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setisPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setisPending(true);

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setisPending(false);
        //history is used to go back and forth pages
        //history.go(-1);
        history.push('/');
    })

  }

  return (
    <div className="create">
      <h2>Vent Out Here</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author: 
        <p>Pssst... you can make it anonoymous...</p>
        </label>
        
        <input
            type= 'text'
            required
            value= {author}
            onChange= {(e) => setAuthor(e.target.value)}
        />
        { !isPending && <button>Add Vent</button> }
        { isPending && <button disabled>Adding Vent...</button> }
      </form>
    </div>
  );
}

/* For dropdown menu of creator names
<select
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
>
<option value="mario">mario</option>
<option value="yoshi">yoshi</option>

</select>
*/
 
export default Create;