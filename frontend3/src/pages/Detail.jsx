import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
  const [detailed,setDetailed ] = useState([])


  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/${id}`)
    .then(response=>response.json())
    .then(data=>{
      setDetailed(data)

    })
     
  }, [])
  return (
    <>
   
    <section id='detail'>

      <div className="container-detail">
        <div className="card-detail">
          <img src={detailed.image} alt="salam men elcanam" />
          <p>{detailed.name}</p>
          <p>${detailed.price}</p>
        </div>

      </div>


    </section>



    </>
   
    

  )
}

export default Detail