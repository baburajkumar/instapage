import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle,  MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Basic() {
  return (
    <div className="vh-100" style={{ backgroundColor: '' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="5" lg="4" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '100px' }}
                      src='https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Virat.Kohli</MDBCardTitle>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Posts</p>
                        <p className="mb-0">1,524</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">97M</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Following</p>
                        <p className="mb-0">1.2k</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                        &nbsp;
                      <MDBBtn outline className="me-1 flex-grow-1">Message</MDBBtn>
                     
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

