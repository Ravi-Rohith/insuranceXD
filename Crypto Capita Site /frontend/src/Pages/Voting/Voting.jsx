import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import claimABI from './Claim_ABI.json'; // Import your contract's ABI
import { voteAvailableArr } from '../../DataArr/voteAvailableArr';
        


const Voting = () => {

const [testArr, setTestArr ]= useState(voteAvailableArr);

  const ethers = require("ethers")
  const onFinish = async (values) => {

    const {
      claimAmount,
      insurancePolicyID,
      claimDate,
      supportingDocuments,
      codeAuthorityReport,
    } = values;

    try {


    //  Connect to Ethereum using Ethers.js
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const contractAddress = '0x6FB195624Dd69E375798f4878525D0e3156F7735'; // Replace with your contract's address
        const contract = new ethers.Contract(contractAddress, claimABI, signer);

        // Convert claimAmount to wei
        const claimAmountWei = ethers.utils.parseEther(claimAmount);

        // Call the makeClaim function on your contract
        console.log(contract)
        const transaction = await contract.addPoliceReport(
         "11112345123456789098765111", false, 1999993
        );

      

        console.log(transaction)
        console.log('Claim successful. Transaction hash:', transaction);
      } else {
        console.error('Ethereum provider not available. Make sure you have MetaMask or a compatible wallet installed.');
      }
    } catch (error) {
      console.error('Claim failed:', error);
    }
  };


  return (
//     <div className="px-5 ">
//       <div className="text-xl font-bold mt-2 mb-3 justify-start" style={{ fontSize: "32pt" }}>Voting System</div>
      
//       <div className='p-3 rounded-lg bg-gray-300 w-fit'>Credit Score: 89</div>


//       {testArr.map((i, index)=>{
//         return <div key={i +"-vote-record-"} className={`rounded-lg my-3 p-2 `}>
           
//            <div className='flex-row flex justify-between gap-2'> <div className='flex flex-col items-start justify-start align-center '> <div className='font-semibold'>Date: {i.date}</div>
//             <div> <strong>Description:</strong> {i.description}</div>
//             <div><strong>Documents:</strong> {i.supportingDocuments}</div>
//             <div><strong>Amount:</strong> {i.transactionAmount}</div></div>

            
            

//             <div className='flex justify-end gap-3 align-center items-center mr-5'> <div className='flex align-center'> <Button className='primary outline-double text-black align-center' style={{background: "#90EE90"}} onClick={()=>{

//               alert("You have approved an insurance claim.");

//               //remove obj from array voteAvailableArr
              

//              setTestArr(testArr.filter((ii)=>{
//               return ii.id != i.id
//             })) 
              
              


               
//             }}>Approve</Button>  </div>
//             <div className='flex align-center'> <Button className='primary outline-double text-black' style={{background: "#ffcccb"}} onClick={()=>{

// alert("You have rejected an insurance claim.")
// setTestArr(testArr.filter((ii)=>{
//   return ii.id != i.id
// })) 

// }}>Reject</Button>   </div></div>
            
//             </div>

          
           
           


           
//         </div>
//       })}

      


//     </div>
    <>
      <div class="flex justify-center my-16">

    
<ol class="flex-col  justify-center relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 w-[500px]">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg class="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
        <h3 class="font-medium leading-tight">Personal Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
        <h3 class="font-medium leading-tight">Account Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
        <h3 class="font-medium leading-tight">Review</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </span>
        <h3 class="font-medium leading-tight">Confirmation</h3>
        <p class="text-sm">Step details here</p>
    </li>
</ol>
      </div>
</>
  );
};

export default Voting;

