import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PhotoUploader from "../ImageUpload/PhotoUploader";
import InputField from "../InputField/InputField";
import PrimaryBtn from '../Button/PrimaryBtn';

function LabelManagePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [spotifyId, setSpotifyId] = useState("");
  const [appleId, setAppleId] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [youtubeChannelUrl, setYoutubeChannelUrl] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSpotifyIdChange = (event) => {
    setSpotifyId(event.target.value);
  };

  const handleAppleIdChange = (event) => {
    setAppleId(event.target.value);
  };

  const handleFacebookUrlChange = (event) => {
    setFacebookUrl(event.target.value);
  };

  const handleInstagramIdChange = (event) => {
    setInstagramId(event.target.value);
  };

  const handleYoutubeChannelUrlChange = (event) => {
    setYoutubeChannelUrl(event.target.value);
  };

  return (
    <>
      <button className="btn add_label_btn" onClick={handleShow}>
        Add Primary Artist
      </button>
      <Modal show={show} onHide={handleClose} className="add_label">
        <Modal.Header closeButton>
          <Modal.Title>Add Primary Artist Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhotoUploader />
          <div className="input_group">
            <InputField
              label="Name"
              star="*"
              value={name}
              onChange={handleNameChange}
            />
            <InputField
              label="Spotify ID"
              value={spotifyId}
              onChange={handleSpotifyIdChange}
            />
            <InputField
              label="Apple ID"
              value={appleId}
              onChange={handleAppleIdChange}
            />
            <InputField
              label="Facebook URL"
              value={facebookUrl}
              onChange={handleFacebookUrlChange}
            />
            <InputField
              label="Instagram ID"
              value={instagramId}
              onChange={handleInstagramIdChange}
            />
            <InputField
              label="YouTube Channel URL"
              value={youtubeChannelUrl}
              onChange={handleYoutubeChannelUrlChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn_area">
            <PrimaryBtn label="Submit" onClick={handleClose}/>
            <button className="btn_s" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LabelManagePopup;
