import Post from "../Post/Post";
import {useEffect, useState} from "react";
import {errorFunc} from "../../common/errorFunc";

export default function Posts () {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        async function fetchData (){
            try {
                const res = await fetch(API_URL);
                const posts = await res.json();
                setPosts(posts);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

  /*  useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }, []);*/

    return (
        <div>
            {errorFunc(error)}
            {
                isLoading
                ? <h2>Loading... </h2>
                : posts.map(post => <Post key={post.id} {...post}/>).slice(0, 5)
            }
        </div>
    )
}