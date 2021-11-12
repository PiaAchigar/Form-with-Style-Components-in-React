import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Botonera,Vista } from '../../Elements/retos/StylesRetos'
import { ProfilePreview } from '../../Elements/retos/StylesProfilePreview'
import ProfilePreviewComponent from './ProfilePreviewComponent'
import ForoRetosComponent from './ForoRetos'
import {ForoView} from '../../Elements/retos/StylesForoRetos'
import { useState } from 'react/cjs/react.development'
import Feed from './Feed'
import axios from 'axios'

const RetosComponent = () => {

    useEffect(()=>{
        getPosts()
    },[])

    const [post, setPost] = useState()

    
    const getPosts = () =>{
        
        axios.get("https://my-json-server.typicode.com/danacunam/json/posts")
            .then((res)=>setPost(res.data))
            .catch((err)=>console.log(err))       
        }
        
  





    return (
    <>
        <Botonera>
                <div>
                <Link to='/form'>Quiero <span>emprender</span></Link> 
                
                <div>
                        <Link to='/retos'>
                            Crear un <span>Reto</span> 
                        </Link>
                    </div>
                </div>
        </Botonera>

         <Vista > 
            <ProfilePreview>
                <ProfilePreviewComponent />
            </ProfilePreview>
            
            <ForoView>
                <ForoRetosComponent />
               
                { !post ? console.log('Cargando...') : post.map((post)=>{
                 return <Feed url={post.id} titulo={post.nombre} desc={post.descripcion} posted={post.posted} img={post.logo}></Feed>
                 })
                 } 
               
            </ForoView>
         
         
             
         
         
         
         </Vista> 
    </> 
    )
}

export default RetosComponent
