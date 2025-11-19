import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createClient } from "pexels";
import Header from './Header.jsx';
import SearchForm from './SearchForm.jsx';
import PhotosGrid from './PhotosGrid.jsx';
import './App.css';

const client = createClient('covfonfcIepyZ0RlVIzF0RQ5AepoMFwgBI3F88KMWxeU9LLiZuGbW7Od');

export default function SnapShotPage() {
  const [photos, setPhotos] = useState([]);
  const [form, setForm] = useState({ input: "" });

  const { query } = useParams();
  const searchTerm = query;
  const navigate = useNavigate();

  function handleChange(e){
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));  
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!form.input) return;
    navigate(`/${form.input}`);
  }

  async function fetchPics(){
      try {
        const result = await client.photos.search({
          query: searchTerm,
          per_page: 12,
        });
        setPhotos(result.photos);
      } catch (err) {
        console.log("Pexel error: ", err);
      }
  }

  useEffect(() => {
    fetchPics();
  }, [searchTerm])

  return (
    <>
    <Header />
    <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} input={form.input}/>

    <div className="Btns">
      <button type="button" className="btn btn-success" onClick={() => navigate("/nature")}>Nature</button>
      <button type="button" className="btn btn-success" onClick={() => navigate("/iceland")}>Iceland</button>
      <button type="button" className="btn btn-success" onClick={() => navigate("/christmas")}>Christmas</button>
      <button type="button" className="btn btn-success" onClick={() => navigate("/dalmatian")}>Dalmatian</button>
    </div>

    <PhotosGrid photos={photos}/>
    </>
  );
}
