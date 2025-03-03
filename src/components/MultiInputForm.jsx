import React from 'react'
import { useState } from 'react'

function MultiInputForm() {
const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

  return (
    <>
    <form>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
    />
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
    />
  </form>

  <p>Name: {formData.name}</p>
  <p>Email: {formData.email}</p>
  <p>Password: {formData.password}</p>
    </>

  )
}

export default MultiInputForm