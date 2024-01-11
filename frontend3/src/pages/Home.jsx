import React, { useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  
  const getFetch =  async ()=>{
   
      await fetch("http://localhost:8080/")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
 
    
  }
  useEffect(() => {
     getFetch()
  }, [])
  

  const data = [
    {
      image:
        "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg",
      caption: "Excellent bouquets for you",
    },
    {
      image:
        "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg",
      caption: "Excellent bouquets for you",
    },
    {
      image:
        "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg",
      caption: "Excellent bouquets for you",
    },
  ];

  const captionStyle = {
    fontSize: "40px",
    fontWeight: "400",
    textShadow: "none",
    color: "#1b745e",
    fontStyle: "italic",
  };

  const deleteItem = async (id)=>{
   await fetch(`http://localhost:8080/${id}`,{ method:'DELETE' })
   await getFetch()
  }
  return (
    <>
      <section id="slider">
        <Carousel
          data={data}
          time={2000}
          captionStyle={captionStyle}
          width="100vw"
          height="80vh"
          captionPosition="center"
          automatic={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
        />
      </section>
      <section id="our-mission">
        <div className="container">
          <div className="txt">
            <div className="content">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
                dicunt an, ea civibus.
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="image">
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" />
          </div>
        </div>
      </section>
      <section id="pricing">
        <div className="header">
          <i>
            <p>Devoted to wonderful beauty</p>
          </i>
          <h1>Flowers Pricing</h1>
        </div>
        <div className="products">
          {products &&
            products.map((x) => (
              <div className="card">
              
                  <button onClick={()=>deleteItem(x._id)}> 
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <div className="add-basket">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <Link to={`/detail/${x._id}`}>  <div className="details">
                  <i class="fa-solid fa-eye"></i>
                  </div></Link>
                
              

                <img src={x.image} />
                <p>{x.name}</p>
                <p>${x.price}</p>
              </div>
            ))}
        </div>
        <div className="add">
          <Link to={"/add"}>
            <button>Add product</button>
          </Link>
        </div>
        <div className="header">
          <i>
            <p>Devoted to wonderful beauty</p>
          </i>
          <h1>Events  Pricing</h1>
        </div>
        <div className="cards">
          <div className="sub-card">
            <p><span>$16</span> per table</p>
            <p>Birthday Events</p>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop Now</button>

          </div>
          <div className="sub-card">
            <p><span>$16</span> per table</p>
            <p>Birthday Events</p>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop Now</button>

          </div>
          <div className="sub-card">
            <p><span>$16</span> per table</p>
            <p>Birthday Events</p>
            <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
            <button>Shop Now</button>

          </div>
        </div>

      </section>
    </>
  );
}

export default Home;
