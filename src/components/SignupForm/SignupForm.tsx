// src/pages/signup/SignupForm.tsx
import { useState } from 'react';

const SignupForm = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [password, setPassword] = useState('');

  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobPosition: '',
    password: '',
  });

  const validateForm = () => {
    const formErrors = { ...errors };
    let isValid = true;

    
    if (!firstName || firstName.length < 2 || /\d/.test(firstName)) {
      formErrors.firstName = 'First name must have at least 2 characters and no numbers.';
      isValid = false;
    } else {
      formErrors.firstName = '';
    }

    
    if (!lastName || lastName.length < 2 || /\d/.test(lastName)) {
      formErrors.lastName = 'Last name must have at least 2 characters and no numbers.';
      isValid = false;
    } else {
      formErrors.lastName = '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      formErrors.email = 'Please enter a valid email address.';
      isValid = false;
    } else {
      formErrors.email = '';
    }

    
    if (!jobPosition || jobPosition.length < 5 || /\d/.test(jobPosition)) {
      formErrors.jobPosition = 'Job position must have at least 5 characters and no numbers.';
      isValid = false;
    } else {
      formErrors.jobPosition = '';
    }

    
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
    if (!password || !passwordPattern.test(password)) {
      formErrors.password = 'Password must be at least 8 characters long, contain at least 1 number, 1 uppercase letter, and 1 special character.';
      isValid = false;
    } else {
      formErrors.password = '';
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid. Submitting...');
      // Aqui você pode adicionar a lógica de envio do formulário (ex: API)
    }
  };

  return (
    <div className="w-full sm:w-[520px] p-5">
      
      <div className="font-roboto mb-0 opacity-100 text-[#331436] mx-auto w-full sm:w-[520px] text-[40px] font-bold font-roboto text-center sm:text-left sm:left-[790px]">
        Sign up Information
      </div>
      
      
      <div className="mt-1 opacity-100">
        <div className="w-[520px] h-[24px] text-left text-[#331436] ">
          Already have an account?{' '}
          <span
            className="font-bold text-[#4F46E5] cursor-pointer"
            onClick={() => window.location.href = '/login'} // Redirect to login page
          >
            Log in.
          </span>
        </div>
      </div>

      
      <form onSubmit={handleSubmit}>
        
        <div className="mt-6 flex gap-4 mb-4">
          <div className="w-[251px]">
            <label className="block text-left text-sm font-semibold text-[#331436]">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className={`w-full px-4 py-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          
          <div className="w-[251px]">
            <label className="block text-left text-sm font-semibold text-[#331436]">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className={`w-full px-4 py-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

      
        <div className="mb-4">
          <label className="block text-left text-sm font-semibold text-[#331436]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        
        <div className="mb-4">
          <label className="block text-left text-sm font-semibold text-[#331436]">Job position</label>
          <input
            type="text"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            placeholder="Enter your job position (example: Project Manager)"
            className={`w-full px-4 py-2 border rounded-md ${errors.jobPosition ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.jobPosition && <p className="text-red-500 text-sm">{errors.jobPosition}</p>}
        </div>

        
        <div className="mb-6">
          <label className="block text-left text-sm font-semibold text-[#331436]">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className={`w-full px-4 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button type="submit" className="bg-[#1E293B] text-white p-3 rounded-lg w-full hover:bg-[#2d4352]">
          Create an account
        </button>

        <div className="mt-4 text-[#331436] text-[16px] font-normal text-center font-roboto opacity-100">
        or sign in with...
      </div>
    
      </form>
    </div>

  );
};

export default SignupForm;
