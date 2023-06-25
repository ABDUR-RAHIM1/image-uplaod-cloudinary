import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [img , setImg] = useState()
  const hadleChange = (e) =>{
    setImg(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "demo-image");
    formData.append("cloud_name", "dsrkrb3jy");
  
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsrkrb3jy/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
  
    const data = await res.json();
    console.log(data.secure_url);
  };
  
  console.log(img)
  return (
    <div className="App">
      <br /><br /><br />
        <form onSubmit={handleSubmit}>
           <input onChange={hadleChange} type="file" name="file" /> <br /> <br />
           <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
