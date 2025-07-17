// import React, { useState } from "react";

// const FileModal = ({ handleFileChange }) => {
//   const [isVisible, setIsVisible] = useState(true); // State to manage visibility

//   const handleFileSelection = (e) => {
//     handleFileChange(e); // Call the handleFileChange function passed as prop
//     setIsVisible(false); // Hide the modal after file selection
//   };

//   return (
//     <>
//       {isVisible && ( // Render the modal only if isVisible state is true
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg">
//             <label htmlFor="fileInput" className="block mb-2">Choose Your File</label>
//             <input
//               type="file"
//               id="fileInput"
//               onChange={handleFileSelection} // Call handleFileSelection on file selection
//               multiple // Allow multiple file selection
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FileModal;
