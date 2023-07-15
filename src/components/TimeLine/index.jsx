import { useState, useEffect } from "react"
import BoxPost from "../BoxPost";
import { GanttChartSquare, Loader2 } from "lucide-react";
import axios from "axios"
import './style.css';

export default function TimeLine() {

    function getDataAPI() {
        
          axios.get(import.meta.env.VITE_URL_API)
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.error('Erro ao buscar os posts:', error);
          });
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getDataAPI();
      
        const intervalo = setInterval(() => {
          getDataAPI();
        }, 5000);
    
        return () => {
          clearInterval(intervalo);
        };
    }, []);
    
    return (
        <section className="conteinerTimeLine">
            <h1 className="titleTimeLine" style={{ color: 'white', fontSize: '30px' }}><GanttChartSquare />Posts</h1>

            {
                posts.length === 0 && <Loader2 className="loading" color="white" />
            }

            {posts.map(post => 
                <BoxPost key={post.message} author={post.author} message={post.message} date={post.date} />
            )}

        </section>
    )
}