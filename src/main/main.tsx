import {getDocs, collection, doc} from "firebase/firestore";
import { dbData} from "../config/firebase"
import {useEffect, useState} from "react"
import { Post } from "./post";

export interface post {
id: string;
userId: string;
title: string;
username: string;
description: string;

}

export const Main = () => {
    const [postsList, setPostsList] = useState<post[] | null>(null);
    const postsRef = collection(dbData,"posts");

    const getPosts = async() => {
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((docs) => ({ ...docs.data(),id: docs.id}))as post[]);
    }

    useEffect(()=> {
        getPosts()
    }, [])
    return <div>{postsList?.map((post) => <Post post={post}/>)}</div>;
}

