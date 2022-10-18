import React from 'react';

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import './footer.css'

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
            
            <h5 className='text-uppercase'>Support</h5>

            <ul className='list-unstyled mb-0 list'>
              <li>
                <a href='#!' className='text-dark'>
                Help Centre
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                AirCover
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Safety information
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Supporting people with disabilities
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Cancellation options
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Our COVID-19 Response
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Report a neighbourhood concern
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
            <h5 className='text-uppercase mb-0 '>Community</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                Airbnb.org: disaster relief housing
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Support Afghan refugees
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Combating discrimination
                </a>
              </li>
              
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
            <h5 className='text-uppercase'>Hosting</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                Try hosting
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                AirCover for Hosts
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Explore hosting resources
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Visit our community forum
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                How to host responsibly
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0 text-start'>
            <h5 className='text-uppercase mb-0'>Airbnb</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                Newsroom
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Learn about new features
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Letter from our founders
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Careers
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Investors
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter> */}
    </MDBFooter>
  );
}