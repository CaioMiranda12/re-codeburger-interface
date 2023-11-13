import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/ProductImg.svg'
import api from '../../services/api'
import { Container, ProductImg, CategoryMenu, ContainerButton } from './syles'

function Home() {
  const [categories, setCategories] = useState([])
  const [activeButton, setActiveButton] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo dos produtos" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <ContainerButton
              key={category.id}
              onClick={() => setActiveButton(category.id)}
              isActived={activeButton === category.id}
            >
              {category.name}
            </ContainerButton>
          ))}
      </CategoryMenu>
    </Container>
  )
}

export default Home
