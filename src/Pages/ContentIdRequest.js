import React, {useState} from 'react'
import InputField from '../Component/InputField/InputField'
import ContentIdRequestTable from '../Component/Table/ContentIdRequestTable';
import PrimaryBtn from '../Component/Button/PrimaryBtn';


function ContentIdRequest() {
  const [name, setName] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="yt-ex-bg">
      <div className="section_title">
        <div className="text_area">
          <h2>Content Id Request</h2>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12">
        <InputField label="UPC/EAN" value={name} star="*" onChange={handleNameChange} />
        <div className='mt-4'><PrimaryBtn label="Submit"/></div>
        </div>
      </div>
      </div>
      <div className="table_content">
      <h2 className='mb-5'>All History</h2>
        <ContentIdRequestTable />
      </div>
    </>
  )
}

export default ContentIdRequest
