import React, { useState } from 'react'
import Input from '../forms/Input'
import Select from '../forms/Select'
const AddUserForm = props => {
	const initialFormState =   { id: null, name: '', age: null, gender : "", course : []}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
		<Input
          inputtype={"text"}
          title={"Full Name"}
          name={"name"}
          value={user.name}
          placeholder={"Enter your name"}
          handleChange={handleInputChange}
        />{" "}
		<Input
          inputtype={"number"}
          name={"age"}
          title={"Age"}
          value={user.age}
          placeholder={"Enter your age"}
          handleChange={handleInputChange}
        />{" "}
	
		<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
