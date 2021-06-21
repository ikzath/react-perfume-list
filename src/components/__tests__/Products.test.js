import { render, screen, cleanup } from "@testing-library/react";
import Products from '../Products/Products';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('should render products component', ()=>{
    render(<Products />);
    const productElement = screen.getByTestId('product-1');
    expect(productElement).toBeInTheDocument();
})


it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Products />, div);
})


it('renders button correctly', ()=>{
    render(<Products />);
    const productButton = screen.getByTestId('product-1');
    expect(productButton).toBeInTheDocument();
})

it('matches snapshot', ()=> {
    const tree  = renderer.create(<Products products='all' ></Products>).toJSON();
    expect(tree).toMatchSnapshot();
})