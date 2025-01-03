
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registerform() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    address: '',
    state: '',
    country: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    address: '',
    state: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'Firstname is required';
    if (!formData.lastname) newErrors.lastname = 'Lastname is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword)
      newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.country) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/LoginData',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // alert('Registration successful!');
        console.log('Submitted Data:', formData);
        navigate('/Registerformdata');
        // navigate('/FormTask');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering. Please try again.');
    }
  };

  const navigate = useNavigate();
  const LoginForm = () => {
    navigate('/FormTask');
  };

  return (
    <form className="form2" onSubmit={handleSubmit}>
      <h1 className="head1">Register form</h1>
      <div style={{ display: 'flex' }}>
        <label className="label1 mt-3">
          Firstname
          <input
            className="box2"
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && (
            <span style={{ color: 'red', fontSize: '13px' }}>
              {errors.firstname}
            </span>
          )}
        </label>
        <label className="label1 mt-3">
          Lastname
          <input
            className="box2"
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <span style={{ color: 'red', fontSize: '13px' }}>
              {errors.lastname}
            </span>
          )}
        </label>
      </div>
      <label className="label2">
        Email
        <input
          className="box3"
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span style={{ color: 'red', fontSize: '13px' }}>
            {errors.email}
          </span>
        )}
      </label>
      <br />
      <label className="label2">
        Mobile Number
        <input
          className="box3"
          type="number"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && (
          <span style={{ color: 'red', fontSize: '13px' }}>
            {errors.mobile}
          </span>
        )}
      </label>

      <div style={{ display: 'flex' }}>
        <label className="label1">
          Password
          <input
            className="box2"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '13px' }}>
              {errors.password}
            </span>
          )}
        </label>
        <label className="label1" id="cpassword">
          Confirm Password
          <input
            className="box2"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span style={{ color: 'red', fontSize: '13px' }}>
              {errors.confirmPassword}
            </span>
          )}
        </label>
      </div>
      <label className="label2">
        Address
        <input
          className="box3"
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && (
          <span style={{ color: 'red', fontSize: '13px' }}>
            {errors.address}
          </span>
        )}
      </label>
<div>
      <label className="label2" htmlFor="state">
        State
      </label>
      <select
        className="box4"
        name="state"
        value={formData.state}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select State
        </option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Kerala">Kerala</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Assam">Assam</option>
        <option value="Delhi">Delhi</option>
      </select>
      {errors.state && (
        <span style={{ color: 'red', fontSize: '13px',paddingLeft:'18px' }}>
          {errors.state}
        </span>
      )}
      </div>

      <label className="label2" htmlFor="country">
        Country
      </label>
      <select
        className="box4"
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select Country
        </option>
        <option value="India">India</option>
        <option value="Singapore">Singapore</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Latvia">Latvia</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="Dubai">Dubai</option>
      </select>
      {errors.country && (
        <span style={{ color: 'red', fontSize: '13px',paddingLeft:'18px' }}>
          {errors.country}
        </span>
      )}

      <div className="submit mt-1">
        <button className="button2" type="submit">
          Register
        </button>
      </div>
      <p className="para1 mt-2">
        Already have an Account?
        <a className="link" href="" onClick={LoginForm}>
          Login
        </a>
      </p>
    </form>
  );
}

export default Registerform;
