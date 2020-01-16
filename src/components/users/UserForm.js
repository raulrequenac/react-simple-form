import React from 'react'

const validators = {
  name: val => true
}

class UserForm extends React.Component {
  state = {
    data: {
    },
    errors: {
    },
    touch: {
    }
  }

  handleSubmit = (event) => {
    // call parent function
  }

  handleBlur = (event) => {
    // means in and out
  }

  handleChange = (event) => {
    // use event.target!!
    // change state.data and state.error ;)
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
              className="form-control"
              id="name"
              autoComplete="off"
              // value={}
              // onBlur={}
              // onChange={}
              placeholder="Name" />

            {errors.name && (
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
