import React from 'react';
import './DropDown.css';

const DropDown: React.FC = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {/* Placeholder for global messages */}
          
          {/* Assuming you load this script elsewhere or via module bundler */}
          {/* <script type="text/javascript" src="/js/sinaprinting/jquery.uploadfile.min.js"></script> */}
          
          <form
            id="uploader_form"
            className="scaffold-form"
            name="uploader_form"
            action="/catalog/product/view/id/210/"
            method="post"
            encType="multipart/form-data"
          >
            <div className="uploader_form">
              <input type="hidden" name="id" value="291" />
              <input type="hidden" name="productid" value="210" />
              <input type="hidden" name="sides" value="1" />
              <input type="hidden" name="templatesize" value="77" />
              <input type="hidden" name="product" value="18" />
              <input type="hidden" id="oneSideOrTwoSides" name="oneSideOrTwoSides" value="1" />
              <div className="fieldset">
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ padding: '10px' }}>
                    <div className="button-set">
                      <h4 className="legend">Upload file </h4>
                      <div className="ajax-upload-dragdrop upload-drag-and-drop-box">
                        <img
                          src="https://res.cloudinary.com/dtutqsucw/image/upload/v1438955603/file-upload-01.png"
                          alt="upload-file"
                        />
                        <br />
                        <p className="file-type-desc">
                          (<text color="red">*</text>file extension allowed: <strong>.csv</strong>)
                        </p>
                        <p className="drag-drop-text">Drag & Drop Files here Or</p>
                        <div className="browse-button" style={{ position: 'relative', cursor: 'default' }}>
                          Browse
                          <form
                            method="POST"
                            action="https://eprint4me.ca/uploader/view/ajaxUpload/"
                            encType="multipart/form-data"
                            style={{ margin: 0, padding: 0 }}
                          ></form>
                        </div>
                      </div>

                      {/* <div className="ajax-file-upload-statusbar" style={{ width: '100%' }}>
                        <div id="ajax-file-upload-radiobutton1" className="ajax-file-upload-radiobutton" style={{ display: 'none' }}>
                          <input type="radio" name="frontOrBack1" value="front" defaultChecked /> Page 1 &nbsp;
                          <input type="radio" name="frontOrBack1" value="back" /> Page 2
                        </div>
                        <img
                          className="ajax-file-upload-preview"
                          style={{ width: '100%', height: 'auto', display: 'none' }}
                          alt="upload-preview"
                        />
                        <div className="ajax-file-upload-filename">1) RWACImage-1.pdf</div>
                        <div className="ajax-file-upload-progress" style={{ display: 'inline-block' }}>
                          <div className="ajax-file-upload-bar" style={{ width: '100%', textAlign: 'center' }}>
                            100%
                          </div>
                        </div>
                        <div className="ajax-file-upload-red ajax-file-upload-abort" style={{ display: 'none' }}>
                          Abort
                        </div>
                        <div className="ajax-file-upload-red ajax-file-upload-cancel" style={{ display: 'none' }}>
                          Cancel
                        </div>
                        <div className="ajax-file-upload-green" style={{ display: 'none' }}>
                          Done
                        </div>
                        <div className="ajax-file-upload-green" style={{ display: 'none' }}>
                          Download
                        </div>
                        <div className="ajax-file-upload-red" style={{ display: 'inline-block' }}>
                          Delete
                        </div>
                      </div>
                      <div id="advice-required-entry-chooseFile" style={{ display: 'none' }}>
                        You need to choose at least one file
                      </div> */}
                      <form
                        method="POST"
                        action="https://eprint4me.ca/uploader/view/ajaxUpload/"
                        encType="multipart/form-data"
                        style={{ margin: 0, padding: 0 }}
                      >
                        <input
                          type="file"
                          id="ajax-upload-id-1438952882103"
                          name="fileToUploadbyAjax[]"
                          accept="*"
                          multiple
                          style={{ position: 'absolute', cursor: 'pointer', opacity: 0 }}
                        />
                      </form>
                    </div>
                  </li>
                </ul>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginLeft: '15px', marginTop: '-25px' }}>
                    <div id="eventmessage" style={{ display: 'inline-block' }}></div>
                  </li>
                </ul>
              </div>

              <div className="file-upload-buttons">
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ padding: '10px' }}>
                    <div className="add-to-cart">
                      <input type="hidden" name="item_id" value="" />
                      <input type="hidden" name="uploadedfiles" id="uploadedfiles" value="" />
                      <input type="hidden" name="product_category_id" id="product_category_id" value="291" />
                      <input type="hidden" name="uploadedfiles_additional" id="uploadedfiles_additional" value="" />
                      &nbsp;&nbsp;
                      <button className="form-upload-button" type="submit" id="uploadFileButton" name="btnSubmit">
                        <span>
                          <span id="uploadButtonName">
                            <p>
                              Upload
                              <img
                                src="https://res.cloudinary.com/dtutqsucw/image/upload/v1438960670/file-upload.png"
                                className="animated slideInUp"
                                alt="upload-button"
                              />
                            </p>
                          </span>
                        </span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default DropDown;
