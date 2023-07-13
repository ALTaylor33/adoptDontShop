// import React, { useState } from 'react';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Do something with the form data, such as submitting to a server
//     console.log('Name:', name);
//     console.log('Email:', email);
//     // Reset the form
//     setName('');
//     setEmail('');
//   };

//   return (
//     <div style={{ paddingBottom: '50px' }}>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             Phone:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label>
//             Name of Pet Interested In:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('1234567890');
  const [petInterestedIn, setPetInterestedIn] = useState('Max');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as submitting to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Name of Pet Interested In:', petInterestedIn);
    // Reset the form
    setName('');
    setEmail('');
    setPhone('');
    setPetInterestedIn('');
  };

  return (
    <div style={{ paddingBottom: '50px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name of Pet Interested In:
            <input
              type="text"
              value={petInterestedIn}
              onChange={(e) => setPetInterestedIn(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
