import React from 'react';
const ChallengeDiscordInfo = () => {
  return (
    <div className="container-fluid p-3">
      <h2 className="text-center mt-5">Challenge Discord Info</h2>

      <div className="d-flex justify-content-center align-items-center mt-4" style={{ whiteSpace: "nowrap" }}>
        <h3 className="mb-0">If you don't know how to create a Discord account,</h3>
        <button 
          className="btn btn-warning btn-sm fw-bold ms-2 pe-5 " 
          style={{width: "150px"}}
          data-bs-toggle="collapse" 
          data-bs-target="#discordInfo"
        >
          Learn More
        </button>
      </div>

      <div className="collapse mt-3 my-3" id="discordInfo">
        <div className="card card-body text-center mx-auto ps-5"
          style={{ maxWidth: "500px", fontSize: "14px", maxHeight: "180px", overflowY: "auto"  }}>
          <p className="mb-2">To create a Discord account:</p>
          <ol className="text-start ps-3">
            <li><a href="https://discord.com/register" target="_blank" rel="noopener noreferrer">Go to Discord Signup</a></li>
            <li>Enter your email, username, and password</li>
            <li>Verify your email</li>
            <li>Start using Discord!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDiscordInfo;
