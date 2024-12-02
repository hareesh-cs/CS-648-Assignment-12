import React from 'react';

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { ...RESET_VALUES },
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSave(e) {
    e.preventDefault();
    this.props.onSave(this.state.product);
    this.setState({ product: { ...RESET_VALUES } });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: { ...prevState.product, [name]: value },
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.product.name}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={this.state.product.category}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={this.state.product.price}
          onChange={this.handleChange}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}

export default ProductForm;
