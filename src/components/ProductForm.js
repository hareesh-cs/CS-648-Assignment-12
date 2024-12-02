import React from "react";

const RESET_VALUES = { id: "", category: "", price: "", name: "" };

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
      <form onSubmit={this.handleSave} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={this.state.product.name}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={this.state.product.category}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            value={this.state.product.price}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}

export default ProductForm;
