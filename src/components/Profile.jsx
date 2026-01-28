import React, { useEffect } from 'react';
import { useBulder } from '../context/CVProvider';

function Profile() {
  const { preview, handleFileChange } = useBulder();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <section className="profile-section container">
      <div className="pro-grid">
        <div className="pro-oval">
          {preview ? (
            <img src={preview} alt="preview" />
          ) : (
            <div className="pro-ova" />
          )}
        </div>

        <div className="pro-area">
          <h2 className="pro-title">Profile Picture</h2>
          <p className="pro-text">
            Adding a photo to your CV can be a great way to personalize your
            application and make a positive first impression. When uploading
            your photo, make sure it is a clear and recent headshot that shows
            your face in a professional manner. When taking your photo, dress
            professionally and consider the background and lighting. A neutral
            background and good lighting can help to highlight your features and
            present you in the best possible light. Remember, your photo is an
            important part of your CV, so take the time to choose a high-quality
            image that represents you in a professional and approachable manner.
            When you're done, the next step is to start filling your application
            with your personal information, good luck!
          </p>

          <div>
            <input
              className="btn-nav"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
