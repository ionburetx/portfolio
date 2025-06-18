import { render, screen } from '@testing-library/react'
import PhotographyCard from '../components/ProjectsSection/Photography/PhotographyCard'

describe('PhotographyCard', () => {
  const image = '/test-image.jpg'
  const title = 'Naturaleza'

  it('renderiza correctamente la imagen con src y alt', () => {
    render(<PhotographyCard image={image} title={title} />)

    const img = screen.getByRole('img', { name: title })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', image)
    expect(img).toHaveAttribute('alt', title)
  })

  it('muestra el título correctamente centrado', () => {
    render(<PhotographyCard image={image} title={title} />)

    const heading = screen.getByRole('heading', { name: title })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(title)
  })

  it('tiene clases de estilo esperadas', () => {
    render(<PhotographyCard image={image} title={title} />)

    const card = screen.getByRole('img', { name: title }).closest('div')
    expect(card).toHaveClass('photography-card')
  })
})
