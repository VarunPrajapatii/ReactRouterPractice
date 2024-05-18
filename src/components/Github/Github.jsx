import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    
    const data = useLoaderData();
  
    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //     fetch("http://api.github.com/users/VarunPrajapatii")
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data);
    //     })

    // }, [])


    return (
      <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
          Github followers: {data.followers}
          <img src={data.avatar_url} alt='Github Picture' width={300}/>
        </div>
      </>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch("http://api.github.com/users/VarunPrajapatii")
  return response.json();
}