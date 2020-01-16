import React from 'react'

const validators = {
  name: val => val.length > 3
}

const initialState = {
  data: {
    name: ''
  },
  errors: {
    name: false
  },
  touch: {
    name: false
  }
}

class UserForm extends React.Component {
  state = initialState

  handleSubmit = (event) => {
    this.props.onAddUser({...this.state.data})
    this.setState(initialState)
    event.preventDefault()
  }

  handleBlur = (event) => {
    this.setState({
      touch: {
        name: true
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      data: {
        name: event.target.value
      }, errors: {
        name: !validators.name(event.target.value)
      }
    })
  }

  render() {
    const { errors, data, touch } = this.state
    const anyError = Object.values(errors).some(x => x)

    return (
      <div className="UserForm">
        <form onSubmit={this.handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              autoComplete="off"
              value={data.name}
              onBlur={(event) => this.handleBlur(event)}
              onChange={(event) => this.handleChange(event)}
              placeholder="Name" />
            {touch.name && errors.name && (
              <div className="invalid-feedback">
                Must be > 3
              </div>
            )}
          </div>

          <button disabled={anyError} type="submit" className="btn btn-primary">
            Add
          </button>
        </form>

        <pre className="bg-light p-2">
          {JSON.stringify(this.state, null, "  ")}
        </pre>
      </div>
    )
  }
}

export default UserForm
