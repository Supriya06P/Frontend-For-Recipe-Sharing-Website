import React from 'react'
import Cards from '../componenets/Cards'
import './Recipe.css'

const MyRecipe = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/myrecipe', { email, password });
      localStorage.setItem('username', res.data.username);
      setIsLoggedIn(true);
      navigate('/myrecipe');
    } catch (error) {
      alert('Invalid Credentials');
    }
  };

  return (

    <Container className="cards-container">
      <Row className="g-4">
        <Col md={4} sm={6} xs={12}>
          <Cards
            title="Product 1"
            image={slide4}
            description="This is a short description of the product."
            buttonText="Buy Now"
          />
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Cards
            title="Product 2"
            image={slide4}
            description="This is a short description of the product."
            buttonText="Buy Now"
          />
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Cards
            title="Product 3"
            image={slide4}
            description="This is a short description of the product."
            buttonText="Buy Now"
          />
        </Col>
      </Row>
    </Container>

  )
}

export default MyRecipe;